import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Poster } from 'src/interfaces/poster.interface';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { SnackbarState } from 'src/store/reducers/snackbar.reducer';
import { DisableSnackBar } from 'src/store/actions/snackbar.actions';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
    selector: 'app-posters-list',
    templateUrl: './posters-list.component.html',
    styleUrls: ['./posters-list.component.css'],
})
export class PostersListComponent implements OnInit, OnChanges {
    @Input() posters: Array<Poster> | undefined | null;
    @Input() needSnackbar: boolean | undefined | null;

    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    rowHeight = '1:1.2';

    constructor(
        private snackBar: MatSnackBar,
        private store$: Store<SnackbarState>,
        breakpointObserver: BreakpointObserver,
    ) {
        breakpointObserver
            .observe([Breakpoints.WebPortrait, Breakpoints.TabletLandscape, Breakpoints.WebLandscape])
            .subscribe((result) => {
                if (result.matches) {
                    if (result.breakpoints[Breakpoints.TabletLandscape]) {
                        this.rowHeight = '1:1.5';
                    }
                    if (result.breakpoints[Breakpoints.WebPortrait]) {
                        this.rowHeight = '1:2';
                    }
                    if (result.breakpoints[Breakpoints.WebLandscape]) {
                        this.rowHeight = '1:1.2';
                    }
                }
            });
    }

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.needSnackbar?.currentValue) {
            this.snackBar.open('Poster has been added', 'Close', {
                duration: 2000,
                horizontalPosition: this.horizontalPosition,
                verticalPosition: this.verticalPosition,
            });
            setTimeout(() => this.store$.dispatch(new DisableSnackBar()));
        }
    }
}

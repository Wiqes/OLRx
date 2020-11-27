import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Posters } from 'src/interfaces/poster.interface';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { SnackbarState } from 'src/store/reducers/snackbar.reducer';
import { DisableSnackBar } from 'src/store/actions/snackbar.actions';
import { BreakpointObserverService } from 'src/services/breakpoint-observer.service';

@Component({
    selector: 'app-posters-list',
    templateUrl: './posters-list.component.html',
    styleUrls: ['./posters-list.component.scss'],
    providers: [BreakpointObserverService],
})
export class PostersListComponent implements OnInit, OnChanges {
    @Input() posters?: Posters | null;
    @Input() needSnackbar?: boolean | null;

    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';
    rowHeight = '1:1.2';

    constructor(
        private snackBar: MatSnackBar,
        private breakpointObserver: BreakpointObserverService,
        private store$: Store<SnackbarState>,
    ) {
        const { layout$ } = breakpointObserver;
        layout$?.subscribe(({ tabletLandscape, webPortrait, webLandscape }) => {
            if (tabletLandscape) {
                this.rowHeight = '1:1.6';
            }
            if (webPortrait) {
                this.rowHeight = '1:2';
            }
            if (webLandscape) {
                this.rowHeight = '1:1.2';
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

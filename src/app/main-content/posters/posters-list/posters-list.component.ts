import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Poster } from 'src/interfaces/poster.interface';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { SnackbarState } from 'src/store/reducers/snackbar.reducer';
import { DisableSnackBar } from 'src/store/actions/snackbar.actions';

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

    constructor(private snackBar: MatSnackBar, private store$: Store<SnackbarState>) {}

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

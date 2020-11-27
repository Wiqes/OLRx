import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { postersActionsType } from '../store/actions/posters.actions';
import { EnableSnackBarAction } from '../store/actions/snackbar.actions';

@Injectable()
export class PosterEffects {
    constructor(private actions$: Actions) {}

    @Effect()
    addedPoster$(): any {
        return this.actions$.pipe(
            ofType(postersActionsType.addPoster),
            map(() => {
                return new EnableSnackBarAction({ snackbarText: 'The poster has been added' });
            }),
        );
    }

    @Effect()
    movedPoster$(): any {
        return this.actions$.pipe(
            ofType(postersActionsType.toggleToShoppingCart),
            map(() => {
                return new EnableSnackBarAction({ snackbarText: 'The poster has been moved' });
            }),
        );
    }
}

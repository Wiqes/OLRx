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
    addedPosterToCart$(): any {
        return this.actions$.pipe(
            ofType(postersActionsType.addShoppingCartFlag),
            map(() => {
                return new EnableSnackBarAction({ snackbarText: 'The poster has been added to shopping cart' });
            }),
        );
    }

    @Effect()
    removedPosterFromCart$(): any {
        return this.actions$.pipe(
            ofType(postersActionsType.removeShoppingCartFlag),
            map(() => {
                return new EnableSnackBarAction({ snackbarText: 'The poster has been removed from shopping cart' });
            }),
        );
    }
}

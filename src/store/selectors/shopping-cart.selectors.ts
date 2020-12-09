import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Posters } from 'src/interfaces/poster.interface';
import { shoppingCartPosters, ShoppingCartPostersState } from '../reducers/shopping-cart.reducer';

export const selectShoppingCartPostersFeature = createFeatureSelector<ShoppingCartPostersState>(shoppingCartPosters);

export const selectShoppingCartPosters = createSelector(
    selectShoppingCartPostersFeature,
    (state: ShoppingCartPostersState): Posters => state.posters,
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Posters } from 'src/interfaces/poster.interface';
import { shoppingCart, ShoppingCartState } from '../reducers/shopping-cart.reducer';

export const selectShoppingCartPostersFeature = createFeatureSelector<ShoppingCartState>(shoppingCart);

export const selectShoppingCartPosters = createSelector(
    selectShoppingCartPostersFeature,
    (state: ShoppingCartState): Posters => state.posters,
);

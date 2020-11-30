import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { posters, postersReducer, PostersState } from './reducers/posters.reducer';
import { snackbar, snackbarReducer, SnackbarState } from './reducers/snackbar.reducer';
import { shoppingCart, shoppingCartReducer, ShoppingCartState } from './reducers/shopping-cart.reducer';

export interface State {
    [posters]: PostersState;
    [snackbar]: SnackbarState;
    [shoppingCart]: ShoppingCartState;
}

export const reducers: ActionReducerMap<State> = {
    [posters]: postersReducer,
    [snackbar]: snackbarReducer,
    [shoppingCart]: shoppingCartReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

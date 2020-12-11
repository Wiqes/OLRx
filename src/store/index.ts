import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { posters, postersReducer, PostersState } from './reducers/posters.reducer';
import { snackbar, snackbarReducer, SnackbarState } from './reducers/snackbar.reducer';
import {
    shoppingCartPosters,
    shoppingCartPostersReducer,
    ShoppingCartPostersState,
} from './reducers/shopping-cart.reducer';
import { main, mainReducer, MainState } from './reducers/main.reducer';

export interface State {
    [main]: MainState;
    [posters]: PostersState;
    [shoppingCartPosters]: ShoppingCartPostersState;
    [snackbar]: SnackbarState;
}

export const reducers: ActionReducerMap<State> = {
    [main]: mainReducer,
    [posters]: postersReducer,
    [shoppingCartPosters]: shoppingCartPostersReducer,
    [snackbar]: snackbarReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

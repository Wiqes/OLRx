import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { posters, postersReducer, PostersState } from './reducers/posters.reducer';
import { snackbar, snackbarReducer, SnackbarState } from './reducers/snackbar.reducer';

export interface State {
    [posters]: PostersState;
    [snackbar]: SnackbarState;
}

export const reducers: ActionReducerMap<State> = {
    [posters]: postersReducer,
    [snackbar]: snackbarReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from 'src/environments/environment';
import { posters, postersReducer, PostersState } from './reducers/posters.reducer';

export interface State {
    [posters]: PostersState;
}

export const reducers: ActionReducerMap<State> = {
    [posters]: postersReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

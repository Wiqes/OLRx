import { createFeatureSelector, createSelector } from '@ngrx/store';
import { main, MainState } from '../reducers/main.reducer';

export const selectAuthFeature = createFeatureSelector<MainState>(main);

export const selectAuthState = createSelector(selectAuthFeature, (state: MainState): boolean => state.authenticated);

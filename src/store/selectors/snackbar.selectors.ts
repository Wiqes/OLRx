import { createFeatureSelector, createSelector } from '@ngrx/store';
import { snackbar, SnackbarState } from '../reducers/snackbar.reducer';

export const selectSnackbarFeature = createFeatureSelector<SnackbarState>(snackbar);

export const selectSnackbar = createSelector(
    selectSnackbarFeature,
    (state: SnackbarState): boolean => state.needSnackbar,
);

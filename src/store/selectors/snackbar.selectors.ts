import { createFeatureSelector, createSelector } from '@ngrx/store';
import { snackbar, SnackbarState } from '../reducers/snackbar.reducer';
import { AbleToBeUndefined } from 'src/interfaces/able-to-be-undefined.interface';

export const selectSnackbarFeature = createFeatureSelector<SnackbarState>(snackbar);

export const selectSnackbar = createSelector(
    selectSnackbarFeature,
    (state: SnackbarState): AbleToBeUndefined<string> => state.snackbar,
);

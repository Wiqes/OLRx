import { createFeatureSelector, createSelector } from '@ngrx/store';
import { posters, PostersState } from '../reducers/posters.reducer';
import { Poster } from 'src/interfaces/poster.interface';

export const selectPostersFeature = createFeatureSelector<PostersState>(posters);

export const selectPosters = createSelector(
    selectPostersFeature,
    (state: PostersState): Array<Poster> => state.posters,
);

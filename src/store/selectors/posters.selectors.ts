import { createFeatureSelector, createSelector } from '@ngrx/store';
import { posters, PostersState } from '../reducers/posters.reducer';
import { Posters } from 'src/interfaces/poster.interface';

export const selectPostersFeature = createFeatureSelector<PostersState>(posters);

export const selectPosters = createSelector(selectPostersFeature, (state: PostersState): Posters => state.posters);

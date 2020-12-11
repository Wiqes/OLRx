import { createFeatureSelector, createSelector } from '@ngrx/store';
import { posters, PostersState } from '../reducers/posters.reducer';
import { Poster, Posters } from 'src/interfaces/poster.interface';
import { AbleToBeUndefined } from 'src/interfaces/able-to-be-undefined.interface';

export const selectPostersFeature = createFeatureSelector<PostersState>(posters);

export const selectPosters = createSelector(selectPostersFeature, (state: PostersState): Posters => state.posters);

export const selectCurrentPoster = createSelector(
    selectPostersFeature,
    (state: PostersState): AbleToBeUndefined<Poster> => state.currentPoster,
);

export const selectCurrentPosterFlag = createSelector(selectPostersFeature, (state: PostersState): boolean =>
    Boolean(state.currentPoster?.isInShoppingCart),
);

export const selectPoster = (posterId?: string) =>
    createSelector(
        selectPostersFeature,
        (state: PostersState): AbleToBeUndefined<Poster> => state.posters.find((poster) => poster?.id === posterId),
    );

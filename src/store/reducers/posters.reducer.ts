import { PostersActions, postersActionsType } from '../actions/posters.actions';
import { Poster, Posters } from 'src/interfaces/poster.interface';
import { AbleToBeUndefined } from 'src/interfaces/able-to-be-undefined.interface';

export const posters = 'posters';

export interface PostersState {
    posters: Posters;
    currentPoster: AbleToBeUndefined<Poster>;
}

const initialState: PostersState = {
    posters: [],
    currentPoster: null,
};

export const postersReducer = (state = initialState, action: PostersActions): PostersState => {
    switch (action.type) {
        case postersActionsType.addPoster:
            return {
                ...state,
                posters: [action.payload?.poster, ...state.posters],
            };
        case postersActionsType.removePoster:
            return {
                ...state,
                posters: state.posters.filter((poster) => poster?.id !== action.payload?.posterId),
            };
        case postersActionsType.addShoppingCartFlag:
            return {
                ...state,
                posters: state.posters.map((poster) => {
                    if (action.payload?.posterId === poster?.id) {
                        return {
                            ...(poster as Poster),
                            isInShoppingCart: true,
                        };
                    } else {
                        return poster;
                    }
                }),
                currentPoster:
                    state.currentPoster && state.currentPoster?.id === action.payload?.posterId
                        ? { ...state.currentPoster, isInShoppingCart: true }
                        : state.currentPoster,
            };
        case postersActionsType.removeShoppingCartFlag:
            return {
                ...state,
                posters: state.posters.map((poster) => {
                    if (action.payload?.posterId === poster?.id) {
                        return {
                            ...(poster as Poster),
                            isInShoppingCart: false,
                        };
                    } else {
                        return poster;
                    }
                }),
                currentPoster:
                    state.currentPoster && state.currentPoster?.id === action.payload?.posterId
                        ? { ...state.currentPoster, isInShoppingCart: false }
                        : state.currentPoster,
            };
        case postersActionsType.getPosters:
            return {
                ...state,
                posters: action.payload?.posters ? [...action.payload?.posters] : [],
            };
        case postersActionsType.setCurrentPoster:
            return {
                ...state,
                currentPoster: action.payload?.poster,
            };
        default:
            return state;
    }
};

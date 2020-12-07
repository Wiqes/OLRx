import { PostersActions, postersActionsType } from '../actions/posters.actions';
import { Poster, Posters } from 'src/interfaces/poster.interface';

export const posters = 'posters';

export interface PostersState {
    posters: Posters;
}

const initialState: PostersState = {
    posters: [],
};

export const postersReducer = (state = initialState, action: PostersActions): PostersState => {
    switch (action.type) {
        case postersActionsType.addPoster:
            return {
                ...state,
                posters: [action.payload?.poster, ...state.posters],
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
            };
        case postersActionsType.getPosters:
            return {
                ...state,
                posters: action.payload?.posters ? [...action.payload?.posters] : [],
            };
        default:
            return state;
    }
};

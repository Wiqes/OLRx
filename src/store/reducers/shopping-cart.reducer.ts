import { Posters } from 'src/interfaces/poster.interface';
import { ShoppingCartActions, shoppingCartActionsType } from '../actions/shopping-cart.actions';

export const shoppingCartPosters = 'shoppingCartPosters';

export interface ShoppingCartPostersState {
    posters: Posters;
}

const initialState: ShoppingCartPostersState = {
    posters: [],
};

export const shoppingCartPostersReducer = (
    state = initialState,
    action: ShoppingCartActions,
): ShoppingCartPostersState => {
    switch (action.type) {
        case shoppingCartActionsType.getPosters:
            return {
                ...state,
                posters: action.payload?.posters ? [...action.payload?.posters] : [],
            };
        default:
            return state;
    }
};

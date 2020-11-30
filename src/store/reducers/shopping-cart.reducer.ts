import { Posters } from 'src/interfaces/poster.interface';
import { ShoppingCartActions, shoppingCartActionsType } from '../actions/shopping-cart.actions';

export const shoppingCart = 'shoppingCart';

export interface ShoppingCartState {
    posters: Posters;
}

const initialState: ShoppingCartState = {
    posters: [
        {
            id: 1,
            title: 'One aaa',
            isInShoppingCart: false,
            sellerName: 'Name One',
            price: 1674,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        {
            id: 2,
            title: 'Two bbb',
            isInShoppingCart: false,
            sellerName: 'Name One',
            price: 2,
            description: 'Ff cdcdd d',
        },
    ],
};

export const shoppingCartReducer = (state = initialState, action: ShoppingCartActions): ShoppingCartState => {
    switch (action.type) {
        case shoppingCartActionsType.addPoster:
            return {
                ...state,
                posters: [action.payload?.poster, ...state.posters],
            };
        case shoppingCartActionsType.removePoster:
            return {
                ...state,
                posters: state.posters.filter((poster) => action.payload?.posterId === poster?.id),
            };
        default:
            return state;
    }
};

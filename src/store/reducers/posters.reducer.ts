import { PostersActions, postersActionsType } from '../actions/posters.actions';
import { Poster } from 'src/interfaces/poster.interface';

export const posters = 'posters';

export interface PostersState {
    posters: Array<Poster>;
}

const initialState: PostersState = {
    posters: [
        {
            title: 'One',
            sellerName: 'Name One',
            price: 1674,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        { title: 'Two', sellerName: 'Name One', price: 2, description: 'Ff cdcdd d' },
        {
            title: 'Three',
            sellerName: 'Name xcdvxcv',
            price: 1456,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        { title: 'Four', sellerName: 'Name One', price: 1, description: 'GGcfbcvb xcvcvc cvcv' },
        {
            title: 'One',
            sellerName: 'Name cvxcv',
            price: 1345,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        { title: 'Two', sellerName: 'Name One', price: 2, description: 'lightgreen' },
        {
            title: 'Three',
            sellerName: 'Ccvxc cvxc',
            price: 1345,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        { title: 'Four', sellerName: 'Name One', price: 1, description: 'xDDFD cvdfd dcvdvfdv' },
        {
            title: 'One',
            sellerName: 'Rre sd One',
            price: 13454,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        { title: 'Two', sellerName: 'Name One', price: 2, description: 'lightgreen' },
        {
            title: 'Three',
            sellerName: 'DDss One',
            price: 12343,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        { title: 'Four', sellerName: 'Name One', price: 1, description: 'xzdvcvxcv cvcvcx' },
        {
            title: 'One',
            sellerName: 'DSS ss One',
            price: 1344,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        { title: 'Two', sellerName: 'Name One', price: 2, description: 'xcvxcv cvcxvxcv ' },
        {
            title: 'Three',
            sellerName: 'Gdxzsfd One',
            price: 1454,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        { title: 'Four', sellerName: 'Name One', price: 1, description: 'xcvxcv cvxcvxcvxcv' },
    ],
};

export const postersReducer = (state = initialState, action: PostersActions): PostersState => {
    switch (action.type) {
        case postersActionsType.addPoster:
            return {
                ...state,
                posters: [action.payload, ...state.posters],
            };
        default:
            return state;
    }
};

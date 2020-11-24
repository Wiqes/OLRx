import { PostersActions, postersActionsType } from '../actions/posters.actions';
import { Posters } from 'src/interfaces/poster.interface';

export const posters = 'posters';

export interface PostersState {
    posters: Posters;
}

const initialState: PostersState = {
    posters: [
        {
            id: 1,
            title: 'One aaa',
            sellerName: 'Name One',
            price: 1674,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        { id: 2, title: 'Two bbb', sellerName: 'Name One', price: 2, description: 'Ff cdcdd d' },
        {
            id: 3,
            title: 'Three ccc',
            sellerName: 'Name xcdvxcv',
            price: 1456,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        { id: 4, title: 'Four', sellerName: 'Name One', price: 1, description: 'GGcfbcvb xcvcvc cvcv' },
        {
            id: 5,
            title: 'One ddd',
            sellerName: 'Name cvxcv',
            price: 1345,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        { id: 6, title: 'Two', sellerName: 'Name One', price: 2, description: 'lightgreen' },
        {
            id: 7,
            title: 'Three eee',
            sellerName: 'Ccvxc cvxc',
            price: 1345,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        { id: 8, title: 'Four', sellerName: 'Name One', price: 1, description: 'xDDFD cvdfd dcvdvfdv' },
        {
            id: 9,
            title: 'One fff',
            sellerName: 'Rre sd One',
            price: 13454,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        { id: 10, title: 'Two ggg', sellerName: 'Name One', price: 2, description: 'lightgreen' },
        {
            id: 11,
            title: 'Three hhh',
            sellerName: 'DDss One',
            price: 12343,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        { id: 12, title: 'Four', sellerName: 'Name One', price: 1, description: 'xzdvcvxcv cvcvcx' },
        {
            id: 13,
            title: 'One iii',
            sellerName: 'DSS ss One',
            price: 1344,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        { id: 14, title: 'Two jj', sellerName: 'Name One', price: 2, description: 'xcvxcv cvcxvxcv ' },
        {
            id: 15,
            title: 'Three kkk',
            sellerName: 'Gdxzsfd One',
            price: 1454,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        { id: 16, title: 'Four ll', sellerName: 'Name One', price: 1, description: 'xcvxcv cvxcvxcvxcv' },
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

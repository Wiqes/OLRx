import { PostersActions, postersActionsType } from '../actions/posters.actions';
import { Poster, Posters } from 'src/interfaces/poster.interface';

export const posters = 'posters';

export interface PostersState {
    posters: Posters;
}

const initialState: PostersState = {
    posters: [
        {
            id: 1,
            title: 'One aaa',
            photo: 'shiba2.jpg',
            isInShoppingCart: false,
            sellerName: 'Name One',
            price: 1674,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        {
            id: 2,
            title: 'Two bbb',
            photo: 'poligon-2560.jpg',
            isInShoppingCart: false,
            sellerName: 'Name One',
            price: 2,
            description: 'Ff cdcdd d',
        },
        {
            id: 3,
            title: 'Three ccc',
            isInShoppingCart: false,
            sellerName: 'Name xcdvxcv',
            price: 1456,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        {
            id: 4,
            title: 'Four',
            photo: 'gert.jpg',
            isInShoppingCart: false,
            sellerName: 'Name One',
            price: 1,
            description: 'GGcfbcvb xcvcvc cvcv',
        },
        {
            id: 5,
            title: 'One ddd',
            isInShoppingCart: false,
            sellerName: 'Name cvxcv',
            price: 1345,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        {
            id: 6,
            title: 'Two',
            photo: 'riop.jpg',
            isInShoppingCart: false,
            sellerName: 'Name One',
            price: 2,
            description: 'lightgreen',
        },
        {
            id: 7,
            title: 'Three eee',
            photo: 'jilo.jpeg',
            isInShoppingCart: false,
            sellerName: 'Ccvxc cvxc',
            price: 1345,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        {
            id: 8,
            title: 'Four',
            isInShoppingCart: false,
            sellerName: 'Name One',
            price: 1,
            description: 'xDDFD cvdfd dcvdvfdv',
        },
        {
            id: 9,
            title: 'One fff',
            isInShoppingCart: false,
            sellerName: 'Rre sd One',
            price: 13454,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        {
            id: 10,
            title: 'Two ggg',
            isInShoppingCart: false,
            sellerName: 'Name One',
            price: 2,
            description: 'lightgreen',
        },
        {
            id: 11,
            title: 'Three hhh',
            isInShoppingCart: false,
            sellerName: 'DDss One',
            price: 12343,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        {
            id: 12,
            title: 'Four',
            isInShoppingCart: false,
            sellerName: 'Name One',
            price: 1,
            description: 'xzdvcvxcv cvcvcx',
        },
        {
            id: 13,
            title: 'One iii',
            isInShoppingCart: false,
            sellerName: 'DSS ss One',
            price: 1344,
            description:
                'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan',
        },
        {
            id: 14,
            title: 'Two jj',
            isInShoppingCart: false,
            sellerName: 'Name One',
            price: 2,
            description: 'xcvxcv cvcxvxcv ',
        },
        {
            id: 15,
            title: 'Three kkk',
            isInShoppingCart: false,
            sellerName: 'Gdxzsfd One',
            price: 1454,
            description: 'The Shiba Inu is the smallest of the six original and distinct ',
        },
        {
            id: 16,
            title: 'Four ll',
            isInShoppingCart: false,
            sellerName: 'Name One',
            price: 1,
            description: 'xcvxcv cvxcvxcvxcv',
        },
    ],
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
        default:
            return state;
    }
};

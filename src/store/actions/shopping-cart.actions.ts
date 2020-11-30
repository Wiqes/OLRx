import { Action } from '@ngrx/store';
import { Poster } from 'src/interfaces/poster.interface';

export enum shoppingCartActionsType {
    addPoster = '[SHOPPING-CART] add',
    removePoster = '[SHOPPING-CART] remove',
}

interface Payload {
    posterId?: number;
    poster?: Poster;
}

export class AddPosterToCartAction implements Action {
    readonly type: string = shoppingCartActionsType.addPoster;

    constructor(public payload?: Payload) {}
}

export class RemovePosterFromCartAction implements Action {
    readonly type: string = shoppingCartActionsType.removePoster;

    constructor(public payload?: Payload) {}
}

export type ShoppingCartActions = AddPosterToCartAction | RemovePosterFromCartAction;

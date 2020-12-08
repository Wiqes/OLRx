import { Action } from '@ngrx/store';
import { Posters } from 'src/interfaces/poster.interface';

export enum shoppingCartActionsType {
    getPosters = '[CART-POSTERS] getPosters',
    removePoster = '[CART-POSTERS] removePoster',
}

interface Payload {
    posters?: Posters;
    posterId?: string;
}

export class GetShoppingCartPosters implements Action {
    readonly type: string = shoppingCartActionsType.getPosters;

    constructor(public payload?: Payload) {}
}
export class RemoveShoppingCartPoster implements Action {
    readonly type: string = shoppingCartActionsType.removePoster;

    constructor(public payload?: Payload) {}
}

export type ShoppingCartActions = GetShoppingCartPosters | RemoveShoppingCartPoster;

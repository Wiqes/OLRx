import { Action } from '@ngrx/store';
import { Posters } from 'src/interfaces/poster.interface';

export enum shoppingCartActionsType {
    getPosters = '[CART-POSTERS] getPosters',
}

interface Payload {
    posters?: Posters;
}

export class GetShoppingCartPosters implements Action {
    readonly type: string = shoppingCartActionsType.getPosters;

    constructor(public payload?: Payload) {}
}

export type ShoppingCartActions = GetShoppingCartPosters;

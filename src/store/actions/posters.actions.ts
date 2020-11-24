import { Action } from '@ngrx/store';
import { Poster } from 'src/interfaces/poster.interface';

export enum postersActionsType {
    addPoster = '[POSTERS] add',
    toggleToShoppingCart = '[POSTERS] addToCart',
}

interface Payload {
    posterId?: number;
    poster?: Poster;
}

export class AddPosterAction implements Action {
    readonly type: string = postersActionsType.addPoster;

    constructor(public payload?: Payload) {}
}

export class ToggleToShoppingCart implements Action {
    readonly type: string = postersActionsType.toggleToShoppingCart;

    constructor(public payload?: Payload) {}
}

export type PostersActions = AddPosterAction | ToggleToShoppingCart;

import { Action } from '@ngrx/store';
import { Poster } from 'src/interfaces/poster.interface';

export enum postersActionsType {
    addPoster = '[POSTERS] add',
    addShoppingCartFlag = '[POSTERS] addFlag',
    removeShoppingCartFlag = '[POSTERS] removeFlag',
}

interface Payload {
    posterId?: number;
    poster?: Poster;
}

export class AddPosterAction implements Action {
    readonly type: string = postersActionsType.addPoster;

    constructor(public payload?: Payload) {}
}

export class AddShoppingCartFlag implements Action {
    readonly type: string = postersActionsType.addShoppingCartFlag;

    constructor(public payload?: Payload) {}
}

export class RemoveShoppingCartFlag implements Action {
    readonly type: string = postersActionsType.removeShoppingCartFlag;

    constructor(public payload?: Payload) {}
}

export type PostersActions = AddPosterAction | AddShoppingCartFlag;

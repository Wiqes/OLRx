import { Action } from '@ngrx/store';
import { Poster, Posters } from 'src/interfaces/poster.interface';

export enum postersActionsType {
    addPoster = '[POSTERS] add',
    removePoster = '[POSTERS] remove',
    addShoppingCartFlag = '[POSTERS] addFlag',
    removeShoppingCartFlag = '[POSTERS] removeFlag',
    getPosters = '[POSTERS] getPosters',
}

interface Payload {
    posterId?: string;
    poster?: Poster;
    posters?: Posters;
}

export class AddPosterAction implements Action {
    readonly type: string = postersActionsType.addPoster;

    constructor(public payload?: Payload) {}
}

export class RemovePosterAction implements Action {
    readonly type: string = postersActionsType.removePoster;

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

export class GetPosters implements Action {
    readonly type: string = postersActionsType.getPosters;

    constructor(public payload?: Payload) {}
}

export type PostersActions =
    | AddPosterAction
    | AddShoppingCartFlag
    | RemoveShoppingCartFlag
    | GetPosters
    | RemovePosterAction;

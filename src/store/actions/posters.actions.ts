import { Action } from '@ngrx/store';
import { Poster } from 'src/interfaces/poster.interface';

export enum postersActionsType {
    addPoster = '[POSTERS] add',
}

export class AddPosterAction implements Action {
    readonly type: string = postersActionsType.addPoster;

    constructor(public payload?: Poster) {}
}

export type PostersActions = AddPosterAction;

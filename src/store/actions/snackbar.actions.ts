import { Action } from '@ngrx/store';
import { Poster } from '../../interfaces/poster.interface';

export enum snackbarActionsType {
    enableSnackBar = '[SNACKBAR] enable',
    disableSnackBar = '[SNACKBAR] disable',
}

interface Payload {
    snackbarText?: string;
}

export class EnableSnackBarAction implements Action {
    readonly type: string = snackbarActionsType.enableSnackBar;

    constructor(public payload?: Payload) {}
}

export class DisableSnackBar implements Action {
    readonly type = snackbarActionsType.disableSnackBar;

    constructor(public payload?: Payload) {}
}

export type SnackbarActions = EnableSnackBarAction | DisableSnackBar;

import { Action } from '@ngrx/store';

export enum snackbarActionsType {
    enableSnackBar = '[SNACKBAR] enable',
    disableSnackBar = '[SNACKBAR] disable',
}

export class EnableSnackBarAction implements Action {
    readonly type: string = snackbarActionsType.enableSnackBar;
}

export class DisableSnackBar implements Action {
    readonly type = snackbarActionsType.disableSnackBar;
}

export type SnackbarActions = EnableSnackBarAction | DisableSnackBar;

import { Action } from '@ngrx/store';

export enum mainActionsType {
    setAuthState = '[MAIN] set authentication state',
    setAuthError = '[MAIN] set authentication error',
}

interface Payload {
    authenticated?: boolean;
    authenticationError?: boolean;
    username?: string;
}

export class SetAuthStateAction implements Action {
    readonly type: string = mainActionsType.setAuthState;

    constructor(public payload?: Payload) {}
}

export class SetAuthErrorAction implements Action {
    readonly type: string = mainActionsType.setAuthError;

    constructor(public payload?: Payload) {}
}

export type MainActions = SetAuthStateAction | SetAuthErrorAction;

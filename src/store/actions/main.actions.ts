import { Action } from '@ngrx/store';

export enum mainActionsType {
    setAuthState = '[MAIN] set authentication state',
}

interface Payload {
    authenticated?: boolean;
}

export class SetAuthStateAction implements Action {
    readonly type: string = mainActionsType.setAuthState;

    constructor(public payload?: Payload) {}
}

export type MainActions = SetAuthStateAction;

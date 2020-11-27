import { SnackbarActions, snackbarActionsType } from '../actions/snackbar.actions';

export const snackbar = 'snackbar';

export interface SnackbarState {
    snackbar?: string;
}

const initialState: SnackbarState = {
    snackbar: '',
};

export const snackbarReducer = (state = initialState, action: SnackbarActions): SnackbarState => {
    switch (action.type) {
        case snackbarActionsType.enableSnackBar:
            return {
                ...state,
                snackbar: action.payload?.snackbarText,
            };
        case snackbarActionsType.disableSnackBar:
            return {
                ...state,
                snackbar: '',
            };
        default:
            return state;
    }
};

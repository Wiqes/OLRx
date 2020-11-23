import { SnackbarActions, snackbarActionsType } from '../actions/snackbar.actions';

export const snackbar = 'snackbar';

export interface SnackbarState {
    needSnackbar: boolean;
}

const initialState: SnackbarState = {
    needSnackbar: false,
};

export const snackbarReducer = (state = initialState, action: SnackbarActions): SnackbarState => {
    switch (action.type) {
        case snackbarActionsType.enableSnackBar:
            return {
                ...state,
                needSnackbar: true,
            };
        case snackbarActionsType.disableSnackBar:
            return {
                ...state,
                needSnackbar: false,
            };
        default:
            return state;
    }
};

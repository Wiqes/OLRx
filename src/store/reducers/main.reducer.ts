import { MainActions, mainActionsType } from '../actions/main.actions';

export const main = 'main';

export interface MainState {
    authenticated: boolean;
}

const initialState: MainState = {
    authenticated: false,
};

export const mainReducer = (state = initialState, action: MainActions): MainState => {
    switch (action.type) {
        case mainActionsType.setAuthState:
            return {
                ...state,
                authenticated: action.payload?.authenticated || false,
            };
        default:
            return state;
    }
};

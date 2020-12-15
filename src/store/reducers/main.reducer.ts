import { MainActions, mainActionsType } from '../actions/main.actions';

export const main = 'main';

export interface MainState {
    authenticated: boolean;
    username: string;
}

const initialState: MainState = {
    authenticated: false,
    username: '',
};

export const mainReducer = (state = initialState, action: MainActions): MainState => {
    switch (action.type) {
        case mainActionsType.setAuthState:
            return {
                ...state,
                authenticated: action.payload?.authenticated || false,
                username: action.payload?.username || '',
            };
        default:
            return state;
    }
};

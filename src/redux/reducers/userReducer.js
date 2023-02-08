import { LOGIN, LOGOUT } from "../types";

export const userInitialState = {
    isLoged: true,
    info: {},
};

export default function userReducer(state = userInitialState, action)
{
    switch (action.type) {
        case LOGIN:
            state = {
                ...state,
                isLoged: true
            };
            break;
        default:
            return state;
    }

    return state;
};
import { SELECT_ROL } from "../types";

export const rolInitialState = {
    rolSelected: null,
    info: {},
};

export default function rolReducer(state = rolInitialState, action)
{
    switch (action.type) {
        case SELECT_ROL:
            state = {
                ...state,
                rolSelected: action.payload
            };
            break;
        default:
            return state;
    }

    return state;
};
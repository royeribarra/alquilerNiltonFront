import { 
    SELECT_PROFESION,
    FILL_PROFESIONES
} from "../types";

export const profesionInitialState = {
    profesionSelected: null,
    profesiones: [
        {id: 1, nombre: "ninguno"}
    ],
};

export default function profesionReducer(state = profesionInitialState, action)
{
    switch (action.type) {
        case FILL_PROFESIONES:
            return {
                ...state,
                profesiones: action.payload
            };

        case SELECT_PROFESION:
            state = {
                ...state,
                profesionSelected: action.payload
            };
            break;
        default:
            return state;
    }

    return state;
};
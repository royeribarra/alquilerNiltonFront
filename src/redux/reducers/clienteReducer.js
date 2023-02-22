import { 
    SELECT_CLIENTE,
    FILL_CLIENTES
} from "../types";

export const clienteInitialState = {
    clienteSelected: null,
    clientes: [
        {id: 1, nombre: "ninguno"}
    ],
};

export default function clienteReducer(state = clienteInitialState, action)
{
    switch (action.type) {
        case FILL_CLIENTES:
            return {
                ...state,
                profesiones: action.payload
            };

        case SELECT_CLIENTE:
            state = {
                ...state,
                clienteSelected: action.payload
            };
            break;
        default:
            return state;
    }

    return state;
};
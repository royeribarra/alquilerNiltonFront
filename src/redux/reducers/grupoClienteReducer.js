import { 
    SELECT_GRUPO_CLIENTE,
    FILL_GRUPOS_CLIENTE
} from "../types";

export const grupoClienteInitialState = {
    grupoClienteSelected: null,
    gruposCliente: [
        {id: 1, nombre: "ninguno"}
    ],
};

export default function grupoClienteReducer(state = grupoClienteInitialState, action)
{
    switch (action.type) {
        case FILL_GRUPOS_CLIENTE:
            
            return {
                ...state,
                gruposCliente: action.payload
            };

        case SELECT_GRUPO_CLIENTE:
            state = {
                ...state,
                grupoClienteSelected: action.payload
            };
        default:
            return state;
    }

    return state;
};
import { 
    SELECT_TIPO_DOCUMENTO,
    FILL_TIPOS_DOCUMENTO
} from "../types";

export const tipoDocumentoInitialState = {
    tipoDocumentoSelected: null,
    tiposDocumento: [],
};

export default function tipoDocumentoReducer(state = tipoDocumentoInitialState, action)
{
    switch (action.type) {
        case FILL_TIPOS_DOCUMENTO:
            return {
                ...state,
                tiposDocumento: action.payload
            };
        case SELECT_TIPO_DOCUMENTO:
            state = {
                ...state,
                tipoDocumentoSelected: action.payload
            };
            break;
        default:
            return state;
    }

    return state;
};
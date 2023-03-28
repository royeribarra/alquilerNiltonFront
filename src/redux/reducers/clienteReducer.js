import { 
    SELECT_CLIENTE,
    SELECT_DIRECCION_CLIENTE,
    FILL_CLIENTES
} from "../types";

export const clienteInitialState = {
    clienteSelected: {
        id: null,
        apellidos: '',
        credito: '',
        documentoIdentidad: '',
        email: '',
        grupoClienteId: '',
        nombreEmpresa: '',
        nombres: '',
        profesionId: '',
        telefono: '',
        tipoClienteId: '',
        tipoDocumentoId: '',
        tipo_cliente: {
            descripcion: '',
            nombre: '',
            id: null
        }
    },
    direccionClienteSelected: {
        id: null,
        direccion: ''
    },
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
                clienteSelected: action.payload ? action.payload : {...clienteInitialState}
            };
            break;
        case SELECT_DIRECCION_CLIENTE:
            state = {
                ...state,
                direccionClienteSelected: action.payload
            };
            break;
        default:
            return state;
    }

    return state;
};
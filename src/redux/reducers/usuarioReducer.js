import { 
    SELECT_USER,
    FILL_TABLE_USERS
} from "../types";

export const usuarioInitialState = {
    selectedUser: {
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
    usersTable: [],
    pagination: {
        current_page: 1,
        per_page: 10,
        total: 0,
    }
};

export default function usuarioReducer(state = usuarioInitialState, action)
{
    switch (action.type) {
        case FILL_TABLE_USERS:
            return {
                ...state,
                usersTable: action.payload.data,
                pagination: {
                    current_page: action.payload.current_page,
                    per_page: action.payload.per_page,
                    total: action.payload.total
                }
            };

        case SELECT_USER:
            state = {
                ...state,
                clienteSelected: action.payload ? action.payload : {...usuarioInitialState}
            };
            break;
        default:
            return state;
    }

    return state;
};
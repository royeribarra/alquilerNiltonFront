import { 
    SELECT_CLIENTE,
    FILL_CLIENTES
} from "../types";

export const selectCliente = (cliente) => ({ type: SELECT_CLIENTE, payload: cliente });

export const fillClientes = (clientes) => ({ type: FILL_CLIENTES, payload: clientes });
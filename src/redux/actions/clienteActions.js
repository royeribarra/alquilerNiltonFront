import { 
    SELECT_CLIENTE,
    FILL_CLIENTES,
    SELECT_DIRECCION_CLIENTE
} from "../types";

export const selectCliente = (cliente) => ({ type: SELECT_CLIENTE, payload: cliente });

export const fillClientes = (clientes) => ({ type: FILL_CLIENTES, payload: clientes });

export const selectDireccionCliente = (direccionCliente) => ({ type: SELECT_DIRECCION_CLIENTE, payload: direccionCliente });
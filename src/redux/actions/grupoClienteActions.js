import { 
    SELECT_GRUPO_CLIENTE,
    FILL_GRUPOS_CLIENTE
} from "../types";

export const selectGrupoCliente = (rol) => ({ type: SELECT_GRUPO_CLIENTE, payload: rol });

export const fillGruposCliente = (roles) => ({ type: FILL_GRUPOS_CLIENTE, payload: roles });
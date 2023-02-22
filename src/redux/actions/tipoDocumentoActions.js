import { 
    SELECT_TIPO_DOCUMENTO,
    FILL_TIPOS_DOCUMENTO
} from "../types";

export const selecTipoDocumento = (rol) => ({ type: SELECT_TIPO_DOCUMENTO, payload: rol });

export const fillTiposDocumento = (tiposDocumento) => ({ type: FILL_TIPOS_DOCUMENTO, payload: tiposDocumento });
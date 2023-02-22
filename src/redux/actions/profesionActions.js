import { 
    SELECT_PROFESION,
    FILL_PROFESIONES
} from "../types";

export const selectProfesion = (rol) => ({ type: SELECT_PROFESION, payload: rol });

export const fillProfesiones = (profesiones) => ({ type: FILL_PROFESIONES, payload: profesiones });
import { 
    SELECT_USER,
    FILL_TABLE_USERS
} from "../types";

export const selectUsuario = (user) => ({ type: SELECT_USER, payload: user });

export const fillTableUsers = (users) => ({ type: FILL_TABLE_USERS, payload: users });
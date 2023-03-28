import {createStore, combineReducers, applyMiddleware} from "redux";
import { reducer as toastrReducer } from 'react-redux-toastr';
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
// ***** REFUCERS *****
import loaderReducer from "./reducers/loaderReducer";
import userReducer from "./reducers/userReducer";
import rolReducer from "./reducers/rolReducer";
import grupoClienteReducer from "./reducers/grupoClienteReducer";
import profesionReducer from "./reducers/profesionReducer";
import tipoDocumentoReducer from "./reducers/tipoDocumentoReducer";
import clienteReducer from "./reducers/clienteReducer";
import { productosReducer } from "./reducers/productosReducer";

const reducer = combineReducers({
    cliente: clienteReducer,
    grupoCliente: grupoClienteReducer,
    profesion: profesionReducer,  
    loader: loaderReducer,
    rol: rolReducer,
    tipoDocumento: tipoDocumentoReducer,
    toastr: toastrReducer,
    user: userReducer,
    productos: productosReducer
});

export default createStore(reducer, {},
    applyMiddleware(logger, thunk, promise)
);


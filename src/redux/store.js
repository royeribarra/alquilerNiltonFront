import {createStore, combineReducers, applyMiddleware} from "redux";
import { reducer as toastrReducer } from 'react-redux-toastr';
import logger from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
// ***** REFUCERS *****
import loaderReducer from "./reducers/loaderReducer";
import userReducer from "./reducers/userReducer";
import rolReducer from "./reducers/rolReducer";

const reducer = combineReducers({   
    loader: loaderReducer,
    user: userReducer,
    rol: rolReducer,
    toastr: toastrReducer
});

export default createStore(reducer, {},
    applyMiddleware(logger, thunk, promise)
);


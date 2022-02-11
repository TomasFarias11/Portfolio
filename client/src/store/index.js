import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk"; //maneja todas las acciones que seas asincronicas, 
import reducerTheme from "../reducers/reducerTheme.js";

export const store = createStore(reducerTheme, composeWithDevTools(applyMiddleware((thunk))));
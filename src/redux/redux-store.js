import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./reducer/profile";
import dialogsReducer from "./reducer/dialogs";
import sidebarReducer from "./reducer/sidebar";
import usersReducer from "./reducer/users";
import authenticationReducer from './reducer/authentication';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import appReducer from './reducer/app';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    authentication: authenticationReducer,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.__store = store;

export default store;
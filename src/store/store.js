import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import { todosReducer, modalReducer, searchReducer } from '../reducers';
import { thunk } from 'redux-thunk';

// import { userReducer, productsReducer } from './reducers';

// const reducer = combineReducers({
//   userState: userReducer,
//   productsState: productsReducer,
// });

const reducer = combineReducers({
	todos: todosReducer,
	search: searchReducer,
	modal: modalReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
);

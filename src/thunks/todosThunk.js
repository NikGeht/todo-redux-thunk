import {
	ADD_TODO,
	DELETE_TODO,
	SET_TODOS,
	UPDATE_TODO,
} from '../actions/types';
import {
	fetchTodos as getTodosAPI,
	createTodo as createTodoAPI,
	updateTodo as updateTodoAPI,
	deleteTodo as deleteTodoAPI,
} from '../utils/api';

export const fetchTodos = () => async (dispatch) => {
	const response = await getTodosAPI();
	dispatch({ type: SET_TODOS, payload: response });
};

export const createTodo = (todo) => async (dispatch) => {
	const response = await createTodoAPI(todo);
	dispatch({ type: ADD_TODO, payload: response });
};

export const updateTodo = (id, todo) => async (dispatch) => {
	const response = await updateTodoAPI(id, todo);
	dispatch({ type: UPDATE_TODO, payload: response });
};

export const deleteTodo = (id) => async (dispatch) => {
	await deleteTodoAPI(id);
	dispatch({ type: DELETE_TODO, payload: id });
};

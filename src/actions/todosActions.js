import {
	ADD_TODO,
	DELETE_TODO,
	SET_TODOS,
	TOGGLE_TODO,
	UPDATE_TODO,
} from './types';

export const addTodo = (todo) => ({
	type: ADD_TODO,
	payload: todo,
});

export const setTodos = (todos) => ({
	type: SET_TODOS,
	payload: todos,
});

export const deleteTodo = (id) => ({
	type: DELETE_TODO,
	payload: id,
});

export const updateTodo = (id, todo) => ({
	type: UPDATE_TODO,
	payload: [id, todo],
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: id,
});

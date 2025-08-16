import {
	ADD_TODO,
	DELETE_TODO,
	SET_TODOS,
	UPDATE_TODO,
} from '../actions/types';

const initialState = [];

export const todosReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_TODOS:
			return payload;
		case ADD_TODO:
			return [...state, payload];
		case UPDATE_TODO:
			return state.map((todo) => (todo.id === payload.id ? payload : todo));
		case DELETE_TODO:
			return state.filter((todo) => todo.id !== Number(payload));
		default:
			return state;
	}
};

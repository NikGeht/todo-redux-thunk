import { CLOSE_MODAL, OPEN_MODAL } from '../actions/types';

const initialState = {
	isModalOpen: false,
};

export const modalReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case OPEN_MODAL:
			return { ...state, isModalOpen: payload };
		case CLOSE_MODAL:
			return { ...state, isModalOpen: payload };
		default:
			return state;
	}
};

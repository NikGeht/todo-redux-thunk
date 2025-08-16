import {
	SET_SEARCH_FILTER,
	SET_SEARCH_QUERY,
	SET_SORT,
} from '../actions/types';

const initialState = {
	searchQuery: '',
	searchFilter: '',
	sort: '',
};

export const searchReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_SEARCH_QUERY:
			return { ...state, searchQuery: payload };
		case SET_SEARCH_FILTER:
			return { ...state, searchFilter: payload };
		case SET_SORT:
			return { ...state, sort: payload };
		default:
			return state;
	}
};

import { SET_SEARCH_FILTER, SET_SEARCH_QUERY, SET_SORT } from './types';

export const setSearchQuery = (search) => ({
	type: SET_SEARCH_QUERY,
	payload: search,
});

export const setSearchFilter = (filter) => ({
	type: SET_SEARCH_FILTER,
	payload: filter,
});

export const setSort = (sort) => ({
	type: SET_SORT,
	payload: sort,
});

import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../selectors/todosSelectors';
import { getIsModalOpen } from '../selectors/modalSelectors';
import { getSearchFilter, getSort } from '../selectors/searchSelectors';
import { useEffect, useRef } from 'react';
import {
	createTodo,
	deleteTodo,
	fetchTodos,
	updateTodo,
} from '../thunks/todosThunk';
import {
	setSearchFilter,
	setSearchQuery,
	setSort,
} from '../actions/searchActions';
import { closeModal, openModal } from '../actions/modalActions';

export const useTodo = () => {
	const dispatch = useDispatch();
	const todos = useSelector(getTodos);
	const isModalOpen = useSelector(getIsModalOpen);
	const searchFilter = useSelector(getSearchFilter);
	const sort = useSelector(getSort);
	const timeoutRef = useRef(null);

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	const handleCheckBoxClick = (todoId) => {
		const todo = todos.find((todo) => todo.id === Number(todoId));

		if (!todo) {
			console.error('Задача не найдена');
			return;
		}

		const updatedTodo = {
			title: todo.title,
			completed: !todo.completed,
		};

		dispatch(updateTodo(todoId, updatedTodo));
	};

	const handleDeleteTodo = (todoId) => {
		dispatch(deleteTodo(todoId));
	};

	const requestAddTodo = (newTodo) => {
		dispatch(createTodo(newTodo));
	};

	const searchHandler = (e) => {
		const value = e.target.value;

		dispatch(setSearchQuery(value));

		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		timeoutRef.current = setTimeout(() => {
			dispatch(setSearchFilter(value));
		}, 500);
	};

	const handlerSort = () => {
		let sortOption = '';
		if (sort === '') {
			sortOption = 'asc';
		} else {
			sortOption = '';
		}

		dispatch(setSort(sortOption));
	};

	const filteredTodos = todos
		.filter((todo) =>
			todo.title.toLowerCase().includes(searchFilter.toLowerCase())
		)
		.sort((a, b) => {
			if (sort === 'asc') {
				return a.title.localeCompare(b.title);
			}
			return 0;
		});

	const handlerToggleModal = () => {
		isModalOpen ? dispatch(closeModal()) : dispatch(openModal());
	};

	return {
		handleCheckBoxClick,
		handleDeleteTodo,
		requestAddTodo,
		searchHandler,
		handlerSort,
		handlerToggleModal,
		filteredTodos,
		isModalOpen,
	};
};

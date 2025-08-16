import { useSelector } from 'react-redux';
import { getSearchQuery } from '../../selectors/searchSelectors';

export const TodosHead = ({ searchHandler, headerText }) => {
	const search = useSelector(getSearchQuery);

	return (
		<>
			<h1 className='todos__header'>{headerText}</h1>

			<input
				type='text'
				placeholder='Поиск...'
				className='todos__search'
				value={search}
				onChange={searchHandler}
			></input>
		</>
	);
};

import { useSelector } from 'react-redux';
import './todosFooter.scss';
import { getSort } from '../../selectors/searchSelectors';

export const TodosFooter = ({ handlerToggleModal, handlerSort }) => {
	const sort = useSelector(getSort);
	return (
		<>
			<div className='footer'>
				<div className='footer__buttons'>
					<button className='add' onClick={handlerToggleModal}>
						Добавить задачу
					</button>
					<button className='add' onClick={handlerSort}>
						{sort === 'asc' ? 'Сортировка включена' : 'Сортировка выключена'}
					</button>
				</div>
			</div>
		</>
	);
};

import './App.scss';
import { TodosList } from './components/TodosList/TodosList';
import { TodosHead } from './components/TodosHead/TodosHead';
import { TodosFooter } from './components/TodosFooter/TodosFooter';
import { ModalWindow } from './components/ModalWindow/ModalWindow';
import { useTodo } from './hooks/useTodo';

function App() {
	const {
		isModalOpen,
		handlerToggleModal,
		handleCheckBoxClick,
		requestAddTodo,
		searchHandler,
		filteredTodos,
		handleDeleteTodo,
		handlerSort,
	} = useTodo();

	return (
		<>
			{isModalOpen && (
				<ModalWindow
					handlerToggleModal={handlerToggleModal}
					requestAddTodo={requestAddTodo}
				/>
			)}
			<div className='todo-container'>
				<div className='todos'>
					<TodosHead searchHandler={searchHandler} headerText='Задачи' />
					<TodosList
						filteredTodos={filteredTodos}
						handleCheckBoxClick={handleCheckBoxClick}
						handleDeleteTodo={handleDeleteTodo}
					/>
					<TodosFooter
						handlerToggleModal={handlerToggleModal}
						handlerSort={handlerSort}
					/>
				</div>
			</div>
		</>
	);
}

export default App;

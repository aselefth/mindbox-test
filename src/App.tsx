import { ChangeEvent, FormEvent, useState, useEffect } from 'react';
import { TodoForm } from './components/TodoForm';
import { ITodo } from './types/todo';
import { v4 as uuid } from 'uuid';
import { TodoList } from './components/TodoList';
import { BottomPanel } from './components/BottomPanel';
import { Stack } from './components/Stack';

function App() {
	const [todos, setTodos] = useState<ITodo[]>(setInitialState());
	const [input, setInput] = useState('');
	const [category, setCategory] = useState<'all' | 'active' | 'completed'>(
		'all'
	);

	useEffect(() => {
		if (todos.length === 0 && localStorage.getItem('todos')) {
			localStorage.removeItem('todos');
			return;
		}

		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	function setInitialState() {
		const str = localStorage.getItem('todos');
		if (!str) {
			return [];
		}
		return JSON.parse(str);
	}

	function addTodo(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (input.trim() === '') {
			return;
		}
		setTodos((prev) => [
			...prev,
			{
				id: uuid(),
				isCompleted: false,
				title: input
			}
		]);

		setInput('');
	}

	function changeCategory(newCategory: 'all' | 'active' | 'completed') {
		setCategory(newCategory);
	}

	function handleSetInput(e: ChangeEvent<HTMLInputElement>) {
		setInput(e.target.value);
	}

	function toggleTodo(id: string) {
		const newTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return todo;
		});
		setTodos(newTodos);
	}

	function removeTodo(id: string) {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	}

	function getTodosByCategory() {
		switch (category) {
			case 'all':
				return todos;
			case 'active':
				return todos.filter((todo) => todo.isCompleted === false);
			case 'completed':
				return todos.filter((todo) => todo.isCompleted === true);
			default:
				return todos;
		}
	}

	function clearCompletedTodos() {
		setTodos((prev) => prev.filter((todo) => todo.isCompleted === false));
		setCategory('all');
	}

	return (
		<>
			<h1 className='text-4xl font-light mb-4'>Дела</h1>
			<div className='relative min-h-full flex flex-col items-center justify-center min-w-[330px] w-full max-w-[650px] shadow-lg'>
				<TodoForm
					handleSetInput={handleSetInput}
					addTodo={addTodo}
					input={input}
				/>
				<TodoList
					todos={getTodosByCategory()}
					removeTodo={removeTodo}
					toggleTodo={toggleTodo}
				/>
				<BottomPanel
					changeCategory={changeCategory}
					category={category}
					itemsCount={todos.length}
					clearCompletedTodos={clearCompletedTodos}
				/>
			</div>
			<Stack />
		</>
	);
}

export default App;

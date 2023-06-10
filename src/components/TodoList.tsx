import { ITodo } from '../types/todo';
import { Todo } from './Todo/Todo';

interface TodoListProps {
	removeTodo: (id: string) => void;
	toggleTodo: (id: string) => void;
	todos: ITodo[];
}

export function TodoList({ todos, toggleTodo, removeTodo }: TodoListProps) {
	return (
		<ul className='w-full min-h-[100px] bg-zinc-700 shadow-inner flex flex-col gap-0 [&>*:nth-child(2n+1)]:bg-zinc-600' role='todosinfo'>
			{todos.map((todo) => (
				<Todo
					key={todo.id}
					todo={todo}
					toggleTodo={toggleTodo}
				/>
			))}
		</ul>
	);
}

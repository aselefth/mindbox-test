import { ITodo } from '../../types/todo';

interface TodoProps {
	todo: ITodo;
	toggleTodo: (id: string) => void;
}

export function Todo({ todo, toggleTodo }: TodoProps) {
	return (
		<li className='w-full h-full flex items-center justify-between text-xl 
		border-t-1 border-zinc-800 last:border-b-[0px] hover:opacity-80 cursor-pointer'>
				<label htmlFor={todo.id} className='label cursor-pointer gap-3 w-full flex justify-start'>
					<input
					role='toggleTodo'
						id={todo.id}
						type='checkbox'
						onChange={() => toggleTodo(todo.id)}
						checked={todo.isCompleted}
						className='checkbox checkbox-secondary rounded-[50%]'
					/>
					<span
					role='todotext'
						className={`label-text text-white text-lg ${
							todo.isCompleted && 'line-through text-gray-300'
						}`}
					>
						{todo.title}
					</span>
				</label>
		</li>
	);
}

import { ChangeEvent, FormEvent } from 'react';

interface TodoFormProps {
	handleSetInput: (e: ChangeEvent<HTMLInputElement>) => void;
	addTodo: (e: FormEvent<HTMLFormElement>) => void;
	input: string;
}

export function TodoForm(props: TodoFormProps) {
	return (
		<form onSubmit={props.addTodo} className='flex justify-between w-full'>
			<input
				className='placeholder:text-gray-400 placeholder:italic p-4 outline-none 
			focus:shadow-lg hover:shadow-lg transition w-full bg-zinc-700'
				type='text'
				role='todosinput'
				placeholder='Ваши дела будут тут'
				value={props.input}
				onChange={props.handleSetInput}
			/>
			<button
				type='submit'
				className='bg-zinc-700 rounded-none p-4 hover:shadow-lg hover:bg-zinc-600
				 active:bg-zinc-600 transition hover:border-none w-1/4'
			>
				Add
			</button>
		</form>
	);
}

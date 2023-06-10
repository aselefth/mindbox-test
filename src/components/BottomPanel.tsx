interface BottomPanelProps {
	changeCategory: (newCategory: 'all' | 'active' | 'completed') => void;
	category: 'all' | 'active' | 'completed';
	itemsCount: number;
	clearCompletedTodos: () => void;
}

export function BottomPanel({
	changeCategory,
	category,
	itemsCount,
	clearCompletedTodos
}: BottomPanelProps) {
	const categories = ['all', 'active', 'completed'] as const;
	return (
		<div className='flex justify-between w-full bg-zinc-700 text-sm items-center px-4 py-2 shadow-inner'>
			<div>
				<span>{itemsCount}</span> items left
			</div>
			<ul className='flex gap-2 h-full'>
				{categories.map((item) => (
					<li
						key={item}
						className={`cursor-pointer px-2 ${
							category === item && 'rounded bg-secondary'
						}`}
						onClick={() => changeCategory(item)}
					>
						All
					</li>
				))}
			</ul>
			<button onClick={clearCompletedTodos}>Clear completed</button>
		</div>
	);
}

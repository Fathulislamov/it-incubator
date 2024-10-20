import React from 'react'
import upIcon from '../up.png'
import downIcon from '../down.png'
import noneIcon from '../down.png'


// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'
// const noneIcon = downIcon

export type SuperSortPropsType = {
	id?: string
	sort: string
	value: string
	onChange: (newSort: string) => void
}

// export const pureChange = (sort: string, down: string, up: string) => {
// 	// пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
// 	// return up // исправить
// 	// const previousSort = sort.split('')
// 	// console.log(previousSort)
// 	// switch (Number(previousSort[0])) {
// 	// 	case 0: return ''
// 	// 	case 1: return up
// 	// 	default: return down
// 	// }
// 	// return sort === '' ? down : sort === down ? up : ''
// 	if (sort === '') {
// 		return down; // Если текущее значение пустое, возвращаем новое значение
// 	} else if (sort === down) {
// 		return up; // Если текущее значение равно новому, возвращаем значение по умолчанию
// 	} else {
// 		return ''; // В любом другом случае возвращаем пустую строку
// 	}
// }
// export const pureChange = (sort: string, down: string, up: string) => {
// 	if (sort === '') {
// 		return down; // Если текущее значение пустое, возвращаем значение "down"
// 	} else if (sort === down) {
// 		return up; // Если текущее значение равно "down", возвращаем значение "up"
// 	} else {
// 		return ''; // В любом другом случае возвращаем пустую строку
// 	}
// };
export const pureChange = (sort: string, down: string, up: string) => {
	if (sort === '') {
		return down; // Если текущее значение пустое, возвращаем значение "down"
	} else if (sort === down) {
		return up; // Если текущее значение равно "down", возвращаем значение "up"
	} else if (sort === up) {
		return ''; // Если текущее значение равно "up", возвращаем пустую строку
	} else {
		return down; // В любом другом случае возвращаем значение "down"
	}
};

const SuperSort: React.FC<SuperSortPropsType> = (
	{
		sort, value, onChange, id = 'hw15',
	}
) => {
	const up = '0' + value
	const down = '1' + value

	const onChangeCallback = () => {
		// console.log('up', up, 'down', down, 'sort', sort) console.log('pure', pureChange(sort, down, up))
		onChange(pureChange(sort, down, up))

	}

	const icon = sort === down
		? downIcon
		: sort === up
			? upIcon
			: noneIcon
	// console.log(sort)

	return (
		<span
			id={id + '-sort-' + value}
			onClick={onChangeCallback}
		>
			{/*сделать иконку*/}
			{/*<img*/}
			{/*    id={id + '-icon-' + sort}*/}
			{/*    src={icon}*/}
			{/*/>*/}
			<img id={id + '-icon-' + sort} src={icon} />

			{/* {icon} {/*а это убрать*/}
		</span>
	)
}

export default SuperSort

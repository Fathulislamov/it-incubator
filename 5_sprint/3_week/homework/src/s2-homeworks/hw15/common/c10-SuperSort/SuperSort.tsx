import React from 'react'
import upIcon from '../up.png'
import downIcon from '../down.png'


// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
	id?: string
	sort: string
	value: string
	onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
	// пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
	// return up // исправить
	const previousSort = sort.split('')
	switch (Number(previousSort[0])) {
		case 0: return ''
		case 1: return up
		default: return down
	}
}

const SuperSort: React.FC<SuperSortPropsType> = (
	{
		sort, value, onChange, id = 'hw15',
	}
) => {
	const up = '0' + value
	const down = '1' + value

	const onChangeCallback = () => {
		onChange(pureChange(sort, down, up))

	}

	const icon = sort === down
		? downIcon
		: sort === up
			? upIcon
			: noneIcon
	console.log(sort)

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

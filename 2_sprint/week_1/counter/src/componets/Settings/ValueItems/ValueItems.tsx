import { ChangeEvent } from "react"

export type ValueItemsPropsType = {
	id: string
	title: string
	value: number
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ValueItems = ( {id,title, value, onChange}: ValueItemsPropsType) => {
	return (
		<div>
        <label htmlFor={id}>{title}</label>
        <input type="number" id={id} value={value} onChange={onChange}/>
		</div>
	)
}

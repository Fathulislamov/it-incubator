import sprite from '../assets/sprite.svg'


export type propsIconType = {
  iconId: string
  fill?: string
	width?: string
}

export const Icon = (props: propsIconType) => {
  return (
    <svg fill={props.fill || 'none'} width = {props.width} viewBox="0 0 52 52">
      <use xlinkHref={`${sprite}#${props.iconId}`} />
    </svg>
  )
}


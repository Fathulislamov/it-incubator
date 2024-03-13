import sprite from '../assets/sprite_new.svg'


export type IconPropsType = {
  iconId: string
  fill?: string
  width?: string
	height?: string
}
// <use xlinkHref={`${sprite}#${props.iconId}`} />
export const Icon = (props: IconPropsType) => {
  return (
    <svg fill={props.fill || 'none'} width={props.width || '100%'} height={props.height || props.width || '100%'} >
      <use  xlinkHref={`${sprite}#${props.iconId}`} />
    </svg>
  )
}


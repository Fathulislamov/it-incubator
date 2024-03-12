import styled from 'styled-components'
import sprite from '../assets/sprite.svg'


export type IconPropsType = {
  iconId: string
  fill?: string
	width?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <Svg fill={props.fill || 'none'} viewBox="0 0 100 100">
      <use width="300" height="300" xlinkHref={`${sprite}#${props.iconId}`} />
    </Svg>
  )
}

const Svg = styled.svg`

`

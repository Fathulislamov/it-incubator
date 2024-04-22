
type RatingPropsType = {
  value: 0 | 1 | 2 | 3 | 4 | 5
}
export const Rating = (props: RatingPropsType) => {
  console.log("Rating rendering")
  if (props.value === 1) {
  }
  return (
    <div>
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />
      <Star selected={false} />

    </div>
  )
}

type StarPropsType = {
selected: boolean
}
const Star = (props: StarPropsType) => {
  console.log("Star rendering")
  if (props.selected === true) {
    return <span><b>star</b></span>
  } else {
    return <span>star</span>
  }

}

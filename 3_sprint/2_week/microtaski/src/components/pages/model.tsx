import { useParams } from "react-router-dom";
import { adidasArr, AdidasItem } from "./Adidas";
import { pumaArr, PumaItem } from "./Puma";

type brandType = {
  [key: string]: (AdidasItem[] | PumaItem[])
}
const brand = {
  adidas: adidasArr,
  puma: pumaArr
}
export const Model = () => {
  const { model, id } = useParams<{ model: string; id: string }>()


  const currentModel = model ? brand[model].find(el => el.id === Number(id)) : null
  return (
    currentModel
      ? <>
        <h2>{currentModel.model}</h2>
        <h4>{currentModel.collection}</h4>
        <h3>{currentModel.price}</h3>
        <img src={currentModel.picture} alt={currentModel.model} />
      </>
      : <h2>Модель отсутствует</h2>

  )
}

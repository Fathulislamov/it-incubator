import TextField from "@mui/material/TextField"
import { ChangeEvent, useState } from "react"

export type EditableSpanPropsType = {
  oldTitle: string
  updateItem: (newTitle: string) => void
}


export const EditableSpan = ({ oldTitle, updateItem }: EditableSpanPropsType) => {


  const [editMode, setEditMode] = useState(false)
  const [newTitle, setNewTitle] = useState(oldTitle)

  const activateEditModeHandler = () => {
    setEditMode(!editMode)
    if (editMode) {
      updateItem(newTitle)
    }
  }

  const changeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.currentTarget.value)
  }

  return (
    /* ? <input value={newTitle} onChange={changeTitleHandler} onBlur={activateEditModeHandler} autoFocus /> */
    editMode
      ? < TextField
        id = "outlined-basic"
        value={newTitle}
        onChange={changeTitleHandler}
        onBlur={activateEditModeHandler}
        autoFocus
        label="Enter a title"
        variant="outlined"
        // size={'small'}
      // error={!!error}
      // helperText={error}
      // value={title}
      // onChange={changeItemTitleHandler}
      // onKeyUp={addItemOnKeyUpHandler}
      ></TextField >
      : <span onDoubleClick={activateEditModeHandler}>{oldTitle}</span>
  )
}

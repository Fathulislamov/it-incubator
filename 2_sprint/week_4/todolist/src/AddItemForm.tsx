import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import TextField from "@mui/material/TextField"
import { ChangeEvent, KeyboardEvent, useState } from "react"
import { filterButtonsContainerSx } from "./Todolist.styles"

export type addItemFormPropsType = {
  addItem: (title: string) => void
}

export const AddItemForm = ({ addItem }: addItemFormPropsType) => {

  const [title, setTitle] = useState('')
  const [error, setError] = useState<string | null>(null)

  const addItemHandler = () => {
    if (title.trim() !== '') {
      addItem(title.trim())
      setTitle('')
    } else {
      setError('Title is required')
    }
  }

  const changeItemTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }

  const addItemOnKeyUpHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    setError(null)
    if (event.key === 'Enter') {
      addItemHandler()
    }
  }
  const buttonStyles = {
    maxWidth: '30px',
    maxHeight: '30px',
    minWidth: '30px',
    minHeight: '30px',
    background: 'red',
  }

  return (
    <Box sx={filterButtonsContainerSx}>
      {/* <input
        className={error ? 'error' : ''}
        value={title}
        onChange={changeItemTitleHandler}
        onKeyUp={addItemOnKeyUpHandler}
      />
			*/}
      <TextField
        id="outlined-basic"
        label="Enter a title"
        variant="outlined"
        size={'small'}
        error={!!error}
        helperText={error}
        value={title}
        onChange={changeItemTitleHandler}
        onKeyUp={addItemOnKeyUpHandler}
      ></TextField>
      {/*<Button title={'+'} onClick={addItemHandler} />*/}
      <IconButton onClick={addItemHandler} color={'primary'}>+</IconButton>
    </Box>
  )
}

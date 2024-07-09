import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { action } from '@storybook/addon-actions';
import { AddItemForm, AddItemFormPropsType } from '../AddItemForm';
import React, { ChangeEvent, useState, KeyboardEvent } from 'react';
import TextField from '@mui/material/TextField/TextField';
import { IconButton } from '@mui/material';
import { AddBox } from '@mui/icons-material';
import { Task } from '../Task';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Task> = {
  title: 'TODOLISTS/Task',
  component: Task,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  args: {
    changeTaskStatus: fn(),
    changeTaskTitle: fn(),
    removeTask: fn(),
    todolistId: 'kjfkdjsljf'
  }
};

export default meta;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TaskIsNotDone: Story = {
  args: {

    task: {
      id: 'kjlkfjdslkajflkdsj',
      title: 'JS',
      isDone: false
    },
  },
};

export const TaskIsDoneStory: Story = {
  args: {
    task: {
      id: "kjlkfjdjlkjlslkajflkdsj",
      title: "HTML",
      isDone: true,
    },
  }
};

const TaskToggle = () => {
  const [task, setTask] = useState({
    id: 'kjlkfjdslkajflkdsj',
    title: 'JS',
    isDone: false
  })
  function changeTaskStatus() {
    setTask({ ...task, isDone: !task.isDone })
  }
  function changeTaskTitle(taskId: string, newTitle: string) {
    setTask({ ...task, title: newTitle })
  }
  return <Task
    changeTaskStatus={changeTaskStatus}
    changeTaskTitle={changeTaskTitle}
    removeTask={action('Task delete')}
    task={task}
    todolistId={'kjljjlkja'}
  />
}
export const TaskToggleStory: Story = {

  render: () => <TaskToggle />
}

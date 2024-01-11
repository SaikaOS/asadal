import React, { useState } from 'react'
import { useAppDispatch } from '../../redux/store'
import { addTodo } from '../../redux/slice'
import TotalCompletedItems from '../TotalCompletedItems/TotalCompletedItems'
import TodoInputs from './TodoInputs/TodoInputs'

const TodoForm = () => {
  const [title, setTitle] = useState('')
  const dispatch = useAppDispatch()

  const handleSubmit = (event:React.SyntheticEvent) => {
    event.preventDefault()
    if(title.length != 0 && title.length <= 30) {
      dispatch(addTodo({
        title: title,
        status: false,
        id: Date.now()
      }))
    } else {
      alert("Write your title max 30 symbols")
    }
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Todo App</h1>
      <TotalCompletedItems />
      <TodoInputs title={title} setTitle={setTitle} />
    </form>
  )
}

export default TodoForm
import TodoItem from "../components/TodoItem/TodoItem"
import { completedTodosList } from "../redux/slice"
import { useAppSelector } from "../redux/store"

const CompletedPage = () => {
    const state = useAppSelector(state => state.slice.todos)
    const todos = completedTodosList(state)
    
  return (
    <div>
    {
      todos.length !== 0 ? todos.map((item, index) => (
        <TodoItem key={item.id} id={item.id} 
        title={item.title} status={item.status} index={index}
        />
      )) : (<p>Add todos to completed</p>)
      }
  </div>
  )
}

export default CompletedPage
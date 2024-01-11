import { useAppSelector } from '../../redux/store'
import TodoItem from '../TodoItem/TodoItem'
import styles from './TodoList.module.scss'

const TodoList = () => {
  const todos = useAppSelector((state) => state.slice.todos)
  return (
    <div className={styles.app}>
      {
        todos.length !== 0 ?
        todos.map((item, index) => (
          <TodoItem key={index} id={item.id} 
          title={item.title} status={item.status} index={index}
          />
        ))
        :
        (<p>There's no todos</p>)
      }

    </div>
  )
}

export default TodoList
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../redux/store'

export type MyParams = {
  id: string;
};

const TodoDetails = () => {
    const {id} = useParams<keyof MyParams>() as MyParams;
    const itemId = parseInt(id)
    const todos = useAppSelector((state) => state.slice.todos)

  return (
    <div>
      <p>
        {todos[itemId].title}
      </p>
    </div>
  )
}

export default TodoDetails
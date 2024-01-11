import { totalCompleteTodos } from "../../redux/slice"
import { useAppSelector } from "../../redux/store"

const TotalCompletedItems = () => {
  const state = useAppSelector(state => state.slice.todos)
  const total = totalCompleteTodos(state)
  
  return (
    <div>
        <h3>Total complete items: {total}</h3>
    </div>
  )
}

export default TotalCompletedItems
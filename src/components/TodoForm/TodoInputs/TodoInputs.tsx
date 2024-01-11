import { Link } from 'react-router-dom'
import styles from './TodoInputs.module.scss'

interface IProps {
    title: string,
    setTitle: (title: string) => void
}

const TodoInputs = ({title, setTitle}: IProps) => {
  return (
    <div className={styles.app}>
    <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
    <button type='submit'>Add</button>
    <Link to='/completed'>
    <button>Completed Items</button>
    </Link>
    </div>
  )
}

export default TodoInputs
import {Todo, deleteTodos, setTitle, toggleStatus} from '../../redux/slice'
import styles from './TodoItem.module.scss'
import { useAppDispatch } from '../../redux/store'
import moment from 'moment';
import Modal from '../Modal/Modal';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TodoItem = ({id, title, status, index}: Todo) => {
  const [isModalOpen, setModalOpen] = useState(false)
  const dispatch = useAppDispatch()
  const formattedDate = moment().format('LT')

  const deleteTodo = (id: number | string | undefined) => {
    dispatch(deleteTodos(id))
  }

  const handleTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setTitle({id: id, title: e.target.value}))
  }

  const closeModal = () => {
    if(title === '') {
      alert("Write your title")
    } else {
    setModalOpen(false)
    }
  }

  const handleClick = () => {
    switch (status) {
      case true:
        dispatch(toggleStatus({id: id, status: false}));
        break;
      case false:
        dispatch(toggleStatus({id: id, status: true}));
        break;
    }
  }

  return (
    <div className={styles.app}>
          <p>Date: {formattedDate}</p>
          <Link to={index?.toString()}>
          <p>{title}</p>
          </Link>
          <div>
          <div className={styles.btns}>
          <input type="checkbox" checked={status === true} onChange={handleClick}/>
          <button onClick={() => setModalOpen(true)}>Edit</button>
          <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
      </div>
          {isModalOpen && (
          <Modal onClose={closeModal}>
          <input type="text" value={title} 
          onChange={handleTitle}/>
          </Modal>
)}
        </div>

  )
}

export default TodoItem
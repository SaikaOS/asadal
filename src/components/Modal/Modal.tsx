import styles from './Modal.module.scss'

type ModalTypes = {
    children: string | JSX.Element | JSX.Element[],
    onClose: () => void
}

const Modal = ({ children, onClose }: ModalTypes) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
        <button className={styles.closeButton} onClick={onClose}>X</button>
      </div>
    </div>
  )
}

export default Modal
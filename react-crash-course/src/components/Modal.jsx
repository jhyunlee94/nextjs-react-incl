/* eslint-disable react/prop-types */
import style from './Modal.module.css';
export default function Modal({ children, onClose }) {
  return (
    <>
      <div className={style.backdrop} onClick={onClose}></div>
      <dialog open className={style.modal}>
        {children}
      </dialog>
    </>
  );
}

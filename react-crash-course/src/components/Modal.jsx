/* eslint-disable react/prop-types */
import style from './Modal.module.css';
import { useNavigate } from 'react-router-dom';
export default function Modal({ children }) {
  const navigate = useNavigate();
  const closeHandler = () => {
    // navigate('/');
    navigate('..');
  };

  return (
    <>
      <div className={style.backdrop} onClick={closeHandler} />
      <dialog open className={style.modal}>
        {children}
      </dialog>
    </>
  );
}

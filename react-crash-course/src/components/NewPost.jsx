import { useState } from 'react';
import style from './NewPost.module.css';

export default function NewPost(props) {
  const { onCancel, onAddPost } = props;

  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    // console.log(postData);
    onAddPost(postData);
    onCancel();
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor='body'>Text</label>
        <textarea id='body' required rows={3} onChange={bodyChangeHandler} />
      </p>

      <p>
        <label htmlFor='name'>Your name</label>
        <textarea
          type='text'
          id='name'
          required
          onChange={authorChangeHandler}
        />
      </p>
      <p className={style.actions}>
        <button type='button' onClick={onCancel}>
          Cancle
        </button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  );
}

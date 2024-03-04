import style from './NewPost.module.css';
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';
export default function NewPost() {
  return (
    <Modal>
      <Form method='post' className={style.form}>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' name='body' required rows={3} />
        </p>

        <p>
          <label htmlFor='name'>Your name</label>
          <textarea type='text' id='name' name='author' required />
        </p>
        <p className={style.actions}>
          <Link to='/' type='button'>
            Cancle
          </Link>
          <button type='submit'>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData(); // Promise 만 반환해서 await 필수
  const postData = Object.fromEntries(formData); // {body: '...', author: '...'}
  console.log('postData', postData);
  await fetch('http://localhost:8080/posts', {
    // const response = 해서 응답별 처리도 가능
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
  // 호출하면 응답 객체만들어지고 action() 함수가
  // 그 객체를 반환 리액트 라우터는 반환된 객체를 읽어서
  // redirect() 일 경우 해당 라우트로 리다이렉트해줌
}

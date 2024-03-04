import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import style from './PostsList.module.css';
import NewPost from '../routes/NewPost';
import Modal from '../components/Modal';
import Post from '../components/Post';

export default function PostsList() {
  const posts = useLoaderData();

  // const addPostHandler = (postData) => {
  //   // setPosts([postData, ...posts]);

  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // };

  // useEffect(() => {
  //   // useEffect 안에서는 바로 async 를 사용할수 없어서
  //   // 아래와 같이 함수를 새로 만들어서 해줘야함
  //   const fetchPosts = async () => {
  //     setIsFetching(true);
  //     const response = await fetch('http://localhost:8080/posts');
  //     const resData = await response.json();
  //     // 에러 상태
  //     // if (!response.ok) {
  //     // console.log("error 임")
  //     // }
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <>
      {/* {modalIsVisible ? (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null} */}

      {/* {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )} */}
      {posts.length > 0 && (
        <ul className={style.posts}>
          {posts.map((post, i) => (
            <Post key={`posts` + i} author={post.author} body={post.body} />
          ))}
          {/* <Post author='Manual' body='Check out the full course!' /> */}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding post</p>
        </div>
      )}
    </>
  );
}

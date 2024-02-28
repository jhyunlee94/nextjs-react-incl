import { useState } from 'react';
import NewPost from './NewPost';
import Post from './Post';
import style from './PostsList.module.css';
import Modal from './Modal';
export default function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    // setPosts([postData, ...posts]);
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

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

      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      <ul className={style.posts}>
        {posts.map((post, i) => (
          <Post key={`posts` + i} author={post.author} body={post.body} />
        ))}
        {/* <Post author='Manual' body='Check out the full course!' /> */}
      </ul>
    </>
  );
}

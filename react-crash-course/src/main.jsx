import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import RootLayout from './routes/RootLayout.jsx';
import Posts, { loader as postsLoader } from './routes/Posts.jsx';
import NewPost, { action as newPostAction } from './routes/NewPost.jsx';
import PostDetails, {
  loader as postDetailsLoader,
} from './routes/PostDetails.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        // loader: () => {},
        loader: postsLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          {
            path: '/:postId',
            element: <PostDetails />,
            loader: postDetailsLoader,
          }, // 동적 라우트 사용법
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

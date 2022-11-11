import React from 'react';
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from '../../../redux/profileReducer';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts({ posts, dispatch, newPostText, updateNewPostText, addPost }) {
  let postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    addPost();
  };

  let onPostChange = (e) => {
    let text = newPostElement.current.value;
    updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            ref={newPostElement}
            value={newPostText}
            onChange={(e) => onPostChange(e)}
          />
        </div>
        <div>
          <button onClick={() => onAddPost()}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;

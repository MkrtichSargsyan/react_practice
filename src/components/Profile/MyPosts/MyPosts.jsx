import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts({posts,addPost}) {
  let postsElements = posts.map((post) => (
    <Post key={post.id} message={post.message} likesCount={post.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    console.log(addPost);
    addPost(text)
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} value='it camasutra'/>
        </div>
        <div>
          <button onClick={()=>addNewPost()}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;

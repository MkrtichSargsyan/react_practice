import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message={'HI how are you'} likesCount="0" />
        <Post message="td my firsr posr" likesCount="0" />
      </div>
    </div>
  );
}

export default MyPosts;

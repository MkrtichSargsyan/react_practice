import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile({ posts, dispatch, newPostText }) {
  return (
    <main>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        dispatch={dispatch}
        newPostText={newPostText}
      />
    </main>
  );
}

export default Profile;

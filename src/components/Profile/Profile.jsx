import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile({ store }) {
  return (
    <main>
      <ProfileInfo />
      <MyPostsContainer />
    </main>
  );
}

export default Profile;

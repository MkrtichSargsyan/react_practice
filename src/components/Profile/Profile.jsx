import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile({posts, addPost}) {
 
  return (
    <main>
      <ProfileInfo />
      <MyPosts posts={posts} addPost={addPost}/>
    </main>
  );
}

export default Profile;

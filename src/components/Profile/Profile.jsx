import React from 'react';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
  return (
    <main>
      <img
        width="100%"
        height={'200px'}
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="im"
      />

      <MyPosts />
    </main>
  );
}

export default Profile;

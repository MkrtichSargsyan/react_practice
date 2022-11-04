import React from 'react';

function Profile() {
  return (
    <main className="content">
      <img
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="im"
      />
      <div>
        <img
          className="avatar"
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          alt="im"
        />
      </div>
      <div>
        my posts
        <div>new post</div>
      </div>
      <div>post 1</div>
      <div>post 2</div>
    </main>
  );
}

export default Profile;

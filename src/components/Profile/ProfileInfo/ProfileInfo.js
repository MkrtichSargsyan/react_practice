import React from 'react';
import s from './ProfileInfo.module.css'


function ProfileInfo() {
  return (
    <div>
      <img
        width="100%"
        height={'200px'}
        src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
        alt="im"
      />
      <div className={s.description_block}>

      </div>
    </div>
  );
}

export default ProfileInfo;

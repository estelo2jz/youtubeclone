import React from 'react';

import HomeRec from '../../CategoryData/HomeData/HomeRec';
import Comments from './Comments';

import './styles/recVideos.scss';

const RecommendVideos = () => {
  return (
    <div className="recommended">
      <div className="recommended__container">
        <HomeRec />
      </div>
      <div className="recommended__contents">
      </div>
    </div>
  )
}

export default RecommendVideos

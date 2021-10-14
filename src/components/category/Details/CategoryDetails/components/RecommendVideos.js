import React from 'react';

import HomeData from '../../CategoryData/HomeData';
import Comments from './Comments';

import './styles/recVideos.scss';

const RecommendVideos = () => {
  return (
    <div className="recommended">
      <div className="recommended__container">
        <HomeData />
      </div>
      <div className="recommended__contents">
      </div>
    </div>
  )
}

export default RecommendVideos

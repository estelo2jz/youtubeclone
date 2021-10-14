import React from 'react';

import HomeData from '../../CategoryData/HomeData';

import './styles/recVideos.scss';

const RecommendVideos = () => {
  return (
    <div className="recommended">
      <div className="recommended__container">
        recommend videos
        <HomeData />
      </div>
      <div className="recommended__contents">

      </div>
    </div>
  )
}

export default RecommendVideos

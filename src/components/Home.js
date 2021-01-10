import React from 'react';
import Recommended from './RecommendedVideos';
import PopularTopic from './PopularTopic';

import './styles/PopularTopic.scss';

function Home() {
  return (
    <div className="home__container">
      <div className="home__heading">
        <div>
          <PopularTopic />
        </div>
      </div>
      <div className="home__box">
        <Recommended />
      </div>
    </div>
  )
}

export default Home

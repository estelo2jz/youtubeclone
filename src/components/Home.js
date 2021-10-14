import React from 'react';
import '../styles/Home.scss';
import Recommended from './RecommendedVideos';
import HomeData from '../components/category/Details/CategoryData/HomeData';
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
        <HomeData />
      </div>
    </div>
  )
}

export default Home

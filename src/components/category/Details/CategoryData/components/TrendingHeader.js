import React from 'react';

import '../styles/trendingHeader.scss';

import TrendingImg from '../../../../../assets/trending/trending.png'
import GamingImg from '../../../../../assets/trending/gaming-pad.png'
import LearningImg from '../../../../../assets/trending/global-learning.png'
import LiveImg from '../../../../../assets/trending/live.png'
import MediaImg from '../../../../../assets/trending/clapperboard.png'
import MusicImg from '../../../../../assets/trending/musical-note.png'
import NewsImg from '../../../../../assets/trending/news-report.png'
import TrophyImg from '../../../../../assets/trending/trophy.png'
import FashionImg from '../../../../../assets/trending/wardrobe.png'

const TrendingHeader = () => {
  return (
    <div className="trending__container">
      <div className="trending__category-container">
        <div className="trending__category">
          <img src={TrendingImg} alt="trending-logo" />
          <p>Trending</p>
        </div>
        <div className="trending__category">
          <img src={MusicImg} alt="trending-logo" />
          <p>Music</p>
        </div>
        <div className="trending__category">
          <img src={MediaImg}  alt="trending-logo" />
          <p>Movies & Shows</p>
        </div>
        <div className="trending__category">
          <img src={LiveImg}  alt="trending-logo" />
          <p>Live</p>
        </div>
        <div className="trending__category">
          <img src={GamingImg}  alt="trending-logo" />
          <p>Gaming</p>
        </div>
        <div className="trending__category">
          <img src={NewsImg}  alt="trending-logo" />
          <p>News</p>
        </div>
        <div className="trending__category">
          <img src={TrophyImg}  alt="trending-logo" />
          <p>Sports</p>
        </div>
        <div className="trending__category">
          <img src={LearningImg}  alt="trending-logo" />
          <p>Learning</p>
        </div>
        <div className="trending__category">
          <img src={FashionImg} alt="trending-logo" />
          <p>Fashion & Beauty</p>
        </div>
        {/* <div className="trending__category">
          <img src={''}  alt="trending-logo" />
          <p>Fashion & Beauty</p>
        </div> */}
      </div>
    </div>
  )
}

export default TrendingHeader

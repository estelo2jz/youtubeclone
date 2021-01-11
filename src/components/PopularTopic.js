import React from 'react';
import {Link} from 'react-router-dom';

import './styles/PopularTopic.scss';

function PopularTopic() {
  return (
    <div className="popular-topic__container">
      <div className="popular-topic__box">
        <div className="popular-topic__item">
          <Link className="popular-topic__link" to="/">
            <label>
              Music
            </label>
          </Link>
        </div>
        <div className="popular-topic__item">
          <Link className="popular-topic__link" to="/">
            <label>
              Recently Uploaded
            </label>
          </Link>
        </div>
        <div className="popular-topic__item">
          <Link className="popular-topic__link" to="/">
            <label>
              Live
            </label>
          </Link>
        </div>
        <div className="popular-topic__item">
          <Link className="popular-topic__link" to="/">
            <label>
              Gaming
            </label>
          </Link>
        </div>
        <div className="popular-topic__item">
          <Link className="popular-topic__link" to="/">
            <label>
              Trailers
            </label>
          </Link>
        </div>
        <div className="popular-topic__item">
          <Link className="popular-topic__link" to="/">
            <label>
              Latest News
            </label>
          </Link>
        </div>
        <div className="popular-topic__item">
          <Link className="popular-topic__link" to="/">
            <label>
              Most Popular
            </label>
          </Link>
        </div>
        <div className="popular-topic__item">
          <Link className="popular-topic__link" to="/">
            <label>
              Most Watched
            </label>
          </Link>
        </div>
        <div className="popular-topic__item">
          <Link className="popular-topic__link" to="/">
            <label>
              Recently Watched
            </label>
          </Link>
        </div>
        <div className="popular-topic__item">
          <Link className="popular-topic__link" to="/">
            <label>
              Explore
            </label>
          </Link>
        </div>
        <div className="popular-topic__item">
          <Link className="popular-topic__link" to="/">
            <label>
              Channels
            </label>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PopularTopic

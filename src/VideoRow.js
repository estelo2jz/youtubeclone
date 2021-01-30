import React from 'react';
import './styles/VideoRow.scss';

function VideoRow({ views, subs, description, timestamp, channel, title, image}) {
  return (
    <div className="videoRow">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel + " "} &middot; {" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">
            {subs + " "} 
            </span>
            Subscribers
          </span> 
          {views + " "} views &middot; {" "} {timestamp}
        </p>
        <p className="videoRow__description">
          {description}
        </p>
      </div>
    </div>
  )
}

export default VideoRow

import React, { useState, useEffect } from 'react';
import '../styles/VideoCard.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from "@material-ui/core/Avatar"


function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  // or this
  // const { image, title, channel, timeStamp, channelImg } = props;

  return (
    <div className="videoCard">
      <div  className="videoCard__thumbnail">
        <img src={image} alt="" />
      </div>
      <div className="videoCard__info">
          {/* {videos.map(({image, title, channel, views, timestamp, channelImage}) => (
            <div></div>

          ))} */}
        <div>
          <Avatar 
            className="videoCard__avatar"
            alt={channel}
            src={channelImage}       
          />
        </div>
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} &middot; {timestamp}
          </p>
        </div>
      </div>
    </div>
  )
}

export default VideoCard;

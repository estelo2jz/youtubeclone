import React from 'react';
import './VideoCard.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Avatar from "@material-ui/core/Avatar"


function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  // or this
  // const { image, title, channel, timeStamp, channelImg } = props;
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar 
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}       
        />
        
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

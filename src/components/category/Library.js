import React, { useState, useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard';
import { LibraryData } from './categodyData/LibraryContext';
import './categoryStyles/Library.scss';
import db from '../../firebase';
import Avatar from "@material-ui/core/Avatar";
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PublishIcon from '@material-ui/icons/Publish';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

function Library() {
  const [videos, setVideos] = useState([]);
  // lifecycle method, componentDidUpdate is every single lifestyles method has been replace by useEffect method.
  useEffect(() => {
    // this is going to the collection from the Firestore that we created in the database,
    // and it take a live snapshot of what the collection look like.
    // and set the videos in our state to the following.
    db.collection('library').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map((doc) => doc.data()))
    ))
    // if you dont include any dependencies in the array[],
    // this code will fire once when the component load and whenever videos changes
  }, [])
  return (
    <div className="library__container">
      <div className="library__history-container">
        <div className="library__heading">
          <span>
            <FaIcons.FaHistory />
          </span>
          <p>History</p>
        </div>
        <div className="library__recent-container">
          <div className="library__recent-subs">
            <div className="library__subs">
              <p>Recent Subscriptions</p>
            </div>
            <div className="library__subs-children">
              <div className="library__subs-child"><span><PlayArrowIcon /></span></div>
              <div className="library__subs-child"><span><PlayArrowIcon /></span></div>
              <div className="library__subs-child"><span><PlayArrowIcon /></span></div>
              <div className="library__subs-child"><span><PlayArrowIcon /></span></div>
              <div className="library__subs-child"><span><PlayArrowIcon /></span></div>
              <div className="library__subs-child"><span><PlayArrowIcon /></span></div>
              <div className="library__subs-child"><span><PlayArrowIcon /></span></div>
              <div className="library__subs-child"><span><PlayArrowIcon /></span></div>
              <div className="library__subs-child"><span><PlayArrowIcon /></span></div>
            </div>
          </div>
          <div className="library__recent-uploads">
            <div className="library__uploads">
              <p>Recent Uploads</p>
            </div>
            <div className="library__uploads-children">
              <div className="library__uploads-child"><span><PublishIcon /></span></div>
              <div className="library__uploads-child"><span><PublishIcon /></span></div>
              <div className="library__uploads-child"><span><PublishIcon /></span></div>
              <div className="library__uploads-child"><span><PublishIcon /></span></div>
              <div className="library__uploads-child"><span><PublishIcon /></span></div>
              <div className="library__uploads-child"><span><PublishIcon /></span></div>
              <div className="library__uploads-child"><span><PublishIcon /></span></div>
              <div className="library__uploads-child"><span><PublishIcon /></span></div>
              <div className="library__uploads-child"><span><PublishIcon /></span></div>
            </div>
          </div>
          <div className="library__recent-likes">
            <div className="library__likes">
              <p>Recent Likes</p>
            </div>
            <div className="library__likes-children">
              <div className="library__likes-child"><span><ThumbsUpDownIcon /></span></div>
              <div className="library__likes-child"><span><ThumbsUpDownIcon /></span></div>
              <div className="library__likes-child"><span><ThumbsUpDownIcon /></span></div>
              <div className="library__likes-child"><span><ThumbsUpDownIcon /></span></div>
              <div className="library__likes-child"><span><ThumbsUpDownIcon /></span></div>
              <div className="library__likes-child"><span><ThumbsUpDownIcon /></span></div>
              <div className="library__likes-child"><span><ThumbsUpDownIcon /></span></div>
              <div className="library__likes-child"><span><ThumbsUpDownIcon /></span></div>
              <div className="library__likes-child"><span><ThumbsUpDownIcon /></span></div>
            </div>
          </div>
        </div>

        {/* <div>
          <div className="subs__videos">
          {LibraryData.map((item, index) => {
            return (
              <div key={index} className="subs-card__container">
                <Link to={item.path} >
                  <div className="subs-card__thumbnail">
                    <img src={item.image}  alt="channel-image" />
                  </div>
                  <div className="subs-card__info">
                    <p>{item.title}</p> 
                  </div>
                  <div className="subs-card__text">
                    <span>
                      <p>{item.channel}</p> 
                      <p className="subs-card__icon">{item.icon}</p>
                    </span>
                    <p>
                      {item.views + item.maxViews  +' ' + "views"} &middot; {item.timestamp + ' ' + item.filter + ' ' + "ago"}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
          </div>
        </div> */}
      </div>
      <div className="library__avatar-info">
        <div className="library__image">
          <img src="https://yt3.ggpht.com/yti/ANoDKi7NAE9_TOC4q-pl7Ub37nT6gHK4_bxPu81jTQ=s160-c-k-c0x00ffffff-no-rj" alt="avatar" />
          <span>Estelo Abellanosa</span>
        </div>
        <div className="library__ul">
          <ul>
            <li>Subscriptions</li>
            <li>336</li>
          </ul>
          <ul>
            <li>Uploads</li>
            <li>7</li>
          </ul>
          <ul>
            <li>Likes</li>
            <li>1,003</li>
          </ul>
        </div>
      </div>
      {/* <div className="library__videos">
        {videos.map(({ id, channel, channelImage, image, timestamp, title, views }) => (
          <VideoCard
            key={id}
            channel={channel}
            channelImage={channelImage}
            image={image}
            timestamp={timestamp + ' ' + "days ago"}
            title={title}
            views={views + "K" + ' ' + "views"}
          />
        ))}
      </div> */}
    </div>
  )
}

export default Library;

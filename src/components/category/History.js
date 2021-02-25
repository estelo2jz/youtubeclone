import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard';
import { HistoryData } from './categodyData/HistoryContext';
import './categoryStyles/History.scss';
import db from '../../firebase';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SettingsIcon from '@material-ui/icons/Settings';

function HistoryCard() {
  return (
    <div>
      <div>
        <p>{}</p>
      </div>
    </div>
  )
}



function History() {
  const [videos, setVideos] = useState([]);
  // lifecycle method, componentDidUpdate is every single lifestyles method has been replace by useEffect method.
  useEffect(() => {
    // this is going to the collection from the Firestore that we created in the database,
    // and it take a live snapshot of what the collection look like.
    // and set the videos in our state to the following.
    db.collection('history').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map((doc) => doc.data()))
    ))
    // if you dont include any dependencies in the array[],
    // this code will fire once when the component load and whenever videos changes
  }, [])
  return (
    <div className="history__container">
      <div className="history__left-outer">
        <div>
            <p>Watch history</p>
            <p>Today</p>
        </div>
        <div className="history__videos-container">
          <div className="history__videos">
            {HistoryData.map((item, index) => {
              return (
                <div key={index} className="history-card__container">
                  <Link to={item.path} >
                    <div className="history-card__thumbnail">
                      <img src={item.image}  alt="channel" />
                    </div>
                    <div className="history-card__info">
                      <p>{item.title}</p> 
                    </div>
                    <div className="history-card__text">
                      <span>
                        <p>{item.channel}</p> 
                        <p className="history-card__icon">{item.icon}</p>
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
        </div>

      </div>
      <div className="history__right-outer">
        <div className="history__right-container">
          <div className="history__search">
            <span>
              <SearchIcon />
            </span>
            <input placeholder="Search watch history" />
          </div>
          <div>
            <div>
              <h3>History type</h3>
            </div>
            <ul>
              <li>
                <span>
                  <p>Watch history</p>
                </span>
                <span>
                  <input type="radio" checked="checked" checked />
                </span>
              </li>
              <li>
                <span>
                  <p>Community</p>
                </span>
                <span>
                  <input type="radio" checked="checked" unchecked />
                </span>
              </li>
            </ul>
          </div>
          <div>
            <span>
              <icon>
                <DeleteIcon />
              </icon>
              <p>Community</p>
            </span>
            <span>
              <icon>
                <PauseCircleOutlineIcon />
              </icon>
              <p>Community</p>
            </span>
            <span>
              <icon>
                <SettingsIcon />
              </icon>
              <p>Community</p>
            </span>
            <span>
              <Link to="#">Watch ans seach history</Link>
            </span>
            <span>
              <Link to="#">Comments</Link>
            </span>
            <span>
              <Link to="#">Live Chat</Link>
            </span>
          </div>
        </div>
      </div>
      {/* <div className="history__videos">
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

export default History;

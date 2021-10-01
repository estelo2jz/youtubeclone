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
      <div className="history__right-outer">
        <div className="history__right-container">
          <div className="history__search">
            <div>
              <SearchIcon />
            </div>
            <div className="history__input">
              <input placeholder="Search watch history" />
            </div>
          </div>
          <div className="history__type-container">
            <div className="history__history-header">
              <p>History type</p>
            </div>
            <div  className="history__input-container">
              <div  className="history__watch-history-container">
                <div>
                  <p>Watch history</p>
                </div>
                <div>
                  <input type="radio" checked="checked" checked />
                </div>
              </div>
              <div  className="history__community-container">
                <div>
                  <p>Community</p>
                </div>
                <div>
                  <input type="radio" checked="" unchecked />
                </div>
              </div>
            </div>
          </div>
          <div  className="history__bottom-container">
            <div  className="history__delete-container">
              <icon>
                <DeleteIcon />
              </icon>
              <p>clear all watch history</p>
            </div>
            <div  className="history__pause-container">
              <icon>
                <PauseCircleOutlineIcon />
              </icon>
              <p>pause all history</p>
            </div>
            <div  className="history__manage-container">
              <icon>
                <SettingsIcon />
              </icon>
              <p>manage all history</p>
            </div>
            <div  className="history__link-one">
              <Link to="#">Watch and search history</Link>
            </div>
            <div  className="history__link-two">
              <Link to="#">Comments</Link>
            </div>
            <div  className="history__link-three">
              <Link to="#">Live Chat</Link>
            </div>
          </div>
        </div>
      </div>

      
      <div className="history__left-outer">
        <div  className="history__left-outer-header">
            <p>Watch history</p>
            <p>Today</p>
        </div>
        <div className="history__videos-container">
          <div className="history__videos">
            {HistoryData.map((item, index) => {
              return (
                <div key={index} className="history-card__container">
                  <Link to={item.path} className="history-card__flex-helper" >
                    <div className="history-card__thumbnail">
                      <img src={item.image}  alt="channel-thumbnail" />
                    </div>
                    <div className="history-card__desc">
                      <div className="history-card__info">
                        <p>{item.title}</p> 
                      </div>
                      <div className="history-card__text">
                        <span>
                          <p>{item.channel}</p> 
                          <p className="history-card__icon">{item.icon}</p>
                        </span>
                        <p>
                          {item.views + item.maxViews  +' ' + "views"}
                        </p>
                      </div>
                      <div className="history-card__main-desc">
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
            {/* <div className="history__videos-data-1">
            </div> */}

            {/* <div className="history__videos-data-2">
              {HistoryData.map((item, index) => {
                return (
                  <div key={index} className="history-card__container">
                    <Link to={item.path} className="history-card__flex-helper" >
                      <div className="history-card__thumbnail">
                        <img src={item.image} alt="channel-thumbnail" />
                      </div>
                      <div className="history-card__desc">
                        <div className="history-card__info">
                          <p>{item.title}</p>
                        </div>
                        <div className="history-card__text">
                          <span>
                            <p>{item.channel}</p>
                            <p className="history-card__icon">{item.icon}</p>
                          </span>
                          <p>
                            {item.views + item.maxViews + ' ' + "views"}
                          </p>
                        </div>
                        <div className="history-card__main-desc">
                          <p>{item.desc}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div> */}
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

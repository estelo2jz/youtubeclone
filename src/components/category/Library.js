/* eslint-disable no-useless-concat */
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
      {/* <div className="library__flex-container">
        
      </div> */}
        <div className="library__profile">
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
        </div>

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
                <div className="library__subs-container">
                  <div className="library__subs-child">
                    <span>
                      <img alt="demoimage" src="https://i.ytimg.com/an_webp/ANVCNCUrno8/mqdefault_6s.webp?du=3000&sqp=CI6M3IoG&rs=AOn4CLCiYz5Dc0pH0y7enPwMzajUHBV6gQ" />
                    </span>
                  </div>
                  <div className="library__subs-heading">
                    <p>
                      Otaku Sensai
                    </p>
                  </div>
                </div>
                <div className="library__subs-container">
                  <div className="library__subs-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/vNaPrlygAI8/mqdefault_6s.webp?du=3000&sqp=CMuv3IoG&rs=AOn4CLDZEOv1Wu7j24BY7dfdXv-fDMyiFQ" />
                    </span>
                  </div>
                  <div className="library__subs-heading">
                    <p>
                      AniStudio
                    </p>
                  </div>
                </div>
                <div className="library__subs-container">
                  <div className="library__subs-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/Fe72k8PFdho/mqdefault_6s.webp?du=3000&sqp=CJzH3IoG&rs=AOn4CLD79A5JEC4Wqviq5nJr2yf7Ic_UUw" />
                    </span>
                  </div>
                  <div className="library__subs-heading">
                    <p>
                      5Elements
                    </p>
                  </div>
                </div>
                <div className="library__subs-container">
                  <div className="library__subs-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6KAYW8BN9j5s-5nSSxs_g3DdfmA" />
                    </span>
                  </div>
                  <div className="library__subs-heading">
                    <p>
                      Lofi Girl
                    </p>
                  </div>
                </div>
                <div className="library__subs-container">
                  <div className="library__subs-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/XhZmm32yNCw/mqdefault_6s.webp?du=3000&sqp=CJyj3IoG&rs=AOn4CLDoaANuzUgfIEje4T_XyTWAPeAlgA" />
                    </span>
                  </div>
                  <div className="library__subs-heading">
                    <p>
                      Animeology
                    </p>
                  </div>
                </div>
                <div className="library__subs-container">
                  <div className="library__subs-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/f-Df8qRIa1I/mqdefault_6s.webp?du=3000&sqp=COqy3IoG&rs=AOn4CLCw24J8u8Hp5Y0W6ehoJ_IbbMj5_g" />
                    </span>
                  </div>
                  <div className="library__subs-heading">
                    <p>
                      Hayasaka TV
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="library__recent-uploads">
              <div className="library__uploads">
                <p>Recent Uploads</p>
              </div>
              <div className="library__uploads-children">
                <div className="library__uploads-container">
                  <div className="library__uploads-child">
                    <span>
                      <img alt="demoimage" src="https://i.ytimg.com/an_webp/D3-m86SmLqs/mqdefault_6s.webp?du=3000&sqp=CNPU3IoG&rs=AOn4CLAY4QBH77oDZk1rhIdUYPRDpX9sxg" />
                    </span>
                  </div>
                  <div className="library__uploads-heading">
                    <p>
                      BEST-OF JDM Cars Leaving
                    </p>
                  </div>
                </div>
                <div className="library__uploads-container">
                  <div className="library__uploads-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/1iRrryWSc30/mqdefault_6s.webp?du=3000&sqp=CLyl3IoG&rs=AOn4CLA0gr8tbgt0-hKSbr4jEDDXeVNpeQ" />
                    </span>
                  </div>
                  <div className="library__uploads-heading">
                    <p>
                      I'm Gonna Regret This.... / S3E5
                    </p>
                  </div>
                </div>
                <div className="library__uploads-container">
                  <div className="library__uploads-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/ozZ8DHDXmK4/mqdefault_6s.webp?du=3000&sqp=CMi13IoG&rs=AOn4CLDXDK_TNHm6fxjcM-RnC9VHCuSq2Q" />
                    </span>
                  </div>
                  <div className="library__uploads-heading">
                    <p>
                      BDDING ON CARS AT JAPANS BIGGEST AUCTION
                    </p>
                  </div>
                </div>
                <div className="library__uploads-container">
                  <div className="library__uploads-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/vi/Chwkk-6m7jk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDTE0dYErN43agiiuSMFzm30V80oA" />
                    </span>
                  </div>
                  <div className="library__uploads-heading">
                    <p>
                      Building a 540hp 1JZ Nissan 240sx in 10 minutes
                    </p>
                  </div>
                </div>
                <div className="library__uploads-container">
                  <div className="library__uploads-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/I5XjafzY9iI/mqdefault_6s.webp?du=3000&sqp=COK53IoG&rs=AOn4CLDLITRi-9JUePhDlQ1hrQkRpLQiGw" />
                    </span>
                  </div>
                  <div className="library__uploads-heading">
                    <p>
                      Best of JDM Car Sounds
                    </p>
                  </div>
                </div>
                <div className="library__uploads-container">
                  <div className="library__uploads-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/8cY7JMm5Zw8/mqdefault_6s.webp?du=3000&sqp=CKPO3IoG&rs=AOn4CLApnx5S_mh4ehCGxJ-uVO9OBX--GQ" />
                    </span>
                  </div>
                  <div className="library__uploads-heading">
                    <p>
                      The Best JDM Cars you can BUY for UNDER $10,000!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="library__recent-likes">
              <div className="library__likes">
                <p>Recent Likes</p>
              </div>
              <div className="library__likes-children">
                <div className="library__likes-container">
                  <div className="library__likes-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/GwHa-BVm9Ro/mqdefault_6s.webp?du=3000&sqp=CJLh3IoG&rs=AOn4CLDUehIp7ahF3UmzDXj0rIK6Bwek5Q" />
                    </span>
                  </div>
                  <div className="library__likes-heading">
                    <p>
                      Top 10 Goriest Anime from the years 2000-2019 + Mini+Reviews
                    </p>
                  </div>
                </div>
                <div className="library__likes-container">
                  <div className="library__likes-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/cfSyAMYf7ls/mqdefault_6s.webp?du=3000&sqp=CNKs3IoG&rs=AOn4CLAuWd9EIR_WMFjiPvJMe2L46GeZrQ" />
                    </span>
                  </div>
                  <div className="library__likes-heading">
                    <p>
                      Narutp 4th Great Ninja War English Dub
                    </p>
                  </div>
                </div>
                <div className="library__likes-container">
                  <div className="library__likes-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/3gvvLUa_Ahw/mqdefault_6s.webp?du=3000&sqp=CKCG3IoG&rs=AOn4CLAd11cfnHrxBSsY2gvWN0ljtnziwA" />
                    </span>
                  </div>
                  <div className="library__likes-heading">
                    <p>
                      Eren vs Warhammer Titan - (Full Fight) HD
                    </p>
                  </div>
                </div>
                <div className="library__likes-container">
                  <div className="library__likes-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/4qqLTehIGPw/mqdefault_6s.webp?du=3000&sqp=CJTF3IoG&rs=AOn4CLAUCd_gwjFd22J8cLjq3GFfxxAbGw" />
                    </span>
                  </div>
                  <div className="library__likes-heading">
                    <p>
                      Saitama Surprising Everyone With His Strength Funny Anime Moments
                    </p>
                  </div>
                </div>
                <div className="library__likes-container">
                  <div className="library__likes-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/vi/Q4kIjMjqu8E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFlqIasnVDKkP9aXYicdQFADC8HQ" />
                    </span>
                  </div>
                  <div className="library__likes-heading">
                    <p>
                      Top 10 Anime Where The Weak Main Character Becomes Overpowered
                    </p>
                  </div>
                </div>
                <div className="library__likes-container">
                  <div className="library__likes-child">
                    <span>
                    <img alt="demoimage" src="https://i.ytimg.com/an_webp/dXASQkvXDlQ/mqdefault_6s.webp?du=3000&sqp=CMjd3IoG&rs=AOn4CLCxRDBcnG8GhE1QMLIeKK1TbAV4EQ" />
                    </span>
                  </div>
                  <div className="library__likes-heading">
                    <p>
                      When Calm Anime Characters Snapped
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="library__video-container">
        <div className="library__videos">
          {LibraryData.map((item, index) => {
            return (
              <div key={index} className="library-card__container">
                <Link to={item.path} >
                  <div className="library-card__thumbnail">
                    <img src={item.image}  alt="channel-thumbnail" />
                  </div>
                  <div className="library-card__info">
                    <div>
                      <p>{item.title}</p> 
                    </div>
                  </div>
                  <div className="library-card__text">
                    <div className="library-card__channel-icon">
                      <p>{item.channel}</p> 
                      <p className="library-card__icon">{item.icon}</p>
                    </div>
                    <p>
                      {item.views + item.maxViews  + ' ' +  "views"} &middot; {item.timestamp + ' ' + item.filter + ' ' + "ago"}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
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

import React from "react";
import * as FaIcons from 'react-icons/fa';

import Anime1 from '../../../../images/libraryImg/anime1.jpg';
import Anime2 from '../../../../images/libraryImg/anime2.jpg';
import Anime3 from '../../../../images/libraryImg/anime3.jpg';
import Anime4 from '../../../../images/libraryImg/anime4.jpeg';
import Anime5 from '../../../../images/libraryImg/anime5.jpg';
import Anime6 from '../../../../images/libraryImg/anime6.jpg';

import JDM1 from '../../../../images/libraryImg/jdm1.jpg';
import JDM2 from '../../../../images/libraryImg/jdm2.jpg';
import JDM3 from '../../../../images/libraryImg/jdm3.jpg';
import JDM4 from '../../../../images/libraryImg/jdm4.jpg';
import JDM5 from '../../../../images/libraryImg/jdm5.jpg';
import JDM6 from '../../../../images/libraryImg/jdm6.jpg';

import '../styles/libraryAccount.scss';

const LibraryAccount = () => {
  return (
    <div className="library__container">
      <div className="library__profile">
        <div className="library__avatar-info">
          <div className="library__image">
            <img
              src="https://yt3.ggpht.com/yti/ANoDKi7NAE9_TOC4q-pl7Ub37nT6gHK4_bxPu81jTQ=s160-c-k-c0x00ffffff-no-rj"
              alt="avatar"
            />
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
                    <img alt="demoimage" src={Anime1} />
                  </span>
                </div>
                <div className="library__subs-heading">
                  <p>Otaku Sensai</p>
                </div>
              </div>
              <div className="library__subs-container">
                <div className="library__subs-child">
                  <span>
                    <img alt="demoimage" src={Anime2} />
                  </span>
                </div>
                <div className="library__subs-heading">
                  <p>AniStudio</p>
                </div>
              </div>
              <div className="library__subs-container">
                <div className="library__subs-child">
                  <span>
                    <img alt="demoimage" src={Anime3} />
                  </span>
                </div>
                <div className="library__subs-heading">
                  <p>5Elements</p>
                </div>
              </div>
              <div className="library__subs-container">
                <div className="library__subs-child">
                  <span>
                    <img alt="demoimage" src={Anime4} />
                  </span>
                </div>
                <div className="library__subs-heading">
                  <p>Hogake4EVER</p>
                </div>
              </div>
              <div className="library__subs-container">
                <div className="library__subs-child">
                  <span>
                    <img alt="demoimage" src={Anime5} />
                  </span>
                </div>
                <div className="library__subs-heading">
                  <p>Animeology</p>
                </div>
              </div>
              <div className="library__subs-container">
                <div className="library__subs-child">
                  <span>
                    <img alt="demoimage" src={Anime6} />
                  </span>
                </div>
                <div className="library__subs-heading">
                  <p>Hayasaka TV</p>
                </div>
              </div>
            </div>
            <div className="load-more">Load More</div>
          </div>
          <div className="library__recent-uploads">
            <div className="library__uploads">
              <p>Recent Uploads</p>
            </div>
            <div className="library__uploads-children">
              <div className="library__uploads-container">
                <div className="library__uploads-child">
                  <span>
                    <img alt="demoimage" src={JDM1} />
                  </span>
                </div>
                <div className="library__uploads-heading">
                  <p>BEST-OF JDM Cars Leaving</p>
                </div>
              </div>
              <div className="library__uploads-container">
                <div className="library__uploads-child">
                  <span>
                    <img alt="demoimage" src={JDM2} />
                  </span>
                </div>
                <div className="library__uploads-heading">
                  <p>I'm Gonna Regret This.... / S3E5</p>
                </div>
              </div>
              <div className="library__uploads-container">
                <div className="library__uploads-child">
                  <span>
                    <img alt="demoimage" src={JDM3} />
                  </span>
                </div>
                <div className="library__uploads-heading">
                  <p>BDDING ON CARS AT JAPANS BIGGEST AUCTION</p>
                </div>
              </div>
              <div className="library__uploads-container">
                <div className="library__uploads-child">
                  <span>
                    <img alt="demoimage" src={JDM4} />
                  </span>
                </div>
                <div className="library__uploads-heading">
                  <p>Building a 540hp 1JZ Nissan 240sx in 10 minutes</p>
                </div>
              </div>
              <div className="library__uploads-container">
                <div className="library__uploads-child">
                  <span>
                    <img alt="demoimage" src={JDM5} />
                  </span>
                </div>
                <div className="library__uploads-heading">
                  <p>Best of JDM Car Sounds</p>
                </div>
              </div>
              <div className="library__uploads-container">
                <div className="library__uploads-child">
                  <span>
                    <img alt="demoimage" src={JDM6} />
                  </span>
                </div>
                <div className="library__uploads-heading">
                  <p>The Best JDM Cars you can BUY for UNDER $10,000!</p>
                </div>
              </div>
            </div>
            <div className="load-more">Load More</div>
          </div>
          <div className="library__recent-likes">
            <div className="library__likes">
              <p>Recent Likes</p>
            </div>
            <div className="library__likes-children">
              <div className="library__likes-container">
                <div className="library__likes-child">
                  <span>
                    <img
                      alt="demoimage"
                      src="https://i.ytimg.com/an_webp/GwHa-BVm9Ro/mqdefault_6s.webp?du=3000&sqp=CJLh3IoG&rs=AOn4CLDUehIp7ahF3UmzDXj0rIK6Bwek5Q"
                    />
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
                    <img
                      alt="demoimage"
                      src="https://i.ytimg.com/an_webp/cfSyAMYf7ls/mqdefault_6s.webp?du=3000&sqp=CNKs3IoG&rs=AOn4CLAuWd9EIR_WMFjiPvJMe2L46GeZrQ"
                    />
                  </span>
                </div>
                <div className="library__likes-heading">
                  <p>Narutp 4th Great Ninja War English Dub</p>
                </div>
              </div>
              <div className="library__likes-container">
                <div className="library__likes-child">
                  <span>
                    <img
                      alt="demoimage"
                      src="https://i.ytimg.com/an_webp/3gvvLUa_Ahw/mqdefault_6s.webp?du=3000&sqp=CKCG3IoG&rs=AOn4CLAd11cfnHrxBSsY2gvWN0ljtnziwA"
                    />
                  </span>
                </div>
                <div className="library__likes-heading">
                  <p>Eren vs Warhammer Titan - (Full Fight) HD</p>
                </div>
              </div>
              <div className="library__likes-container">
                <div className="library__likes-child">
                  <span>
                    <img
                      alt="demoimage"
                      src="https://i.ytimg.com/an_webp/4qqLTehIGPw/mqdefault_6s.webp?du=3000&sqp=CJTF3IoG&rs=AOn4CLAUCd_gwjFd22J8cLjq3GFfxxAbGw"
                    />
                  </span>
                </div>
                <div className="library__likes-heading">
                  <p>
                    Saitama Surprising Everyone With His Strength Funny Anime
                    Moments
                  </p>
                </div>
              </div>
              <div className="library__likes-container">
                <div className="library__likes-child">
                  <span>
                    <img
                      alt="demoimage"
                      src="https://i.ytimg.com/vi/Q4kIjMjqu8E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCFlqIasnVDKkP9aXYicdQFADC8HQ"
                    />
                  </span>
                </div>
                <div className="library__likes-heading">
                  <p>
                    Top 10 Anime Where The Weak Main Character Becomes
                    Overpowered
                  </p>
                </div>
              </div>
              <div className="library__likes-container">
                <div className="library__likes-child">
                  <span>
                    <img
                      alt="demoimage"
                      src="https://i.ytimg.com/an_webp/dXASQkvXDlQ/mqdefault_6s.webp?du=3000&sqp=CMjd3IoG&rs=AOn4CLCxRDBcnG8GhE1QMLIeKK1TbAV4EQ"
                    />
                  </span>
                </div>
                <div className="library__likes-heading">
                  <p>When Calm Anime Characters Snapped</p>
                </div>
              </div>
            </div>
            <div className="load-more">Load More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibraryAccount;

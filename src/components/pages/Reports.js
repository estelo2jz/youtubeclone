import React from 'react';
import '../../styles/Reports.scss';
import ComingSoon from '../ComingSoon';
import OptionOne from './options/OptionOne';
import OptionTwo from './options/OptionTwo';
import OptionThree from './options/OptionThree';
import {Link} from 'react-router-dom';


import MusicBg from '../images/optionImage/music.jpg';
import CodeBg from '../images/optionImage/codes.jfif';
import AnimeBg from '../images/optionImage/anime.jfif';
import AnimeSongBg from '../images/optionImage/animesong.jfif';
import JDMBg from '../images/optionImage/jdm.jfif';
import ReactBg from '../images/optionImage/react.png';
import NativeBg from '../images/optionImage/native.png';

export const ShowmoreMain = () => {
  return (
    <div className='showmore'>
      <div className='showmore__saved'>
        Saved
      </div>
      <div className='showmore__container'>
        <div className="showmore__item-container">
          {/* <OptionOne /> */}
          <div className="showmore__item">
            <div className="showmore_-item-option-one">
              <Link to="/showmore/save1">
                <span>Music's</span>
                <img src={MusicBg} alt="image" />
              </Link>
            </div>
          </div>
        </div>
        <div className="showmore__item-container">
          {/* <OptionTwo /> */}
          <div className="showmore__item">
            <div className="showmore_-item-option-two">
              <Link to="/showmore/save2">
                <span>Code's</span>
                <img src={CodeBg} alt="image" />
              </Link>
            </div>

          </div>
        </div>
        <div className="showmore__item-container">
          {/* <OptionThree /> */}
          <div className="showmore__item">
            <div className="showmore_-item-option-three">
              <Link to="/showmore/save3">
                <span>Anime's</span>
                <img src={AnimeBg} alt="image" />
              </Link>

            </div>
          </div>
        </div>
        <div className="showmore__item-container">
          {/* <OptionThree /> */}
          <div className="showmore__item">
            {/* <img src={} alt="image"/> */}
            <div className="showmore_-item-option-three">
              <a href="/">
                <span>Anime song OP</span>
                <img src={AnimeSongBg} alt="image" />
              </a>

            </div>
          </div>
        </div>
        <div className="showmore__item-container">
          {/* <OptionThree /> */}
          <div className="showmore__item">
            <div className="showmore_-item-option-three">
              <a href="/">
                <span>JDM cars</span>
                <img src={JDMBg} alt="image" />
              </a>

            </div>
          </div>
        </div>
        <div className="showmore__item-container">
          {/* <OptionThree /> */}
          <div className="showmore__item">
            <div className="showmore_-item-option-three">
              <a href="/">
                <span>React</span>
                <img src={ReactBg} alt="image" />
              </a>

            </div>
          </div>
        </div>
        <div className="showmore__item-container">
          {/* <OptionThree /> */}
          <div className="showmore__item">
            <div className="showmore_-item-option-three">
              <a href="/">
                <span>React Native</span>
               <img src={NativeBg} alt="image" />
              </a>

            </div>
          </div>
        </div>
      </div>
      <div className="showmore__bottom wrapper">
        <div className="wrapper">
          <div id="one">
            <div className="showmore__bottom-left">
              <i className="showmore__icon" class="fab fa-youtube" id="youtube-logo"></i>
            </div>
            <div className="showmore__bottom-right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div id="two">
            <div className="showmore__bottom-left">
              <i className="showmore__icon" class="fab fa-youtube" id="youtube-logo"></i>
            </div>
            <div className="showmore__bottom-right">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div id="three">
            <div className="showmore__bottom-left">
              <i className="showmore__icon" class="fab fa-youtube" id="youtube-logo"></i>
            </div>
            <div className="showmore__bottom-right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div id="four">
            <div className="showmore__bottom-left">
              <i className="showmore__icon" class="fab fa-youtube" id="youtube-logo"></i>
            </div>
            <div className="showmore__bottom-right">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div id="five">
            <div className="showmore__bottom-left">
              <i className="showmore__icon" class="fab fa-youtube" id="youtube-logo"></i>
            </div>
            <div className="showmore__bottom-right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div id="six">
            <div className="showmore__bottom-left">
              <i className="showmore__icon" class="fab fa-youtube" id="youtube-logo"></i>
            </div>
            <div className="showmore__bottom-right">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div id="seven">
            <div className="showmore__bottom-left">
              <i className="showmore__icon" class="fab fa-youtube" id="youtube-logo"></i>
            </div>
            <div className="showmore__bottom-right">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div id="eight">
            <div className="showmore__bottom-left">
              <i className="showmore__icon" class="fab fa-youtube" id="youtube-logo"></i>
            </div>
            <div className="showmore__bottom-right">
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="showmore__bottom-container">
          <h2>Column 1</h2>
          <p>Some text..</p>
        </div> */}
        {/* <div className="showmore__bottom-container">
          <h2>Column 2</h2>
          <p>Some text..</p>
        </div> */}
      </div>
    </div>
  );
};

// export const OptionOne = () => {
//   return (
//     <div className='option-one'>
//       {/* <ComingSoon /> */}
//       music
//     </div>
//   );
// };

// export const OptionTwo = () => {
//   return (
//     <div className='option-two'>
//       {/* <ComingSoon /> */}
//       code

//     </div>
//   );
// };

// export const OptionThree = () => {
//   return (
//     <div className='option-three'>
//       {/* <ComingSoon /> */}
//       anime
//     </div>
//   );
// };
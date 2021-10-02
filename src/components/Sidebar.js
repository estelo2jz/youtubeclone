import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import '../styles/Sidebar.scss';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Avatar from "@material-ui/core/Avatar"

import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import SupervisorAccountSharpIcon from '@material-ui/icons/SupervisorAccountSharp';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import TranslateOutlinedIcon from '@material-ui/icons/TranslateOutlined';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import FeedbackOutlinedIcon from '@material-ui/icons/FeedbackOutlined';
import KeyboardTwoToneIcon from '@material-ui/icons/KeyboardTwoTone';



const Nav = styled.div`
  background: #15171c;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  h5 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin-left: -10px;
    color: white;
    font-size: 0.6em;
  }
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  margin-top: -10px;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  h6 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    margin-left: 15px;
    color: white;
    font-size: 0.6em;
  }
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 260px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  overflow: hidden;
  p {
    // margin-left: 27px;
    font-size: 0.6em;
  }
`;

// const SubMenu = styled.div`
// `

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="sidebar__container">
          <Nav className="sidebar__left-container">
            <NavIcon className="sidebar__bars-container" to='#'>
              <div className="sidebar__bars">
                <FaIcons.FaBars onClick={showSidebar} />
              </div>
            </NavIcon>
            <NavIcon className="sidebar__youtube-container" to="/">
              <div className="sidebar__youtube-logo">
                <i class="fab fa-youtube" id="youtube-logo"></i>
                {/* YouTube */}
              </div>
            </NavIcon>
          </Nav>
          <div  className="sidebar__profile">
            <div className="sidebar__sub-menu">
              <a href="#"><SearchOutlinedIcon /></a>
            </div>
            <div className="sidebar__sub-menu">
              <a href="#"><MicIcon /></a>
            </div>
            {/* <div className="sidebar__sub-menu">
              <a href="#"><VideoCallOutlinedIcon /></a>
            </div> */}
            <div className="sidebar__sub-menu">
              <a href="#"><AppsOutlinedIcon /></a>
            </div>
            <div className="sidebar__sub-menu">
              <a href="#"><NotificationsNoneOutlinedIcon /></a>
            </div>
            <div className="sidebar__area">
              <div className="sidebar__profile-area">
                <Avatar
                  alt="Eshtelo"
                  src="https://avatars2.githubusercontent.com/u/49965889?s=460&u=a33bdcda0c260bbdd896071495a26ef72e212351&v=4"
                />
              </div>
              <div className="sidebar__menu">
                <a className="sidebar__account" href="/#">
                  <div className="sidebar__icons">
                    <Avatar
                      alt="Eshtelo"
                      src="https://avatars2.githubusercontent.com/u/49965889?s=460&u=a33bdcda0c260bbdd896071495a26ef72e212351&v=4"
                    />
                  </div>
                  <span>
                    <p>
                      Estelo Abellanosa
                    </p>
                    <p>
                     Manage your Google Account
                    </p>
                  </span>
                </a>
                <hr className="sidebar__hr" />
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <AccountCircleOutlinedIcon />
                  </div>
                  <span>
                    Your Channel
                  </span>
                </a>
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <MonetizationOnOutlinedIcon />
                  </div>
                  <span>
                    Purchase and memberships
                  </span>
                </a>
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <OndemandVideoSharpIcon />
                  </div>
                  <span>
                    YouTube Studio
                  </span>
                </a>
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <SupervisorAccountSharpIcon />
                  </div>
                  <span>
                    Switch account
                  </span>
                  <div className="sidebar__right-arrow">
                    <KeyboardArrowRightOutlinedIcon />
                  </div>
                </a>
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <ExitToAppOutlinedIcon />
                  </div>
                  <span>
                    Sign out
                  </span>
                </a>
                <hr className="sidebar__hr" />
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <Brightness2OutlinedIcon />
                  </div>
                  <span>
                    Appereance: Device theme
                  </span>
                  <div className="sidebar__right-arrow">
                    <KeyboardArrowRightOutlinedIcon />
                  </div>
                </a>
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <TranslateOutlinedIcon />
                  </div>
                  <span>
                    Language: English
                  </span>
                  <div className="sidebar__right-arrow">
                    <KeyboardArrowRightOutlinedIcon />
                  </div>
                </a>
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <LanguageOutlinedIcon />
                  </div>
                  <span>
                    Location: United States
                  </span>
                  <div className="sidebar__right-arrow">
                    <KeyboardArrowRightOutlinedIcon />
                  </div>
                </a>
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <SettingsOutlinedIcon />
                  </div>
                  <span>
                    Settings
                  </span>
                </a>
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <VerifiedUserOutlinedIcon />
                  </div>
                  <span>
                    Your data in YouTube
                  </span>
                </a>
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <HelpOutlineOutlinedIcon />
                  </div>
                  <span>
                    Help
                  </span>
                </a>
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <FeedbackOutlinedIcon />
                  </div>
                  <span>
                    Send feedback
                  </span>
                </a>
                <a className="sidebar__links" href="/#">
                  <div className="sidebar__icons">
                    <KeyboardTwoToneIcon />
                  </div>
                  <span>
                    Keyboard shortcuts
                  </span>
                </a>
                <hr className="sidebar__hr" />
                <a className="sidebar__res-mode" href="/#">
                  <span>
                    Restricted Mode: Off
                  </span>
                  <div className="sidebar__right-arrow">
                    <KeyboardArrowRightOutlinedIcon />
                  </div>
                </a>
              </div>

              {/* <div className="sidebar__menu">
                <a href="/#"><VideoCallSharpIcon /></a>
                <a href="/#"><AppsSharpIcon /></a>
                <a href="/#"><NotificationsActiveSharpIcon /></a>
                <a href="/#"><SettingsApplicationsIcon /></a>
              </div> */}
            </div>

            {/* <span>
              <VideoCallSharpIcon className="header__icon" />
            </span>
            <span>
              <AppsSharpIcon className="header__icon"  />
            </span>
            <span>
              <NotificationsActiveSharpIcon className="header__icon"  />
            </span>
            <span className="sidebar__icon">
              <div className="sidebar">
                <Avatar
                  alt="Eshtelo"
                  src="https://avatars2.githubusercontent.com/u/49965889?s=460&u=a33bdcda0c260bbdd896071495a26ef72e212351&v=4"
                />
              </div>
            </span> */}
          </div>
        </div>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon className='submenu__container' to='#'>
              <span className='submenu__bars'>
                <CancelPresentationIcon onClick={showSidebar} />
              </span>
              <p className='submenu__logo'>
                {/* <i class="fab fa-youtube" id="youtube-logo"></i> */}
                {/* YouTube */}
              </p>
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
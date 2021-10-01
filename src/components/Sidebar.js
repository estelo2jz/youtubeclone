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
import WhatshotIcon from '@material-ui/icons/Whatshot';
import Avatar from "@material-ui/core/Avatar"

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
  width: 230px;
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
            <div className="sidebar__area">
              <div className="sidebar__profile-area">
                <Avatar
                  alt="Eshtelo"
                  src="https://avatars2.githubusercontent.com/u/49965889?s=460&u=a33bdcda0c260bbdd896071495a26ef72e212351&v=4"
                />
              </div>
              <div className="sidebar__menu">
                <a href="/#"><VideoCallSharpIcon /></a>
                <a href="/#"><AppsSharpIcon /></a>
                <a href="/#"><NotificationsActiveSharpIcon /></a>
                <a href="/#"><SettingsApplicationsIcon /></a>
              </div>
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
              <h6 className='submenu__bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
              </h6>
              <p className='submenu__logo'>
                <i class="fab fa-youtube" id="youtube-logo"></i>
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
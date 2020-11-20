import React, {useState} from 'react';
import './styles/Header.css';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsSharpIcon from '@material-ui/icons/AppsSharp';
import NotificationsActiveSharpIcon from '@material-ui/icons/NotificationsActiveSharp';
import Avatar from "@material-ui/core/Avatar"
// using Link will not refresh the page, but the <a> tag will.
import { Link } from 'react-router-dom';


import Newme from './newme.jpg';

function Header() {
  const [inputSearch, setInoutSearch] = useState('');
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon className="header__menu__icon" />
        <Link to="/">
          <img 
            className="header__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1920px-YouTube_Logo_2017.svg.png"
          />
        </Link>
      </div>
      <div className="header__input">
        <input 
          onChange={e => setInoutSearch(e.target.value)} 
          value={inputSearch} 
          placeholder="Search" 
          type="text" 
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchSharpIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__icons">
        <VideoCallSharpIcon className="header__icon" />
        <AppsSharpIcon className="header__icon"  />
        <NotificationsActiveSharpIcon className="header__icon"  />
        <Avatar
          alt="Eshtelo"
          src="https://avatars2.githubusercontent.com/u/49965889?s=460&u=a33bdcda0c260bbdd896071495a26ef72e212351&v=4"
        />
      </div>
    </div>
  )
}

export default Header;

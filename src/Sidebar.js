import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import SidebarRow from './SidebarRow';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import HistorySharpIcon from '@material-ui/icons/HistorySharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import WatchLaterSharpIcon from '@material-ui/icons/WatchLaterSharp';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';
import ExpandMoreSharpIcon from '@material-ui/icons/ExpandMoreSharp';


import './styles/Sidebar.scss';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">
        <SidebarRow selected Icon={HomeSharpIcon} title="Home" />
      </Link>
      <Link to="/Trending">
        <SidebarRow activeClassName Icon={WhatshotSharpIcon} title="Trending" />
      </Link>
      <Link to="/Subscrption">
        <SidebarRow activeClassName Icon={SubscriptionsSharpIcon} title="Subscriptions" />
      </Link>
      <hr />
      <Link to="/Library">
        <SidebarRow activeClassName Icon={VideoLibrarySharpIcon} title="Library" />
      </Link>
      <Link to="/History">
        <SidebarRow activeClassName Icon={HistorySharpIcon} title="History" />
      </Link>
      <Link to="/YourVideos">
        <SidebarRow activeClassName Icon={OndemandVideoSharpIcon} title="Your vidoes" />
      </Link>
      <Link to="/WatchLater">
        <SidebarRow activeClassName Icon={WatchLaterSharpIcon} title="Watch Later" />
      </Link>
      <Link to="/LikedVideos">
        <SidebarRow activeClassName Icon={ThumbUpSharpIcon} title="Liked videos" />
      </Link>
      <SidebarRow activeClassName Icon={ExpandMoreSharpIcon} title="Show more" />
      <hr />
    </div>
  )
}

export default Sidebar

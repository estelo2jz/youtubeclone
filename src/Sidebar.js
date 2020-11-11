import React from 'react';
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


import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow selected Icon={HomeSharpIcon} title="Home" />
      <SidebarRow Icon={WhatshotSharpIcon} title="Trending" />
      <SidebarRow Icon={SubscriptionsSharpIcon} title="Subscriptions" />
      <hr />
      <SidebarRow Icon={VideoLibrarySharpIcon} title="Library" />
      <SidebarRow Icon={HistorySharpIcon} title="History" />
      <SidebarRow Icon={OndemandVideoSharpIcon} title="Your vidoes" />
      <SidebarRow Icon={WatchLaterSharpIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpSharpIcon} title="Liked videos" />
      <SidebarRow Icon={ExpandMoreSharpIcon} title="Show more" />
      <hr />
    </div>
  )
}

export default Sidebar

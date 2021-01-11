import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as MdIcons from 'react-icons/md';
import * as HiIcons from 'react-icons/hi';
import * as FiIcons from 'react-icons/fi';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Trending',
    //     path: '/overview/users',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Revenue',
    //     path: '/overview/revenue',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'Trending',
    path: '/trending',
    icon: <MdIcons.MdWhatshot />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Subscriptions',
    path: '/subs',
    icon: <MdIcons.MdSubscriptions />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Library',
    path: '/library',
    icon: <MdIcons.MdVideoLibrary />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    // subNav: [
    //   {
    //     title: 'Reports',
    //     path: '/reports/reports1',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'sub-nav'
    //   },
    //   {
    //     title: 'Reports 2',
    //     path: '/reports/reports2',
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: 'sub-nav'
    //   },
    //   {
    //     title: 'Reports 3',
    //     path: '/reports/reports3',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'History',
    path: '/history',
    icon: <FaIcons.FaHistory />
  },
  {
    title: 'Your Videos',
    path: '/yourvideos',
    icon: <OndemandVideoIcon />
  },
  {
    title: 'Watch Later',
    path: '/watchlater',
    icon: <WatchLaterIcon />
  },
  {
    title: 'Liked Videos',
    path: '/likedvideos',
    icon: <HiIcons.HiThumbUp />
  },
  {
    title: 'Show More',
    path: '/showmore',
    icon: <FiIcons.FiMoreVertical />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        
        title: 'Save Folder One',
        path: '/showmore/save1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Save Folder Two',
        path: '/showmore/save2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        
        title: 'Save Folder Three',
        path: '/showmore/save2',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
];
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

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
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Subscriptions',
    path: '/subs',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: 'Library',
    path: '/library',
    icon: <IoIcons.IoIosPaper />,
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
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Your Videos',
    path: '/yourvideos',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Watch Later',
    path: '/watchlater',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Liked Videos',
    path: '/likedvideos',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Show More',
    path: '/showmore',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        
        title: 'Save Folder One',
        path: '/shoemore/save1',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Save Folder One',
        path: '/shoemore/save2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        
        title: 'Save Folder One',
        path: '/shoemore/save1',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
];
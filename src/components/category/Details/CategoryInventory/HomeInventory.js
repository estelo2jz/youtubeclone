import React, { createContext, useState, useEffect } from "react";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export const HomeDataContext = createContext();

export const HomeDataProvider = (props) => {
  const [products, setProducts] = useState([
    {
      _id: "671",
      title: "Become a Web Developer in 10 minutes | 2019/2020",
      image:
        "https://miro.medium.com/max/900/0*_kzCaYRrAjcxUoHA.jpg",
      channel: "CodeCamp",
      channelImage:
        "https://previews.123rf.com/images/djvstock/djvstock1511/djvstock151101898/48229587-web-developer-concept-with-technology-icons-design-vector-illustration-10-eps-graphic.jpg",
      views: "228,982",
      timestamp: "3 days ago",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=N6Nq62z2C6c",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [
        "https://cdn.cultofmac.com/wp-content/uploads/2013/11/CoM-webdev.jpg",
      ],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "672",
      title: "Subaru Straight PIPE",
      image:
      "https://i.ytimg.com/vi/9GNJey6r4mA/maxresdefault.jpg",
      channel: "Sha",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLS1dne_ODKGcfILgob7thXLZxhQ9KN0clrGkKEUbw=s176-c-k-c0x00ffffff-no-rj-mo",
      views: "900K",
      timestamp: "19 days ago",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=i5Fa-k2Xf0Y",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: ["https://i.ytimg.com/vi/cyQQ3pnMf7I/hqdefault.jpg"],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "673",
      title: "Best ANIME of 2020!",
      image:
        "https://chikyuji-animes.com/wp-content/uploads/2019/12/winter-is-coming-2020-min-compressed-810x456.jpg",
      channel: "animeFIGHTS",
      channelImage:
        "https://vignette.wikia.nocookie.net/2b7fd0a4-8886-4402-ad9c-ac0f313ddf86/scale-to-width-down/800",
      views: "10.3M",
      timestamp: "10 hours ago",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=vIcOfNNLbpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [
        "https://www.denofgeek.com/wp-content/uploads/2020/03/anime-2020.jpg?resize=768%2C432",
      ],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "674",
      title: "ANIME Romances CUTE MONENTS",
      image:
        "https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/4/2020/02/Five-High-School-Anime-Romance-Cover.jpg",
      channel: "LoveANIME",
      channelImage:
        "https://qph.fs.quoracdn.net/main-qimg-139abffb2b1a5948f86535a7440616e6.webp",
      views: "7.3M",
      timestamp: "1 days ago",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=OMNl2mwZYXE",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [
        "https://qph.fs.quoracdn.net/main-qimg-139abffb2b1a5948f86535a7440616e6.webp",
      ],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "675",
      title: "CYBERPUNK 2077 TRAILER",
      image:
        "https://i.ytimg.com/vi/qIcTM8WXFjk/maxresdefault.jpg",
      channel: "CyberPunk2077",
      channelImage:
        "https://attackofthefanboy.com/wp-content/uploads/2020/06/cyber-night-city-wire.jpg",
      views: "100M",
      timestamp: "15 days ago",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=jkP2DgL-JBw",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [
        "https://attackofthefanboy.com/wp-content/uploads/2020/06/cyber-night-city-wire.jpg",
      ],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "676",
      title: "CyberPunk 2077 GAMEPLAY!",
      channel: "Gameplay4K",
      image:
        "https://i.ytimg.com/vi/Mt1BtM0MJrA/maxresdefault.jpg",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLSK94hAuDukSvtkiVrRaLHJKo4OmzEQXuwwteNNaw=s68-c-k-c0x00ffffff-no-rj",
      views: "6.3M",
      timestamp: "26 days ago",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=QH9gRxVa2lI",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [
        "https://www.gamepressure.com/gallery/html/news/bigphotos/596541437.jpg",
      ],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "677",
      title: "Discord Bots 3: Coding a Bot with discord.js",
      image:
        "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=750&quality=75",
      channel: "The Coding Train",
      channelImage: "https://i.ytimg.com/vi/8k-zyUyuvlM/maxresdefault.jpg",
      views: "210K",
      timestamp: "6 days ago",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=JKKKHH6Q2S4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: ["https://miro.medium.com/max/5760/1*rbSRs0yGxTcOGRdsUFtVxg.png"],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },

    {
      _id: "678",
      title: "TOKYO NIGHT CAR CULTURE EXPOSED!",
      image:
        "https://i.ytimg.com/vi/Kt3C7nG3qnc/maxresdefault.jpg",
      channel: "SAMMIT",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLR7I4zjBuP5ftJp3t20wbRSQs-oy3cL6Hzu54znag=s68-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=Kt3C7nG3qnc",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "679",
      title: "Drucki FUNNY MONENTS",
      image:
        "https://i2.wp.com/mypopcorns.com/wp-content/uploads/2021/10/DRUSKI-NEW-COULDA-BEEN-RECORDS-FUNNIEST-MOMENTS-feat-DRAKE-JAKE.jpg?fit=1200%2C675&ssl=1",
      channel: "DrippedTV",
      channelImage:
        "https://yt3.ggpht.com/ua4ec1yjXaIX90NZTuS9VRRHUvjJXDx3POKbzedQluJWz1ZABnFh7_Z5g6tQ744N3LSDyuxOMJA=s68-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=KXTPtiCnVHg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6710",
      title: "COVID-19 VACCINE",
      image:
        "https://www.osfhealthcare.org/blog/wp-content/uploads/2020/12/covid-19-vaccine-500x333.jpg",
      channel: "CBS NEWS",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLRIh651Abk0sIzolXRIOXDGZs6nvXlREQP2CL8P=s68-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=ChveDMh51f8",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6711",
      title: "PANDEMIC NEWS ALERT",
      image:
        "https://gray-wymt-prod.cdn.arcpublishing.com/resizer/xrrWS6cxMnD4WTIontnoYv0fVpU=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/76UR2RCIURFOVNFDY3NQGMEFHI.PNG",
      channel: "CNBC Television",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLQcZ8aAxexPJhQiG6v50Yqa2m1Lb9G2lEWNOul4=s68-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=kwb9jXIWrRg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6712",
      title: "Gucci Mane - Addicted [Official Audio]",
      image:
        "https://i.ytimg.com/vi/zuwnLd3d9PA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJnXwKkyyc353a2JOjXcVN4KtJBA",
      channel: "Gucci Mane",
      channelImage:
        "https://yt3.ggpht.com/HqwmpkMLFsztroOItLrPOTHoRaJWIO2Vc9dzGsOleYzhQmhz8ZD6ppN6oKkONDyvNNQYZ3rs=s88-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=zuwnLd3d9PA",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6713",
      title: "Migos - Need It (Official Video) ft. YoungBoy Never Broke Again",
      image:
        "https://i.ytimg.com/vi/u0LaoQks5mY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSnHQ7Az7FuWqr-EU946kH690DiQ",
      channel: "Migos ATL",
      channelImage:
        "https://yt3.ggpht.com/sQuFe-03AskPWjEJCmx9ifEEJG70vWMmy5IA1MWIC5qCVYqnIkz6p_2l_ZdU_yi0WR0YEvrX1Q=s88-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=u0LaoQks5mY",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6714",
      title: "I Paid $500 For AWFUL Knock-Off Anime Merch",
      image:
        "https://i.ytimg.com/vi/XpMhtAqOPKA/maxresdefault.jpg",
      channel: "",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLRD815bikV2XDELfW8ZGM879bGOXQFt8fVKNBOU5g=s68-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=TZt6GDXP2OQ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6715",
      title: "What Vaping Does to the Body",
      image:
        "https://x-default-stgec.uplynk.com/ausw/slices/fb6/7fed36643eb2467f9bc52626aec24432/fb6b01cdf3e14a0c8cd096ae1af47a79/poster_ba146dc081d940e9a3488c52f7564cf4.jpg",
      channel: "Insttitute of Human Anatomy",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLTZR7db1hU-jd-27olyXGyAIWPLzwCoeggRDxj4=s68-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=IaVaoja2Uk4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6716",
      title:
        "What Is Behind a HUGE Landfill in California | Secrets of Mega Landfill | ENDEVR Documentary",
      image:
        "https://i.ytimg.com/vi/FTD03QAkK0E/maxresdefault.jpg",
      channel: "ENDEVR",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLSLwEHCmW1DhnLwvO6Y8Z_1D5DcbILbgNljr1k2lQ=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=FTD03QAkK0E",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6717",
      title: "Why Rolls-Royce Cars Are So Expensive | So Expensive",
      image:
        "https://i.ytimg.com/vi/QvpvUOIN1R4/maxresdefault.jpg",
      channel: "Business Insider",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLT5wSJGXa3Mt-ZQt-siZTsmSAQfSPMAHVTHhgnvzQ=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=NUzDLpSkQTg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6718",
      title: "BUYING CARS AT AUCTIONS IN JAPAN!",
      image:
        "https://i.ytimg.com/vi/hKO-Mnwg2Zc/maxresdefault.jpg",
      channel: "SAMMIT",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLR7I4zjBuP5ftJp3t20wbRSQs-oy3cL6Hzu54znag=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=Vu6AmBFfQO4&t=251s",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6719",
      title: "POP SMOKE - DIOR (OFFICIAL VIDEO)",
      image:
        "https://i.ytimg.com/vi/oorVWW9ywG0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBR1_F8ntjtMUnB5XmAyKEzLT2FGQ",
      channel: "POP SMOKE",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLT1HOzEN7IoKA8FNqsk0AhSze3FqTtqqWKSu2_fuw=s48-c-k-c0x00ffffff-no-rj-mo",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=oorVWW9ywG0",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6720",
      title: "DaBaby - BOP on Broadway (Hip Hop Musical)",
      image:
        "https://i.ytimg.com/vi/28hYUZMufDg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCkhHN6Xejs30f62glmUL39js-0gw",
      channel: "DaBaby",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLQrhIap6MVfXcPZDeZ4U1xFulNUitvF7MAQeqSabA=s48-c-k-c0x00ffffff-no-rj-mo",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=28hYUZMufDg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6721",
      title: "ImDontai Reacted To Memes For ImDontai & Majin Carp V51",
      image:
        "https://i.ytimg.com/vi/JXoXu6FGoAU/maxresdefault.jpg",
      channel: "ImStillDontai",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLQgQXLTCD6MJRDmN64cFJbubLMVriDRhHjaHZDkFg=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=DKyq7uHXOsA",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6722",
      title: "The Mosler Consulier GTP Is a Weird Failed Supercar",
      image:
        "https://s1.cdn.autoevolution.com/images/news/gallery/doug-demuro-drives-a-mosler-consulier-gtp-the-weirdest-american-supercar_2.jpg",
      channel: "Doug DeMuro",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLT81-7jucB0HEzOB1FA_whQqNzyjLoPtoPjmy4W1Q=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=1sCnvBuDRJ0",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6723",
      title: "DDR5 is FINALLY HERE... and I've got it",
      image:
        "https://i.ytimg.com/vi/iHJ16hD4ysk/maxresdefault.jpg",
      channel: "Linus Tech Tips",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLTK0y25C0RJiEngT1ae9mrZLXIortPD-DKQxOlRkw=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=aJEq7H4Wf6U",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6724",
      title: "First Person View PC BUILD Guide! (POV)",
      image:
        "https://i.ytimg.com/vi/v7MYOpFONCU/maxresdefault.jpg",
      channel: "Linus Tech Tips",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLTK0y25C0RJiEngT1ae9mrZLXIortPD-DKQxOlRkw=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=v7MYOpFONCU",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6725",
      title: "How to Pull Off a Bank Heist | The Business of Crime",
      image:
        "https://i.ytimg.com/vi/3fN9R3vJGq8/maxresdefault.jpg",
      channel: "VICE",
      channelImage:
        "https://yt3.ggpht.com/Nv_KBl_Xisv3VhrhtxRU9X61FhknDm_76J5sO9TKT0z_60v61krrzcTNPl_WYe4_U4Cuw2KHeA=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=3fN9R3vJGq8",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6726",
      title:
        "Being teenager in Rio de Janeiro's favelas: Behind the 2016 Brazil Olympic Games | Barber Shop Ep. 4",
      image:
        "https://i.ytimg.com/vi/MAcWzZDTGzI/maxresdefault.jpg",
      channel: "wocomoHUMANITY",
      channelImage:
        "https://yt3.ggpht.com/jXmQcSnmpYWVM4Mx-K4CnNjd9keFE32i7lKdlQqTgunkVkJ2La5Zr7izesiVVyTAHES9pqGNNg=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=MAcWzZDTGzI",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6727",
      title: "The Hermit Kingdom | VICE on HBO",
      image:
        "https://www.nydailynews.com/resizer/QN1ZFhIPo0q608ZB2DhcbiasCwY=/800x525/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/IMJMX6NPCY6O4NQMR6KWDPQ5FQ.jpg",
      channel: "VICE News",
      channelImage:
        "https://yt3.ggpht.com/7Rovb42ic91FtDS7hu-xfJVGtDLJXpkurMaKGisFKNRq0seH_qZ74ihhB5YRfEao0I5xiZnu=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=IrCQh1usdzE",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6728",
      title: "Why I Gave Away My 100Mil Award..",
      image:
        "https://i.ytimg.com/vi/5ZB4_-NPojk/maxresdefault.jpg",
      channel: "PewDiePie",
      channelImage:
        "https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=5ZB4_-NPojk",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6729",
      title:
        "Building a Nissan R35 GTR : Installing a Titanium Catback Exhaust System & Custom Steering Wheel!",
      image:
        "https://i.ytimg.com/vi/Rtp2-7T1N7Y/maxresdefault.jpg",
      channel: "throtl",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLRKv0dhlyuGcJFY2_QOJqgEBxFT_67qaOrpg5YPqQ=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=Rtp2-7T1N7Y",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6730",
      title:
        "CATS ATTACKING PEOPLE COMPILATION - A MUST WATCH VIDEO OF 2020 (CRAZY CATS BEHAVIOR) | IPET",
      image:
        "https://i.ytimg.com/vi/t60i9kPv3xQ/maxresdefault.jpg",
      channel: "iPet",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLRLHRUltVck7O4xrBAzmlmInXwUAqWgwaiI9FrX=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=t60i9kPv3xQ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6731",
      title: "Cristiano Ronaldo Goes Sneaker Shopping With Complex",
      image:
        "https://i.ytimg.com/vi/0jvt8Js0OU0/maxresdefault.jpg",
      channel: "Complex",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLR_-UpAXQepoO4VKz7Ez21EI7zg2iy8Wgr3Ubb4hg=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=0jvt8Js0OU0",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6732",
      title:
        "Young Thug & Lil Baby at Icebox Together for First Time! Spends $150K!!!",
      image:
        "https://i.ytimg.com/vi/lOpQmPbLLWM/maxresdefault.jpg",
      channel: "Icebox",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLRB3MdIad6xYESCRKuinhxdUpFU8N7bSTNbOTfiFA=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=lOpQmPbLLWM",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6733",
      title: "Instant Karma FAILS! (Police Edition) #8",
      image:
        "https://i.ytimg.com/vi/oBBrHKTYBSk/maxresdefault.jpg",
      channel: "Retk Videos",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLS6FnsR5CS3e5oWJ9decKIsHahmTtk2AihiQq_xcA=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=zb_2xCdmyYQ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6734",
      title: "We Nearly 'Drowned' our assistant on a amphibious ATV adventure",
      image:
        "https://i.ytimg.com/vi/6cFPDedG0S4/maxresdefault.jpg",
      channel: "Rich Rebuilds",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLTyWdtnCBzETio0QsqPv5ifYuD23SfeftPUEqdKVA=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=6cFPDedG0S4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6735",
      title:
        "Adam22 Faces Off with The Guy who Tried to Shoot Him on Live Stream",
      image:
        "https://i.ytimg.com/vi/8gSXZaNcPak/maxresdefault.jpg",
      channel: "No Jumper",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLQ7A-cX04iTPkSMX65-YeGbl9uFUSP-b6btMtHK4Q=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=8gSXZaNcPak",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
    {
      _id: "6736",
      title: "When 21 Savage recorded his verse on 'Who want smoke'",
      image:
        "https://i.ytimg.com/vi/GUQvi2F_-jA/maxresdefault.jpg",
      channel: "Lenarr Young",
      channelImage:
        "https://yt3.ggpht.com/ytc/AKedOLTlapE45kYWaUT0I0taoSb_SLOKv9Co4aE2ACb4hQ=s48-c-k-c0x00ffffff-no-rj",
      views: "456",
      timestamp: "23",
      icon: <CheckCircleIcon />,
      thumbsUp: "12K",
      thumbsDown: "77",
      actualDate: "Jan 29, 2021",
      filter: "minutes",
      video: "https://www.youtube.com/watch?v=GUQvi2F_-jA",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,",
      maxViews: "K",
      images: [],
      commentQuantity: "3,945",
      comments: [
        {
          _id: "1",
          user: "Beasty",
          date: "1 year ago",
          comments: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          thumbsUp: "2,926",
          thumbsDown: "457",
          replies: "152",
          imgChannel:
            "https://yt3.ggpht.com/ytc/AKedOLSi-HsiLB_7ul79thQeWiRMLXl5K0hGftRUPuJF=s88-c-k-c0x00ffffff-no-rj",
        },
      ],
    },
  ]);

  const [cart, setCart] = useState([]);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item._id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product._id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("The product has been added to cart.");
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCart(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart,
  };

  return (
    <HomeDataContext.Provider value={value}>
      {props.children}
    </HomeDataContext.Provider>
  );
};

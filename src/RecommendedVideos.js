import React from 'react';
import './Recommended.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className="recommended">
      <h2>Recommended</h2>
      <div className="recommended__videos">
        <VideoCard
          title="Become a Web Developer in 10 minutes | 2019/2020"
          views="2.3M Views"
          timestamp="3 days ago"
          channelImage="https://images.unsplash.com/photo-1550913424-9fc8df9a7be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80"
          channel="iLoveR34s"
          image="https://i.ytimg.com/an_webp/Xg7gdJ3ybzM/mqdefault_6s.webp?du=3000&sqp=CNSjsf0F&rs=AOn4CLCa81Te9aoFQ45o4UKefsKkIbddMg"        
        />
        <VideoCard
          title="Subaru 1.8L TURBO BOXER ENGINE"
          views="900K Views"
          timestamp="19 days ago"
          channelImage="https://images.unsplash.com/photo-1550913424-9fc8df9a7be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80"
          channel="SUBARU LOVERS"
          image="https://i.ytimg.com/an_webp/I_tgTMQBWpw/mqdefault_6s.webp?du=3000&sqp=CJizsf0F&rs=AOn4CLBWWyMjPjElON1o9ST7_SKvyc4ySQ"        
        />
        <VideoCard
          title="Best ANIME of 2020!"
          views="10.3M Views"
          timestamp="10 hours ago"
          channelImage="https://images.unsplash.com/photo-1550913424-9fc8df9a7be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80"
          channel="animeFIGHTS"
          image="https://i.ytimg.com/an_webp/ietSlUj21Z0/mqdefault_6s.webp?du=3000&sqp=CLKvsf0F&rs=AOn4CLB86FZ_oBqQgqp1d_0RX2RhzXNQ9g"        
        />        
        <VideoCard
          title="ANIME Romances CUTE MONENTS"
          views="7.3M Views"
          timestamp="1 days ago"
          channelImage="https://images.unsplash.com/photo-1550913424-9fc8df9a7be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80"
          channel="LoveANIME"
          image="https://i.ytimg.com/an_webp/welpe43nJt4/mqdefault_6s.webp?du=3000&sqp=CLiqsf0F&rs=AOn4CLDEDuZr6vWaJdjW9x0dpUDnSqQi8Q"        
        />        
        <VideoCard
          title="CYBERPUNK 2077 TRAILER"
          views="100M Views"
          timestamp="15 days ago"
          channelImage="https://images.unsplash.com/photo-1550913424-9fc8df9a7be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80"
          channel="CyberPunk2077"
          image="https://i.ytimg.com/an_webp/UnmsqFq4TVc/mqdefault_6s.webp?du=3000&sqp=CMyssf0F&rs=AOn4CLALp9YEGBrlpSsiYwoCh1mNpvX1GA"        
        />        
        <VideoCard
          title="CyberPunk 2077 GAMEPLAY!"
          views="6.3M Views"
          timestamp="26 days ago"
          channelImage="https://images.unsplash.com/photo-1550913424-9fc8df9a7be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80"
          channel="Gameplay4K"
          image="https://i.ytimg.com/an_webp/LjZwyXd4VHc/mqdefault_6s.webp?du=3000&sqp=CMmtsf0F&rs=AOn4CLAsc0XznFnxJa83JMEQ9SXKvtu8dQ"        
        /> 
        <VideoCard
          title="Discord Bots 3: Coding a Bot with discord.js"
          views="210K Views"
          timestamp="6 days ago"
          channelImage="https://images.unsplash.com/photo-1550913424-9fc8df9a7be8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1380&q=80"
          channel="The Coding Train"
          image="https://i.ytimg.com/an_webp/8k-zyUyuvlM/mqdefault_6s.webp?du=3000&sqp=CPDqsP0F&rs=AOn4CLDE0G0hBSv7HCFM5eR12LjQUyHCsA"        
        />

      </div>
    </div>
  )
}

export default RecommendedVideos

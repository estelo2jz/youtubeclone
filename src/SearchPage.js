import React from 'react';
import './SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow 
        image="https://avatars2.githubusercontent.com/u/49965889?s=460&u=a33bdcda0c260bbdd896071495a26ef72e212351&v=4"
        channel="estelo2jz"
        virified
        subs="489k"
        noOfVideos={32}
        description="Just another coder trying to make it to Apple or Google either or."
      />

      <hr/>

      <VideoRow 
        views="4M"
        subs="489k"
        description="downhill longboarding"
        timestamp="45 sec ago"
        channel="estelo2jz"
        title="Cruising on a Longboard!"
        image="https://hobbyhelp.com/wp-content/uploads/2019/03/longboarding-for-beginners.jpg"
      />
      <VideoRow 
        views="150k"
        subs="489k"
        description="I will teach you how to play TIC TAC TOE!"
        timestamp="3 days ago"
        channel="estelo2jz"
        title="TIK TAK TOE tutorial"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png"
      />
      <VideoRow 
        views="50k"
        subs="489k"
        description="Today I will teach you the basic of coding"
        timestamp="23 days ago"
        channel="estelo2jz"
        title="Coding TUT"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrHuwj6G8-vzUwEB3kIz4CkjMsAqRrp4m-bQ&usqp=CAU"
      />
      <VideoRow 
        views="56"
        subs="489k"
        description="Let's bake a cake for a birthday party."
        timestamp="3 sec ago"
        channel="estelo2jz"
        title="Bake A Cake Easy in 10 STEPS."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwPJGsz8yBIxqzCPo1-QHBkGZzqCh31veNw&usqp=CAU"
      />
      <VideoRow 
        views="15k"
        subs="489k"
        description="I tried srufing that big wave in Cali"
        timestamp="2 months ago"
        channel="estelo2jz"
        title="Surfing for the first time"
        image="https://www.leisurepro.com/blog/wp-content/uploads/2018/09/shutterstock_117660574-1366x800@2x.jpg"
      />

    </div>
  )
}

export default SearchPage

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
        subs="1k"
        noOfVideos={32}
        description="Just another coder trying to make it to Apple or Google either or."
      />

      <hr/>

      <VideoRow 
        views="150k"
        subs="1k"
        description="I will teach you how to play TIC TAC TOE!"
        timestamp="3 days ago"
        channel="estelo2jz"
        title="TIK TAK TOE tutorial"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tic_tac_toe.svg/1200px-Tic_tac_toe.svg.png"
      />

    </div>
  )
}

export default SearchPage

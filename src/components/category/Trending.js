import React, { useState, useEffect } from 'react';
import VideoCard from '../VideoCard';
import './categoryStyles/Trending.scss';
import db from '../../firebase';

function Trending() {
  const [videos, setVideos] = useState([]);
  // lifecycle method, componentDidUpdate is every single lifestyles method has been replace by useEffect method.
  useEffect(() => {
    // this is going to the collection from the Firestore that we created in the database,
    // and it take a live snapshot of what the collection look like.
    // and set the videos in our state to the following.
    db.collection('trending').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map((doc) => doc.data()))
    ))
    // if you dont include any dependencies in the array[],
    // this code will fire once when the component load and whenever videos changes
  }, [])
  return (
    <div className="trending__container">
      <div className="trending__category-container">
        <div className="trending__category">
          <img src="https://youtube.com/img/trending/chips/music_80x80.png" alt="trending-logo" />
          <p>Music</p>
        </div>
        <div className="trending__category">
          <img src="https://youtube.com/img/trending/chips/gaming_80x80.png" alt="trending-logo" />
          <p>Gaming</p>
        </div>
        <div className="trending__category">
          <img src="https://youtube.com/img/trending/chips/news_80x80.png" alt="trending-logo" />
          <p>News</p>
        </div>
        <div className="trending__category">
          <img src="https://youtube.com/img/trending/chips/movies_80x80.png" alt="trending-logo" />
          <p>Movies</p>
        </div>
        <div className="trending__category">
          <img src="https://youtube.com/img/trending/chips/fashion_80x80.png" alt="trending-logo" />
          <p>Fashion & Beauty</p>
        </div>
      </div>
      <div className="trending__videos">
        {videos.map(({id, channel, channelImage, image, timestamp, title, views}) => (
          <VideoCard
            key={id}
            channel={channel}
            channelImage={channelImage}
            image={image}
            timestamp={timestamp + ' ' + "days ago"}
            title={title}
            views={views + "K" + ' ' + "views"}
          />
        ))}
      </div>
    </div>
  )
}

export default Trending

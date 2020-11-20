import React, { useState, useEffect } from 'react';
import VideoCard from '../VideoCard';
import db from '../firebase';

function Trending() {
  const [videos, setVideos] = useState([]);
  // lifecycle method, componentDidUpdate is every single lifestyles method has been replace by useEffect method.
  useEffect(() => {
    // this is going to the collection from the Firestore that we created in the database,
    // and it take a live snapshot of what the collection look like.
    // and set the videos in our state to the following.
    db.collection('videos').onSnapshot(snapshot => (
      setVideos(snapshot.docs.map((doc) => doc.data()))
    ))
    // if you dont include any dependencies in the array[],
    // this code will fire once when the component load and whenever videos changes
  }, [])
  return (
    <div>
        {videos.map(({id, channel, channelImage, image, timestamp, title, views}) => (
          <VideoCard 
            channel={channel}
            channelImage={channelImage}
            image={image}
            timestamp={timestamp + ' ' + "days ago"} 
            title={title}
            views={views + "K" + ' ' + "views"}
          />
        ))}
    </div>
  )
}

export default Trending

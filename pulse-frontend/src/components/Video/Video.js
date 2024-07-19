import React, { useRef, useState } from 'react'
import '../Video/Video.css'
import VideoFooter from '../VideoFooter/VideoFooter';
import VideoSidebar from '../VideoSidebar/VideoSidebar';

const Video = ({url, channel, description, song, likes, shares, messages}) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if(playing){
      videoRef.current.pause();
      setPlaying(false);
    }else{
      videoRef.current.play();
      setPlaying(true);
    }
  }


  return (
    <div className='video'>
      <video src={url}
      className='video__player'
      ref={videoRef}
      onClick={handleVideoPress}
      loop></video>
      <VideoSidebar likes={likes} shares={shares} messages={messages}/>
      <VideoFooter channel={channel} description={description} song={song}/>

    </div>
  )
}

export default Video
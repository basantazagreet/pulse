import React from 'react'
import "./VideoFooter.css";
import MusicNoteIcon from '@mui/icons-material/MusicNote';


const VideoFooter = ({channel, description, song}) => {
  return (
    <div className="videoFooter">
        <div className="videoFooter__text">
            <h3>@{channel}</h3>
            <p>{description}</p>
            <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__icon" />
                <p className='ticking-text'>{song}</p>
            </div>
        </div>
        <img src={process.env.PUBLIC_URL + '/record.png'} className='videoFooter__record' alt="Record" />
    </div>
  )
}

export default VideoFooter
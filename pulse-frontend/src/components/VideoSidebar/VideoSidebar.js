import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

const VideoSidebar = ({likes, shares, messages}) => {

    const [liked, setLiked] = useState(false);

    return (

        <div className='video-sidebar'>

            <div className="video-sidebar__button">
                {liked ? <FavoriteIcon className='side-icon red-icon' fontSize='large'
                    onClick={e => setLiked(false)}
                /> : <FavoriteBorderIcon className='side-icon red' fontSize='large'
                    onClick={e => setLiked(true)}
                />}
                <p>{liked ? parseInt(likes) + 1 : likes}</p>
            </div>

            <div className="video-sidebar__button">
                <MessageIcon fontSize='large' className='side-icon' />
                <p>{messages}</p>
            </div>
            <div className="video-sidebar__button">
                <ShareIcon fontSize='large' className='side-icon' />
                <p>{shares}</p>
            </div>

        </div>
    )
}

export default VideoSidebar
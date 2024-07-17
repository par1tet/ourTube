import React from 'react';
import { Link } from 'react-router-dom'

function VideoShower({videos}) {
    console.log(videos)

    return ( <div className='search-page__videos'>
        {videos.map((video,index) =>
            <div key={index}>
                <Link to={video.url}>{video.url}</Link>
            </div>)}
    </div> );
}

export default VideoShower;
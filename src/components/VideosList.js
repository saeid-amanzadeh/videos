import React from 'react';
import  VideoItem from './VideoItem';

const VideosList = ({ videos }) => {
    const renderedVideos = videos.map( (video) => {
                return <VideoItem key={video.id.videoId} video={video}/>;
            });
    return <div>{renderedVideos}</div>;
}

export default VideosList;
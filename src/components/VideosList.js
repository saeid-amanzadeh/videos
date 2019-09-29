import React from 'react';
import  VideoItem from './VideoItem';

const VideosList = ({ videos, onVideoSelect }) => {
    const renderedVideos = videos.map( (video) => {
                return <VideoItem onVideoSelect={ onVideoSelect } key={video.id.videoId} video={video}/>;
            });
    return <div>{renderedVideos}</div>;
}

export default VideosList;
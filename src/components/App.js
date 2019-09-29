import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideosList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state = {
        videos: [],
        selectedVideo: null
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video} );
        console.log("From the App", video);
    };

    onTermSubmit = async term => {
       const response = await youtube.get('/search', {
           params: {
               q: term
           }
       });

       this.setState({videos: response.data.items});
    };

    render() {
        return <div className="ui container">
            <SearchBar  onFormSubmit={this.onTermSubmit}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
         </div>
    }
}

export default App;
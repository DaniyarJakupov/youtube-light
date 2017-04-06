import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
//========================
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_detail';
//========================
const  API_KEY = "";
//==========================================================
// Create a new component. It should produce some HTML
// v1. Functional component
// const App = () => {  // const (ES6) === final var; () => === function()
//    return (
//       <div>
//          <SearchBar />
//       </div>  // this is JSX
//    );
// }
//v2. App is a class component
class App extends Component {
   //Initializing
   constructor(props){
      super(props);
      this.state = {
         videos: [],
         selectedVideo: null
      };
      this.videoSearch("react conf");
   }
   //Methods
   videoSearch(term){
      YTSearch({key: API_KEY, term: term}, (videos) => {
         this.setState({
            videos: videos,
            selectedVideo: videos[0]
         });
      });
   }

   render(){
      // creates new function from this.videoSearch() function,
      // that can only be called once in 400ms
      const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 400);
      return (
         <div>
            <SearchBar onSearchTermChange = {videoSearch} />
            <VideoDetails video={this.state.selectedVideo} />
            <VideoList
               onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
               videos={this.state.videos}
            />
         </div>
      )
   }
}

//==========================================================
// Take this component's generated HTML and put it on the page (in the DOM)
// <App /> --> is instance of class App
ReactDOM.render(<App />, document.querySelector(".container"));

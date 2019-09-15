import React from "react";
import "../style/App.css";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import configureStore from "../modules/store";
import { Provider as ReduxProvider } from "react-redux";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      videos: []
    };
  }

  handleSearchTextChange = event => {
    this.setState({
      searchText: event.target.value
    });
  };

  searchBtnClick = async event => {
    const KEY = "AIzaSyAAsIdRCAtDRWpdIg_Ho0EpSNAR0o4CqlA";
    const response = await youtube.get("/search", {
      params: {
        q: this.state.searchText,
        part: "snippet",
        maxResults: 10,
        key: KEY
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <header className="App-header">
            <input
              id="video-name"
              placeholder="Type video name... "
              onChange={this.handleSearchTextChange}
            />
            <button onClick={this.searchBtnClick}>Search</button>
            {this.state.videos.length > 0 && (
              <VideoList videos={this.state.videos} />
            )}
          </header>
        </div>
      </ReduxProvider>
    );
  }
}


export default Home;

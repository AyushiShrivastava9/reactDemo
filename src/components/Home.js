import React from "react";
import "../style/App.css";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoItem from "./VideoItem";
import WishlistVideo from "./WishlistVideo";
import { connect } from "react-redux";
import configureStore from "../modules/store";
import { Provider as ReduxProvider } from "react-redux";
//import { BrowserRouter as Router, Route,Switch, Redirect} from 'react-router-dom'

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

  sortList = (event) =>
  {
    if(this.state.videos.length > 0)
    {
      var newArray = [...this.state.videos];
      newArray.sort((a,b) => {
        if (a.snippet.title === b.snippet.title)
        {
          return 0;
        }
        else {
          return a.snippet.title > b.snippet.title ? 1: -1;
        }
      })
      this.setState({
        videos: newArray
      })
    }
  }

  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <header className="App-header">
            {/* <Switch>
              <Route path='/wishlistvideo' component={WishlistVideo}/>
            </Switch> */}
            <input
              id="video-name"
              placeholder="Type video name... "
              onChange={this.handleSearchTextChange}
            />
            <span><button onClick={this.searchBtnClick}>Search</button>
            <button onClick={this.sortList}>Sort</button></span>
            {this.state.videos.length > 0 && (
              <VideoList videos={this.state.videos} />
            )}
          </header>
        </div>
      </ReduxProvider>
    );
  }
}

const mapStateToProps = state => ({
  wishListvideos: state.videos
});
//export default withRouter(Home)
export default Home;

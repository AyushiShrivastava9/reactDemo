import React from "react";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";
import VideoItem from "./VideoItem";
import "../style/App.css";

class VideoList extends React.Component {
  state = {
    selectedVideo: []
  };

  addToWishlist = event => {
    this.props.addVideo(event.id.videoId);
    this.props.wishListvideos.map(videoId => {
      this.setState = {
        selectedVideo : this.state.selectedVideo.push(videoId.description)
      }
    })
  };
  render() {
    return (
      <div>
        <div>
          {this.state.selectedVideo.length > 0 && 
          <div>My WishList Videos
          <VideoItem videos={[...new Set(this.state.selectedVideo)]} />
          <hr /></div>
          }
          <div>Search Results</div>
          {this.props.videos.map(video => (
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                allowFullScreen
                title="Video player"
              />
              <div>
              <button onClick={this.addToWishlist.bind(this, video)}>
                Wishlist
              </button>
              <hr />
              </div>
              <div className="ui segment">
                <h4 className="ui-header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  wishListvideos: state.videos
});
const mapDispatchToProps = dispatch => ({
  addVideo: video => dispatch(ACTIONS.addVideo(video))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoList);

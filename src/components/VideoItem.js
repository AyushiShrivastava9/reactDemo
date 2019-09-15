import React from "react";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

class VideoItem extends React.Component {
  state = {
    selectedVideo: null
  };

  addToWishlist = event => {
      this.props.addVideo(event.id.videoId);
  };

  render() {
    return (
      <div>
        <div>
          {this.props.videos.map(video => (
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                allowFullScreen
                title="Video player"
              />
              <button onClick={this.addToWishlist.bind(this, video)}>
                Wishlist
              </button>
              <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

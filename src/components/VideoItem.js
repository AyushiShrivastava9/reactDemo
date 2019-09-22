import React from "react";

class VideoItem extends React.Component {

  render() {
    return (
      <div>
        <div>
          {this.props.videos.map(videoId => (
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
                title="Video player"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default VideoItem;

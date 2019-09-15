import React from "react";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home'

class WishlistVideo extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.wishListvideos.map(video => (
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                allowFullScreen
                title="Video player"
              />
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
const mapStateToProps = state => ({
    wishListvideos: state.videos
  });

  export default connect(
    mapStateToProps
  )(WishlistVideo);

  const AppNavigator = createStackNavigator(
    {
      Home: Home,
      Details: WishlistVideo,
    },
    {
      initialRouteName: 'Home',
    }
  );

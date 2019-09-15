
import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  videos: []
};

const videoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.ADD_VIDEO: {
      console.log(action);

      let video = action.payload;
      let newVideo = { id: state.videos.length + 1, description: video };
      let newState = _.cloneDeep(state);
      newState.videos.push(newVideo);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.videos.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default videoReducer;
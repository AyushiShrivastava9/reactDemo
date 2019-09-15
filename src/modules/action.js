// types of action
const Types = {
    ADD_VIDEO: "ADD_VIDEO",
    DELETE_ITEM: "DELETE_ITEM"
  };
  // actions
  const addVideo = task => ({
    type: Types.ADD_VIDEO,
    payload: task
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });
  
  export default {
    addVideo,
    deleteItem,
    Types
  };
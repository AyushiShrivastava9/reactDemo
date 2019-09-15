import React from "react";
import "../style/App.css";

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        };
      }

      handleSearchTextChange = event => {
        this.setState({
          searchText: event.target.value
        });
      }

      handleSubmit = event =>{
          event.preventDefault();
          this.props.handleFormSubmit(this.state.searchText);
      }

      render() {
          return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="video-search">Video Search</label>
                    <input onChange={this.handleSearchTextChange} name='video-search'
                    type="text" value={this.state.searchText}/>
                </form>
                </div>
          );
      }
}

export default SearchBar;
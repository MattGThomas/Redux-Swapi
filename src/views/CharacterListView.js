import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { loadData } from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.loadData()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <p>Loading, thew data is</p>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    errorMessage: state.charsReducer.errorMessage,
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters
  }
}
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    loadData
  }
)(CharacterListView);

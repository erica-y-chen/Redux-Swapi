import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import {getChar} from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //action 
    const fetchChar = e => {
      e.preventDefault()
      this.props.getChar();
    }
  }
  render() {
    if (this.props.fetching) {
      <div>loading</div>
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  characters: state.characters,
  error: state.error,
  isFetching: state.isFetching
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getChar
  }
)(CharacterListView);

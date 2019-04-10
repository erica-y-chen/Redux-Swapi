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
      this.props.getChar();
  
  }
  render() {
    console.log(this.props)
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
  characters: state.charsReducer.characters,
  error: state.charsReducer.error,
  isFetching: state.charsReducer.isFetching
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getChar
  }
)(CharacterListView);

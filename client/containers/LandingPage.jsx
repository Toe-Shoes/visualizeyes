import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar.jsx';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  setUrl: (url) => {
    dispatch(actions.setUrl(url))
  }
});

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <h1> VisualEyes </h1>
        <h3> Database GUI </h3>
        <SearchBar
          setUrl = {this.props.setUrl}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

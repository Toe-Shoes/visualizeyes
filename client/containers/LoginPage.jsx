import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => {
  console.log(store);
  return ({
    connection: store.connection,
    url: store.url
  });
};

const mapDispatchToProps = dispatch => ({
  setUrl: (url) => {
    dispatch(actions.setUrl(url))
  },
  changeConnection: () => {
    dispatch(actions.changeConnection())
  }
});

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div>
        <h1> Login to Github </h1>
        <a href="http://localhost:3000/login/github"></a><button> GITHUB </button></a>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

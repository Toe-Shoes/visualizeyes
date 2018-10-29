import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainContainer from './containers/MainContainer.jsx';
import LandingPage from './containers/LandingPage.jsx';



const mapStateToProps = store => ({
  connection: store.connection
});

const mapDispatchToProps = dispatch => ({

});



class App extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    console.log(this.props.connection);
    return (
      <div id="container">
        <div>
          {this.props.connection === true ? (
            <MainContainer />
          ) : (
            <LandingPage />
          )}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

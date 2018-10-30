import React, { Component } from 'react';
// import FileContainer from './containers/FileContainer.jsx';
// import DatabaseContainer from './containers/DatabaseContainer.jsx';
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

export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainContainer from './containers/MainContainer.jsx';
import LandingPage from './containers/LandingPage.jsx';


// console.log(localStorage.getItem('user'));
// const test = LocalStorage.getItem('user');
// console.log(test);


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
     
        <div id="container" style={styles}>
          
          {/* {this.props.connection === true ? (
            <MainContainer />
          ) : (
            <LandingPage />
          )} */}
          <LandingPage></LandingPage>
          <MainContainer></MainContainer>
          
        </div>
    );
  }
}

const styles = {
  display : 'flex',
  flexDirection : 'column',
  height: '100%',
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

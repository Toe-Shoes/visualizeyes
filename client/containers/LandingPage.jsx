import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar.jsx';
import PrevSearchButton from '../components/PrevSearchButton.jsx';
import * as actions from '../actions/actions';
import Cookies from 'js-cookie';


const mapStateToProps = store => {
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
  },
  setDBData : (data) => {
    dispatch(actions.setDBData(data));
  }
});

class LandingPage extends Component {

  constructor(props) {
    super(props);
    this.timeouts = [];
    this.state = {
      name: Cookies.get('username'),
      urlStorage: []
    };
    this.getFavoriteConnections();
  }
  

  fetchOnClick = () => {
    console.log(this.state.urlStorage);
    for (let i = 0; i < this.timeouts.length; i++) {
      clearTimeout(this.timeouts[i]);
    }
    this.timeouts = [];
    
    fetch(`http://localhost:3000/getdb?url=${this.props.url}`)
    .then((res) => {
      return res.json()
    })
    .then ((res) => {
      if(res.ConnectionError) {
        console.log('connectionError');
      } else {
        console.log('---------Response to client---------\n',res);
        // this.timeouts.push(setTimeout(() => {
        //   console.log("Timeout!");
        //   this.fetchOnClick()
        // }, 2500));
        this.props.changeConnection();
        this.props.setDBData(res);
        // if (!this.state.urlStorage.includes(this.props.url)){
        //   let urlStorageCopy = JSON.parse(JSON.stringify(this.state.urlStorage));
        //   urlStorageCopy.push(this.props.url);
        //   this.setState({urlStorage: urlStorageCopy});
        // }
        this.postFavoriteConnection();
        document.querySelector('input').value = "";
      }
    })

    .catch(err => console.log(err));
    // console.log(this.props, '------url-----')
  }

  postFavoriteConnection() {
    let postBody = {
      url : this.props.url,
      userName : Cookies.get('username'),
    }
    fetch ('http://localhost:3000/sessions', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(postBody),
    })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      let urls = [];
      res.urls.forEach(url => {
        urls.push(url);
      });
      this.setState({urlStorage: urls});
    });
  }

  getFavoriteConnections() {
    fetch (`http://localhost:3000/sessions?userName=${Cookies.get('username')}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      let urls = [];
      res.urls.forEach(url => {
        urls.push(url);
      });
      this.setState({urlStorage: urls});
    });
  }

  render() {
    let prevList = [];
    if (this.state.urlStorage.length > 0) {
      prevList.push(<h3>Previous Databases:</h3>)
      for (let i = 0; i < this.state.urlStorage.length; i++) {
        prevList.push(<PrevSearchButton id={i}
          setDBData = {this.props.setDBData}
          url = {this.state.urlStorage[i]}
          fetchOnClick = {this.fetchOnClick.bind(this)}
          />)
      }
    }
    return(
      <div style={{width:'100%'}}>
        <h1> VisualEyes </h1>
        <h3> Welcome, {this.state.name} to your MongoDB Viewer Dashboard </h3>
        <div>
        {prevList}
        </div>
        mongodb://toeshoe:123abc@ds145093.mlab.com:45093/toeshoe
        <SearchBar
          setUrl = {this.props.setUrl}
          fetchOnClick = {this.fetchOnClick.bind(this)}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

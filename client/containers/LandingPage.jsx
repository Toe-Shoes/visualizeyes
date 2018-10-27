import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar.jsx';
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

  fetchOnClick() {
    fetch(`http://localhost:8080/app?url=${this.props.url}`)
    .then((res) => {
      return res.json()
    })
    .then ((res) => {
       console.log('---------Response to client---------',res);
       this.props.changeConnection();
    })

    .catch(err => console.log(err));
    // console.log(this.props, '------url-----')
  }

  render() {
    return(
      <div>
        <h1> VisualEyes </h1>
        <h3> Database GUI </h3>
        <SearchBar
          setUrl = {this.props.setUrl}
          fetchOnClick = {this.fetchOnClick.bind(this)}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

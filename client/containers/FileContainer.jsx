import React, { Component } from 'react';
import { connect } from 'react-redux';
import Collection from '../components/Collection.jsx';
import * as actions from '../actions/actions';

const mapStateToProps = store => {
  return ({
    data : store.data
  })
}

const mapDispatchToProps = dispatch => ({
  setCurrentCollection : (collectionName) => {
    dispatch(actions.setCurrentCollection(collectionName));
  }
});

class FileContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    let collections = this.props.data.map((element, i) => {
      return (
        <Collection collectionName = {element.collectionName} key={i} setCurrentCollection={this.props.setCurrentCollection}></Collection>
      )
    });

    return (
      <div id="file-container" style={styles}>
        <h3>Collections</h3>
        {collections}
      </div>
    )
  }

  
}
const styles = {
  width: '20%',
}

export default connect(mapStateToProps, mapDispatchToProps)(FileContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentObject from './DocumentObject.jsx';

const mapStateToProps = store => ({
  currentCollection : store.currentCollection,
  data : store.data,
});

const mapDispatchToProps = dispatch => ({

});

class DatabaseContainer extends Component {
  constructor(props){
    super(props);
  }

  render(){
    //identify current collection
    let currentCollectionObj = this.props.data.filter((collectionObj) => {
      return collectionObj.collectionName === this.props.currentCollection;
    });
    
    let documents = [];
    if(currentCollectionObj.length >0){
      documents = currentCollectionObj[0].response.map((document, i) => {
        let documentDeepClone = JSON.parse(JSON.stringify(document));
        return (
          <DocumentObject data={documentDeepClone} key={i} indentation={0} completeData={documentDeepClone} > </DocumentObject>
        )
      });
    }
    console.log(documents);

    return(
      <div id="db-container" style={styles}>
        <h3>Documents</h3>
        {documents}
      </div>
    )
  }
}

const styles = {
  width: '80%',
  height: '100%',
}

export default connect(mapStateToProps, mapDispatchToProps)(DatabaseContainer);
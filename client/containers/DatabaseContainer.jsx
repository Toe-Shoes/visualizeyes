import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

class DatabaseContainer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div id="db-container">
        <h1>This is the db container</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DatabaseContainer);
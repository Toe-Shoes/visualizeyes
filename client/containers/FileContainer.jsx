import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({

});

class FileContainer extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div id="file-container">
        <h1>This is our file container</h1>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FileContainer);

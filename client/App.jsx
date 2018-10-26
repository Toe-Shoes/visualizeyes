import React, { Component } from 'react';
import FileContainer from './containers/FileContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="container">
        <FileContainer />
      </div>
    )
  }
}

export default App;
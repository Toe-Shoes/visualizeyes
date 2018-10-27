import React, { Component } from 'react';
import FileContainer from './containers/FileContainer.jsx';
import DatabaseContainer from './containers/DatabaseContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="container">
        <FileContainer />
        <DatabaseContainer />
      </div>
    )
  }
}

export default App;
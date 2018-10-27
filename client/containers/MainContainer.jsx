import React, { Component } from 'react';
import FileContainer from './FileContainer.jsx';
import DatabaseContainer from './DatabaseContainer.jsx';

const MainContainer = (props) => {
  return(
    <div>
    <FileContainer />
    <DatabaseContainer />
    </div>
  );
}

export default MainContainer;

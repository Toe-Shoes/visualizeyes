import React, { Component } from 'react';
import FileContainer from './FileContainer.jsx';
import DatabaseContainer from './DatabaseContainer.jsx';

const MainContainer = (props) => {
  return(
    <div style={styles}>
    <FileContainer />
    <DatabaseContainer />
    </div>
  );
}

const styles={
  display : 'flex',
  width: '100%',
}


export default MainContainer;

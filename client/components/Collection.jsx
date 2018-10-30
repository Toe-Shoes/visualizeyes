import React, { Component } from 'react';
import { connect } from 'react-redux';

const Collection = (props) => {
  return (
    <div style={styles} onClick={() => props.setCurrentCollection(props.collectionName)}>
      {props.collectionName}
    </div>
  );
}
const styles = {
  cursor: 'pointer',
}

export default Collection;

import React, { Component } from 'react';
import { connect } from 'react-redux';

const DocumentFieldRow = (props) => {
  return (
    <div style={styles}>
      <div style={{width : '33%'}}>
        {props.Key}
      </div>
      <div style={{width : '33%'}}>
        {props.value}
      </div>
      <div style={{width : '33%'}}>
        {props.type}
      </div>
    </div>
  );
}
const styles = { 
  display: 'flex',
  border : '1px solid black',
  marginLeft : '28px',
  textAlign: 'center'
}

export default DocumentFieldRow;

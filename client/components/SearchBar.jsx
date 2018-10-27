import React, { Component } from 'react';
import { connect } from 'react-redux';

const SearchBar = (props) => {
  return (
    <div>
    <input
      placeholder="Uri search"
      onChange={(e) => {
        props.setUrl(e.target.value);
      }}
    />
    <button onClick={() => {props.fetchOnClick()}}> Connect </button>
    </div>
  );
}

export default SearchBar;

import React, { Component } from 'react';
import { connect } from 'react-redux';

const SearchBar = (props) => {
  return (
    <form>
    <input
      placeholder="Uri search"
      onChange={(e) => {
        props.setUrl(e.target.value);
      }}
    />
    <button> Connect </button>
    </form>
  );
}

export default SearchBar;

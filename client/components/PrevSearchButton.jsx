import React, { Component } from 'react';

const buttonFetchOnClick = (url, setDBData) => {
  fetch(`http://localhost:3000/getdb?url=${url}`)
  .then((res) => {
    return res.json()
  })
  .then ((res) => {
    if(res.ConnectionError) {
      console.log('connectionError');
    } else {
      console.log('---------Response to client---------\n',res);
      setDBData(res);
    }
  })
  .catch(err => console.log(err));
}

const PrevSearchButton = (props) => {
  let url = props.url;

  let regex = /[^/]+$/g;
  let buttonTitle = url.match(regex);
  return (
    <div>
    <button onClick={() => buttonFetchOnClick(url, props.setDBData)}> {buttonTitle} </button>
    </div>
  );
}

export default PrevSearchButton;

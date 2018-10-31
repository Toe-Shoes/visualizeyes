import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  changeMade : store.changeMade,
});

const mapDispatchToProps = dispatch => ({
  setChangeMadeFalse : () => {
    dispatch(actions.setChangeMadeFalse());
  },
});

class ChangeMade extends Component {
  constructor(props){
    super(props);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.props.setChangeMadeFalse();
    }, 3000);
  }
  
  render(){
    let opacity = this.props.changeMade ? '1' : '0';

    const styles = {
      position : 'absolute',
      top : '20px',
      right : '20px',
      borderRadius : '3px',
      background: '#007bff',
      color : 'white',
      padding : '10px',
      opacity : opacity,
    }

    return(
      <div style={styles}>
        <h3>Updates were made</h3>
      </div>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ChangeMade);
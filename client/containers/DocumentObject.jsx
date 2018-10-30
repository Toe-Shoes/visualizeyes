import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentFieldRow from '../components/DocumentFieldRow.jsx';

const mapStateToProps = store => ({
});

const mapDispatchToProps = dispatch => ({

});

class DocumentObject extends Component {
  constructor(props){
    super(props);
    this.state ={
      display : false,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay = function () {
    this.setState({
      display : !this.state.display
    });
  }

  render(){
    let documentChildren = [];
    for(let key in this.props.data){
      if(key !== '_id'){
        if(typeof this.props.data[key] === 'object') {
          
          documentChildren.push(<DocumentObject key={key} Key={key} data={this.props.data[key]} indendation={1}></DocumentObject>)
        } else {
          documentChildren.push(<DocumentFieldRow Key={key} value={this.props.data[key]} type={typeof this.props.data[key]} key={key}></DocumentFieldRow>)
        }
      }
    }

    let styleDisplayChildren = this.state.display ? 'block' : 'none';

    let objectTitle = this.props.data['_id'] ? <div>Object _id: {this.props.data['_id']}</div> : <div>{this.props.Key}</div>

    let indendation = this.props.indendation*20;
    let styles = {
      paddingLeft: indendation+'px',
    }

    return(
      <div style={styles}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-arrow-right-b-512.png" style={{width : '4%', height: '4%', cursor: 'pointer'}} onClick={this.toggleDisplay}></img>
          <div>
            {objectTitle}
          </div>
        </div>
        
        <div style={{display : styleDisplayChildren}}>
          {documentChildren}
        </div>
      </div>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(DocumentObject);
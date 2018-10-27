import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = store => ({
  url: store.database.url
})


class UrlForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <label>
          URL:
          <input type="text" name="url" />
          </label>
          <button type="submit"> Submit </button>
          <button onClick={props.handleToggle}> Cancel </button>
        </form>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UrlForm);


import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


class Invitation extends React.Component {
  render() {
    return (
      <div className="invitation">
        <h1>You've been invited!</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}


export default Invitation;

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Reference extends Component {
  render() {
    return (
      <div className="section refference">
        {this.props.children}
      </div>
    );
  }
}

Reference.propTypes = {
  children: PropTypes.element
};

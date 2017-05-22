import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Vision extends Component {
  render() {
    return (
      <div className="section vision">
        {this.props.children}
      </div>
    );
  }
}

Vision.propTypes = {
  children: PropTypes.element
};

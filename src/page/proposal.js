import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Proposal extends Component {
  render() {
    return (
      <div className="section proposal">
        {this.props.children}
      </div>
    );
  }
}

Proposal.propTypes = {
  children: PropTypes.element
};

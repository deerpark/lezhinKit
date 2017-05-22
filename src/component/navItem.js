import {Link} from 'react-router';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

export class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depth: this.props.depth,
      index: this.props.index
    };
    this.handleControlNav = this.handleControlNav.bind(this);
    this.handleControlNavBack = this.handleControlNavBack.bind(this);
    this.handleControlNavMain = this.handleControlNavMain.bind(this);
    this.updateKey = this.updateKey.bind(this);
    this.controlCommon = this.controlCommon.bind(this);
    this.windwResize = this.windwResize.bind(this);
  }
  componentDidMount() {
    this.windwResize();
  }

  updateKey(key, val) {
    this.setState({
      key: val
    });
  }

  controlCommon(x) {
    anime({
      targets: '#menu',
      translateX: x,
      duration: 500,
      elasticity: 50
    });
  }

  windwResize() {
    const _this = this;
    window.addEventListener('resize', () => {
      _this.controlCommon(0);
    });
  }

  handleControlNav() {
    const gap = window.matchMedia('(max-width: 767px)').matches ? 80 : 200;
    this.updateKey('depth', this.props.depth);
    this.updateKey('index', this.props.index);
    const x = -(gap * this.state.depth);
    this.controlCommon(x);
    document.querySelectorAll('#menu a').forEach(item => {
      item.className = '';
    });
    if (this.state.depth > 0) {
      document.querySelector(`#menu ul:nth-child(${(this.state.depth + 1)}) li:nth-child(${(this.state.index + 1)}) a`).className = 'active';
    }
  }

  handleControlNavMain() {
    const gap = window.matchMedia('(max-width: 767px)').matches ? 80 : 200;
    this.updateKey('depth', this.props.depth);
    const x = -(gap * this.state.depth);
    this.controlCommon(x);
  }

  handleControlNavBack() {
    this.controlCommon(0);
  }

  render() {
    if (this.props.back === true) {
      return (
        <li><Link onClick={this.handleControlNavBack} to={this.props.url}>{this.props.name}</Link></li>
      );
    } else if (this.props.main === true) {
      return (
        <li><Link onClick={this.handleControlNavMain} to={this.props.url}>{this.props.name}</Link></li>
      );
    }
    return (
      <li><Link onClick={this.handleControlNav} to={this.props.url}>{this.props.name}</Link></li>
    );
  }
}

NavItem.defaultProps = {
  depth: 0
};

NavItem.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  depth: PropTypes.number,
  index: PropTypes.number,
  back: PropTypes.bool,
  main: PropTypes.bool
};

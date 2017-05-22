import {Link} from 'react-router';
import React, {Component} from 'react';
import anime from 'animejs';

export class Intro extends Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
    this.handleLoad();
  }
  handleLoad() {
    const _root = document.getElementById('root');
    _root.className = '__intro__';
    const x = anime.timeline({
      loop: -1
    });
    x.add({
      targets: '.x',
      rotate: '-=360deg',
      duration: 500,
      delay: 3000,
      elasticity: 200
    });
  }
  render() {
    const iconTextLezhin = '레진코믹스';
    const iconTextK = '김용만';
    const introButtonText = '콜라보레이션';

    return (
      <div className="intro container">
        <div id="collabration" className="collabration">
          <figure className="fig fig-lezhin">
            <svg viewBox="0,0,134,134">
              <use xlinkHref="../images/icon.svg#icon-lezhincomics"/>
            </svg>
            <figcaption className="fag-lable">{iconTextLezhin}</figcaption>
          </figure>
          <span className="x">
            <span className="x-line x-1"/>
            <span className="x-line x-2"/>
          </span>
          <figure className="fig fig-K">
            <svg viewBox="0,0,115,134">
              <use xlinkHref="../images/icon.svg#icon-yongman"/>
            </svg>
            <figcaption className="fag-lable">{iconTextK}</figcaption>
          </figure>
        </div>
        <Link to="/colors"><span>{introButtonText}</span></Link>
      </div>
    );
  }
}

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavItem} from '../component/navItem';
import anime from 'animejs';

/**
 * 메인화면 클래스
 */
export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /**
       * 메인메뉴 항목 배열
       * @type {Array}
       */
      navData: [
        {url: '/', name: '홈', back: false},
        {url: '', name: '개선사항 제안', back: false},
        {url: '', name: '레퍼런스 제안', back: false},
        {url: '', name: '입사 후 포부', back: false}
      ],
      subData: [[], [
        {url: '', name: '뒤로', back: true},
        {url: 'colors', name: '컬러', back: false},
        {url: 'layout', name: '레이아웃', back: false},
        {url: 'elements', name: '구성요소', back: false},
        {url: 'viewer', name: '뷰어', back: false},
        {url: 'effects', name: '이펙트', back: false}
      ], [
        {url: '', name: '뒤로', back: true},
        {url: 'ui-cards', name: '카드타입', back: false},
        {url: 'ui-gnb', name: '스크롤 후 상단 GNB 변화', back: false},
        {url: 'ui-banners', name: '모션이 있는 배너', back: false},
        {url: 'ui-library', name: '서재 느낌의 UI', back: false}
      ], [
        {url: '', name: '뒤로', back: true},
        {url: 'vision-uikit', name: '컴포넌트 디자인 킷', back: false},
        {url: 'vision-best-ux', name: '최고의 UX', back: false},
        {url: 'vision-dev', name: '개발 역량 증진', back: false}
      ]]
    };
    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
    const gap = window.matchMedia('(max-width: 767px)').matches ? 80 : 200;
    this.handleLoad();
    setTimeout(() => {
      this.state.subData.forEach((item, i) => {
        item.forEach((subitem, z) => {
          if (window.location.pathname === '/' + subitem.url) {
            document.querySelector(`#menu ul:nth-child(${i + 1}) li:nth-child(${z + 1}) a`).className = 'active';
            anime({
              targets: '#menu',
              translateX: -(i * gap),
              duration: 500,
              elasticity: 50
            });
          }
        });
      });
    }, 500);
  }
  handleLoad() {
    const root = document.getElementById('root');
    root.className = '__main__';
  }
  render() {
    return (
      <div className="main container">
        <div className="grid">
          <div className="nv nav">
            <div className="logo">
              <svg viewBox="0,0,48,48">
                <use xlinkHref="../images/icon.svg#icon-lezhincomics"/>
              </svg>
            </div>
            <div id="menu" className="menu">
              <ul className="menu-0">
                {
                  /**
                   * 메인메뉴 파싱
                   * @param  {Object} (item)
                   * @return {Element}        <li>...</li>
                   */
                  this.state.navData.map((item, i) => {
                    return (<NavItem main depth={i} index={i} url={item.url} name={item.name} key={i}/>);
                  })
                }
              </ul>
              <ul className="menu-1">
                {
                  /**
                   * 서브메뉴 파싱
                   * @param  {Object} (item)
                   * @return {Element}        <li>...</li>
                   */
                  this.state.subData[1].map((item, i) => {
                    return (<NavItem depth={1} index={i} back={item.back} url={item.url} name={item.name} key={i}/>);
                  })
                }
              </ul>
              <ul className="menu-2">
                {
                  /**
                   * 서브메뉴 파싱
                   * @param  {Object} (item)
                   * @return {Element}        <li>...</li>
                   */
                  this.state.subData[2].map((item, i) => {
                    return (<NavItem depth={2} index={i} back={item.back} url={item.url} name={item.name} key={i}/>);
                  })
                }
              </ul>
              <ul className="menu-3">
                {
                  /**
                   * 서브메뉴 파싱
                   * @param  {Object} (item)
                   * @return {Element}        <li>...</li>
                   */
                  this.state.subData[3].map((item, i) => {
                    return (<NavItem depth={3} index={i} back={item.back} url={item.url} name={item.name} key={i}/>);
                  })
                }
              </ul>
            </div>
          </div>
          <div className="contents">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.element
};

import React, {Component} from 'react';

export class Proposal1 extends Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
    this.handleLoad();
  }
  handleLoad() {
    document.querySelector('body').scrollTop = 0;
  }
  render() {
    return (
      <div className="content prop_1">
        <h1>개선사항 제안</h1>
        <h2>컬러</h2>
        <h3>아이덴티티</h3>
        <p>레진코믹스만의 컬러 아이덴티티인 레드 컬러계열로 시스템 UI의 컬러 계통을 일관성있게 유지하면 좋을 것 같습니다. 컬러 스왓치 갯수를 최대한 줄일 수록 가독성과 아이덴티티 두마리 토끼를 잡을 수 있습니다.</p>
        <div className="p figset">
          <figure className="wide">
            <a href="./images/screenshot/color_before.png"><img src="./images/screenshot/color_before.png" alt=""/></a>
            <figcaption>기존 레진 서비스 컬러</figcaption>
          </figure>
        </div>
        <div className="hr">
          <hr/>
        </div>
        <h3>사례연구</h3>
        <p>마블이나 트위터 및 트위치등 굵직한 해외 서비스를 보면 아주 명확하게 잘 지켜지고 있습니다. 트위터는 라이트 블루컬러 트위치는 퍼플처럼 단일 또는 두개의의 컬러를 중점적으로 사용하여 컬러만 봐도 어느 서비스인지 대략 감을 잡을 수도 있습니다.</p>
        <div className="p figset">
          <figure>
            <a href="./images/screenshot/color_twitch.png"><img src="./images/screenshot/color_twitch.png" alt=""/></a>
            <figcaption>트위치</figcaption>
          </figure>
          <figure>
            <a href="./images/screenshot/color_twitter.png"><img src="./images/screenshot/color_twitter.png" alt=""/></a>
            <figcaption>트위터</figcaption>
          </figure>
        </div>
        <div className="hr">
          <hr/>
        </div>
        <h3>결론</h3>
        <p>현재의 레진코믹스도 레드 컬러를 아주 훌륭하게 브랜딩 해 왔습니다. 좀 더 브랜드를 사용자의 머릿속에 컬러로 각인 시킬수 있게 컬러 아이덴티티를 강화시킨다면 더욱 더 좋을 것 같습니다.</p>
      </div>
    );
  }
}

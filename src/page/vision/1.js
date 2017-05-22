import React, {Component} from 'react';

export class Vision1 extends Component {
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
      <div className="content visi_1">
        <h1>입사 후 포부</h1>
        <h2>UI library (UI Framework)</h2>
        <p>레진코믹스만의 컴포넌트 위주의 빠른 웹 개발을위한 세련되고 직관적인 강력한 UI library를 만들고 싶습니다.</p>
        <div className="hr">
          <hr/>
        </div>
        <h3>기존 라이브러리</h3>
        <p>Bootstrap, Semantic UI, AtalasKit</p>
        <div className="hr">
          <hr/>
        </div>
        <h3>AtalasKit</h3>
        <p>React 전용 UI library로써 웹 범용 라이트한 UI package 또한 배포하고 있습니다.</p>
        <p><a href="https://atlaskit.atlassian.com" target="_blank" rel="noopener noreferrer">https://atlaskit.atlassian.com</a></p>
      </div>
    );
  }
}

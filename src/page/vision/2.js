import React, {Component} from 'react';

export class Vision2 extends Component {
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
      <div className="content visi_2">
        <h1>입사 후 포부</h1>
        <h2>최고의 UX</h2>
        <p>기획과 디자인과 개발은 하나라는 생각으로 최고의 UX를 만들어 보겠습니다.</p>
        <div className="hr">
          <hr/>
        </div>
      </div>
    );
  }
}

import React, {Component} from 'react';

export class Reference4 extends Component {
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
      <div className="content refe_4">
        <h1>레퍼런스 제안</h1>
        <h2>서재 느낌의 UI</h2>
        <p>사용자가 스크롤을 했을때 알아서 반응하는 상단 GNB</p>
        <div className="hr">
          <hr/>
        </div>
      </div>
    );
  }
}

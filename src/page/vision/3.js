import React, {Component} from 'react';

export class Vision3 extends Component {
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
      <div className="content visi_3">
        <h1>입사 후 포부</h1>
        <h2>개발 역량 증진</h2>
        <p>개발 프로세스/지식을 좀 더 배우고 싶습니다.</p>
        <div className="hr">
          <hr/>
        </div>
      </div>
    );
  }
}

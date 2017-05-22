import React, {Component} from 'react';

export class Reference1 extends Component {
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
      <div className="content refe_1">
        <h1>레퍼런스 제안</h1>
        <h2>카드타입</h2>
        <p>하나의 컴포넌트 하지만 다양한 형태의 카드타입</p>
        <div className="hr">
          <hr/>
        </div>
      </div>
    );
  }
}

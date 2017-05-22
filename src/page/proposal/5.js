import React, {Component} from 'react';

export class Proposal5 extends Component {
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
      <div className="content prop_5">
        <h1>개선사항 제안</h1>
        <h2>이펙트</h2>
        <p>애니메이션/모션 효과를 가미하면 사이트는 역동적이고 사용자에게 즐거운 경험을 제공하게 됩니다. 모던브라우저가 많아지고 사용자의 PC 환경도 좋아지고 네트워크 인프라도 좋아지고 있습니다. 라이트하게 서비스를 제공하는 반면에 고급 사용자에겐 고급적인 기능및 서비스를 제공하는데엔 큰 무리가 없다고 생각이 되어집니다.</p>
        <p>근래엔 SVG 애니메이션, Canvas/WebGL 애니메이션, CSS 애니메이션, 이미지 스프라이트 애니메이션, 동적 DOM 애니메이션등 사용자에게 제공할수 있는 방법이 많아졌습니다. 심지어 GIF 애니메이션을 대체할 PNG 애니메이션 포맷도 나올테니까요.</p>
        <h3>강조</h3>
        <p>강조를 위해서 단지 컬러나 폰트크기 등 정적으로 효과를 주기보다는 동적인 효과가 더 크게 다가옵니다.</p>
        <div className="hr">
          <hr/>
        </div>
        <h3>배너</h3>
        <p>레진코믹스엔 배너가 참 많습니다. 대부분 만화를 프로모션 하기 위함이겠죠. 이런 프로모션 컴포넌트에 애니메이션 효과를 제공하는 템플릿을 만든다면 어떨까요? 좀더 사용자에겐 어필할수 있는 여지가 더 생기는 셈입니다.</p>
      </div>
    );
  }
}

import React, {Component} from 'react';
import EmbeddedGist from '../../component/gist';

export class Proposal3 extends Component {
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
      <div className="content prop_3">
        <h1>개선사항 제안</h1>
        <h2>구성요소</h2>
        <h3>버튼</h3>
        <figure className="wide center">
          <a href="./images/screenshot/elements_buttons.png"><img src="./images/screenshot/elements_buttons.png" alt=""/></a>
          <figcaption>레진 서비스 버튼</figcaption>
        </figure>
        <p>다양한 케이스의 버튼들이 존재하겠지만 어느 정도의 규칙이 필요할 것이고 그 가이드에 따라 규격있는 버튼 셋트를 관리해줘야 할 것입니다. 또한 확장성을 고려하려 스타일 및 마크업을 해야겠지요.</p>
        <p>서비스의 확장에 따라 규칙 없는 border-radius 적용된 버튼, 확장성에 따른 예외를 고려하더라도 의미없는 스타일의 버튼이 한두개 정도가 있는것 같습니다. 중요도에 따른 일관성 있는 버튼 가이드는 좋은 서비스의 밑거름이 될 것입니다.</p>

        <h4>:link :hover :active :focus 그리고 outline</h4>
        <p>사용자와의 인터렉션에 따라 반응하는 버튼이라면 그렇지 않은 서비스보다 품질이 우수해 질 것입니다. 일반적으로 :hover 에만 스타일링을 하고 그 외의 케이스엔 브라우저의 기본적인 스타일링에 의지 하곤합니다.</p>
        <p>네이티브 어플리케이션과 맞먹는 사용자 경험을 웹에서 제공해 주는 효과일지도 모릅니다. 보통 네이티브 어플리케이션은 API 단에서 지원을 해 주거나 폼 요소에 대한 스타일링 지원이 웹보다 좋기 때문입니다. 또한 웹은 네이티브 앱보다는 디자인이 천차만별이고 지원되는 스타일과도 확연히 이질감이 느껴지거나 스타일 지원이 없고 스스로 구현을 해야합니다.</p>
        <p>다음과 같은 버튼 라이브러리를 참고해 보면 확연히 그 이유를 알 수 있습니다.<br/><a href="http://unicorn-ui.com/buttons/builder/" rel="noopener noreferrer" target="_blank">http://unicorn-ui.com/buttons/builder/</a></p>
        <div className="hr">
          <hr/>
        </div>
        <h3>아이콘</h3>
        <p>서비스에서 규칙도 없고 일관되지 않는 아이콘 가이드라면 중구난방의 파편화된 아이콘 리스트를 경험하게 됩니다. 아이콘의 스타일(filled 글리프/outline 글리프/colored 글리프)셋트 를 미리 규격화 해놓는다면 관리가 쉽고 사용자 및 서비스제공자 모두에게 득이 될수 밖에 없습니다. 이러한 방법엔 연구가 많이 되고 있고 아래 소개할 몇가지 방법이 있어 레진코믹스 서비스에 적용을 한다면 좋을 것 같습니다.</p>
        <h4>폰트 아이콘</h4>
        <p>폰트에 글리프 아이콘을 적용시켜 폰트아이콘으로 쓰는 방법이 유행하고 있습니다. glyph이기때문에 어느 해상도라고 해도 대응이 되고 사용도 쉽습니다.</p>
        <h4>SVG sprite 아이콘 셋트</h4>
        <p>SVG의 장점이라면 vector이기 때문에 어떤 해상도에도 대응이 되고 애니메이션 기능, 필터, DOM접근 등 수많은 장점을 버리고 그동안 IE에 묶여 쓸수가 없었습니다. 하지만 대부분의 모던 브라우저가 SVG를 지원하기 때문에 이제는 SVG를 본격적으로 사용해도 된다고 생각합니다.</p>
        <p>Srite 된 SVG 아이콘 셋트라면 디자이너도 개발자도 아이콘 관리 업데이트 모든 방면에서 쉬울 수 있습니다. (긴밀한 협업이 필요하겠죠.)</p>
        <EmbeddedGist gist="deerpark/b1505b12d3ee45a60b71a7bbb41fa954" file="svg.html"/>
        <div className="hr">
          <hr/>
        </div>
        <h3>기타 구성요소</h3>
        <h4>툴팁</h4>
        <p>우리는 일반적으로 &lt;element title /&gt; 속성을 간과하기 쉽습니다. 또한 title 속성이 부족할때엔 tooltip을 구현해야할때가 있습니다. 이런 tooltip 사용자에게 유익한 경험을 제공할 수 있게 해줍니다. 또한 접근성에 더 좋은 효과를 가져올 수 있고 디자인적인 레이아웃도 컴팩트하게 해결해 줄때가 많습니다.</p>
        <h4>뱃지/태그</h4>
        <figure className="wide center">
          <a href="./images/screenshot/elements_badgetag.png"><img src="./images/screenshot/elements_badgetag.png" alt=""/></a>
          <figcaption>레진 서비스 뱃지와 태그</figcaption>
        </figure>
        <p>만화 서비스이기 때문에 뱃지/태그의 종류가 많을걸로 생각됩니다. 현재 레진코믹스의 뱃지/태그를 보면 일관적이거나 통일성이 보이지 않습니다. 사용자에겐 수 많은 만화/소설 리스트가 있을 것이고 그 부분에 대해 일관성/통일성 있는 뱃지/태그는 좋은 사용자 경험을 제공할 수 있을거라 생각됩니다.</p>
        <p>중요도 및 특화된 디자인에 예외를 허용하되 통일성있고 확장성있는 가이드 적용을 제안해 봅니다.</p>
      </div>
    );
  }
}

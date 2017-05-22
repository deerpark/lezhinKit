import React, {Component} from 'react';
import lightenseImages from 'lightense-images';

export class Proposal2 extends Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
    this.handleLoad();
  }
  handleLoad() {
    lightenseImages('img');
    document.querySelector('body').scrollTop = 0;
  }
  render() {
    return (
      <div className="content prop_2">
        <h1>개선사항 제안</h1>
        <h2>레이아웃</h2>
        <h3>검색바</h3>
        <p>검색바의 위치는 상당히 중요합니다. 또한 무엇을 검색하고 싶을때 찾기 쉬운 위치에 가독성도 높아야 사용자가 바로바로 검색하는데에 편의를 제공할 수 있다고 생각합니다.</p>
        <p>네이버의 검색바 마케팅을 다들 알고 계시리라 믿습니다. 사용자는 첫 페이지에 레진코믹스의 모든 컨텐츠를 볼수 가 없습니다. 따라서 검색은 무엇보다도 중요합니다.</p>
        <p>현재 레진코믹스의 검색바 영역은 명도가 연한 그레이 컬러에 영역도 크지 않아 찾기가 약간 어려울 수도 있습니다. 검색의 아이콘인 돋보기의 아이콘을 명도가 높은 컬러로 교체를 하거나 검색영역을 화면 중앙으로 배치하거나 개선이 필요하지 않을까 싶습니다.</p>
        <figure>
          <img src="./images/screenshot/layout_searchbar.png" alt="" data-background="rgba(0, 0, 0, 0)"/>
          <figcaption>레진 서비스 검색바</figcaption>
        </figure>
        <div className="hr">
          <hr/>
        </div>
        <h3>컨텐츠 영역 확보</h3>
        <p>중첩된 상단바 및 배너로 인해 세로가 작은 해상도의 모니터에서는 컨텐츠영역이 좁게 되며 로그인 팝업영역 또한 짤려 스크롤을 해도 영역이 짤리는 문제가 발생하고 있습니다.</p>
        <div className="p figset">
          <figure>
            <img src="./images/screenshot/layout_cutted.png" alt="" data-background="rgba(0, 0, 0, 0)"/>
            <figcaption>세로 586px 해상도에서 짤리는 영역</figcaption>
          </figure>
          <figure>
            <img src="./images/screenshot/layout_height.png" alt="" data-background="rgba(0, 0, 0, 0)"/>
            <figcaption>컨텐츠 영역 확보 어려움</figcaption>
          </figure>
        </div>
        <div className="hr">
          <hr/>
        </div>
        <h3>로그인 영역 버튼</h3>
        <p>현재 레진코믹스 서비스 중에 우측 상단의 로그인 영역 버튼을 클릭하면 로그인 영역 레이어 팝업이 노출되고있습니다. 보통 일컫는 햄버거 버튼은 다중 메뉴를 포함하고 있지만 로그인 영역만 존재하고있는 지금 시점엔 햄버거 아이콘 보다는 로그인 관련 아이콘으로 대체하는게 좋을 것 같습니다.</p>
        <p>저 포함 &quot;로그인을 어디서 해야 하지?&quot; 라고 잠시 헤맨 유저들이 분명 있었을 것입니다.</p>
        <figure>
          <img src="./images/screenshot/layout_login.png" alt="" data-background="rgba(0, 0, 0, 0)"/>
          <figcaption>현재 로그인 영역 버튼</figcaption>
        </figure>
      </div>
    );
  }
}

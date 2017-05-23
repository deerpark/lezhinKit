import React, {Component} from 'react';

export class Proposal4 extends Component {
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
      <div className="content prop_4">
        <h1>개선사항 제안</h1>
        <h2>뷰어</h2>
        <h3>자동 스크롤</h3>
        <p>있는 기능인지는 몰라도 아직까진 제가 기능을 찾을수가 없었습니다. 웹툰을 보면 세로로 긴 형태의 레이아웃인데 스크롤이 힘드 들때가 있습니다. 간격/속도의 설정으로 자동화된 스크롤을 제안해봅니다. 중간에 pause되는 기능도 넣어야겠지요.</p>
        <div className="hr">
          <hr/>
        </div>
        <h3>확대 및 축소</h3>
        <p>사용자가 임의로 브라우저 자체기능으로 확대 및 축소를 할 수 있겠지만 자체 지원을 한다면 어떨까요?</p>
        <div className="hr">
          <hr/>
        </div>
        <h3>메뉴 토글</h3>
        <p>화면을 한번 클릭하면 메뉴가 보여지는 구조인데 햄버거 버튼같이 임시적으로 힌트를 주고 메뉴를 토글하는 기능도 추가 되었으면 좋겠습니다.</p>
        <div className="hr">
          <hr/>
        </div>
        <h3>필터</h3>
        <p>웬툰은 곧 이미지로 출력이 되고 사용자의 입맛에 맞게 필터를 적용 시키 재미나 접근성쪽으로 향상을 시키면 어떨까요?</p>
        <fieldset>
          <legend>
            <svg viewBox="0,0,16,16">
              <use xlinkHref="../images/icon.svg#icon-lezhin"/>
            </svg> CSS3에서 지원하는 다양한 필터
          </legend>
          <code>
            blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia()
          </code>
        </fieldset>
        <div className="hr">
          <hr/>
        </div>
        <h3>테마</h3>
        <p>밤엔 나이트모드 낮엔 화이트모드 등.. 다양한 테마를 준비해서 뷰어에 접목시키면 좋겠습니다.</p>
        <p>한 예로 제가 클리앙 서비스를 자주 이용하는데 직접 테마를 만들어 사용 및 공개도 했었습니다. 현재는 리뉴얼이 되어 업데이트를 해야 사용이 가능합니다만..ㅠ<br/>Stylish 브라우저 확장기능 테마로 아래 링크에서 공개도 했습니다.<br/><a href="https://deerpark.github.io/clienModern/" rel="noopener noreferrer" target="_blank">https://deerpark.github.io/clienModern/</a></p>
        <div className="p figset">
          <figure className="mini">
            <a href="./images/screenshot/viewer_clien_day.png"><img src="./images/screenshot/viewer_clien_day.png" alt=""/></a>
            <figcaption>라이트 : main</figcaption>
          </figure>
          <figure className="mini">
            <a href="./images/screenshot/viewer_clien_day2.png"><img src="./images/screenshot/viewer_clien_day2.png" alt=""/></a>
            <figcaption>라이트 : list</figcaption>
          </figure>
          <figure className="mini">
            <a href="./images/screenshot/viewer_clien_day3.png"><img src="./images/screenshot/viewer_clien_day3.png" alt=""/></a>
            <figcaption>라이트 : view</figcaption>
          </figure>
          <figure className="mini">
            <a href="./images/screenshot/viewer_clien_day4.png"><img src="./images/screenshot/viewer_clien_day4.png" alt=""/></a>
            <figcaption>라이트 : write</figcaption>
          </figure>
          <figure className="mini">
            <a href="./images/screenshot/viewer_clien_night.png"><img src="./images/screenshot/viewer_clien_night.png" alt=""/></a>
            <figcaption>다크 : main</figcaption>
          </figure>
          <figure className="mini">
            <a href="./images/screenshot/viewer_clien_night2.png"><img src="./images/screenshot/viewer_clien_night2.png" alt=""/></a>
            <figcaption>다크 : list</figcaption>
          </figure>
          <figure className="mini">
            <a href="./images/screenshot/viewer_clien_night3.png"><img src="./images/screenshot/viewer_clien_night3.png" alt=""/></a>
            <figcaption>다크 : view</figcaption>
          </figure>
          <figure className="mini">
            <a href="./images/screenshot/viewer_clien_night4.png"><img src="./images/screenshot/viewer_clien_night4.png" alt=""/></a>
            <figcaption>다크 : write</figcaption>
          </figure>
        </div>
      </div>
    );
  }
}

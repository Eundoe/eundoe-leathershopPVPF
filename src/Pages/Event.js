import { Link } from 'react-router-dom'
import './Event.css'


function Event(){
  return(
    <article id="event">
      <h2>Event</h2>
      <div id="eventwrap">
        <div id='event1'>
          <dl>
            <dt>OrderMade행사</dt>
            <dd>세상에 하나뿐인 나만의 제품</dd>
            <dd><Link to='/order'>오더메이드 하러가기</Link></dd>
          </dl>
        </div>
        <div id='event2'>
          <dl>
            <dt>Review이벤트</dt>
            <dd>구매상품 Review를 작성시 소정의 상품을 드립니다.</dd>
            <dd><Link to='/review'>리뷰남기기</Link></dd>
          </dl>
        </div>
        <div id='event3'>
          <dl>
            <dt>Offline매장 이벤트</dt>
            <dd>오프라인 매장 방문구매시 소정의 상품을 드립니다.</dd>
            <dd><Link to='/contact'>오시는길</Link></dd>
          </dl>
        </div>
      </div>
    </article>
  )
}

export default Event
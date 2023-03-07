import {GrNext, GrPrevious} from "react-icons/gr"
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import "swiper/css/pagination";
import "swiper/css"
import './Home.css'
import { Link } from "react-router-dom";
import $ from 'jquery'


$(function(){
if (window.outerWidth > 980){
  Gallery(5)
}
if(window.outerWidth <= 980 && window.outerWidth > 580){
  Gallery(8)
}
if(window.outerWidth <= 580){
  Gallery(9)
}


function Gallery(x){
  let ListWidth = $('ul#trendgall>li').outerWidth(true)
  let cnt = 1

  $('p#next').on('click',function(e){
    cnt += 1
    console.log(cnt)
  if (cnt > (x + 1) ){
    cnt = 1
    $('ul#trendgall:not(:animated)').animate({marginLeft: "+=" + ListWidth * (x) + "px"})
    }
  $('ul#trendgall:not(:animated)').animate({marginLeft : "-=" + ListWidth + "px"})
  })

  
  $('p#prev').on('click',function(e){
    cnt-=1
    if (cnt <= 0){
      cnt = x + 1
      $('ul#trendgall:not(:animated)').animate({marginLeft: "-=" + ListWidth * (x) + "px"})
      
    }
    $('ul#trendgall:not(:animated)').animate({marginLeft: "+=" + ListWidth + "px"})
  })
}

})


function HArticle1(){

  return(
    <article id="slide">
      <h2 className="hide">Slogun</h2>
    <div id="slidewrap">
        <Swiper
        pagination={{clickable:true}} 
        modules={[Pagination]} 
        className='mySwiper' >
          <SwiperSlide><div>
            <h3>Hevitz</h3>
            <p>소중한 사람을 위한<br/> 최고의 선택</p>
            </div></SwiperSlide>
            <SwiperSlide><div>
            <h3>신뢰</h3>
            <p>좋은 재료로 최선을<br/> 다해서 제작</p>
            </div></SwiperSlide>
            <SwiperSlide><div>
            <h3>실력</h3>
            <p>장인의 정신으로<br/> 연마한 기술</p>
            </div></SwiperSlide>
            <SwiperSlide><div>
            <h3>특별함</h3>
            <p>세상에 하나뿐인 <br/>오더메이드 제품제작</p>
            </div></SwiperSlide>           
        </Swiper>
    </div>
    </article>
  )
}

function HArticle2({TrendData}){

  function TrendClick(e){
    $('li#trendcont>figure>figcaption').fadeOut(200)
    $(e).next('figcaption').fadeIn(200)
  }


    function TrendCont(){
      return TrendData.map((item,index) => {
          return(
            <li key={index} id="trendcont">
                <figure>
                  <img src={item.mpic} alt={item.mpic} onClick = {(e) => {TrendClick(e.target)}}/>
                  <figcaption className="ondata">
                    <h3>{item.name}</h3>
                    <p className='hprice'><ins>{item.price}</ins></p>
                    <p className='gonow'><Link to='/store' className="trendgo">goStore</Link></p>
                  </figcaption>
                </figure>
              </li>
          )
        })
      
    }

  return(
    <article id="trend">
        <h2>Now in trend</h2>
        <div id='trendwrap'>
        <p id='next'><GrNext/></p>
        <p id='prev'><GrPrevious/></p>
        <div id="trendshow">
            <ul id="trendgall">
             <TrendCont/>
            </ul>
        </div>
        </div>
    </article>
  )
}

function Harticle3(){
  return(
    <article id="inform">
      <h2>Event</h2>
      <div id="informwrap">      
          <dl>
          <dt>오더메이드 이벤트!</dt>
          <dd>특별한 사람을위한 제품</dd>
          <dd><Link to='./order'>Go Now!</Link></dd>
          </dl>
          <dl>
          <dt>리뷰이벤트</dt>
          <dd>구매하신 제품의 리뷰를 남겨주시면 소정의 상품을<br/> 드립니다. 지금바로<br/> 이벤트에 참여하세요!</dd>
          </dl>   
          <dl>
          <dt>오프라인매장 방문이벤트</dt>
          <dd>방문시 귀여운<br/> 악세사리를 드려요!</dd>
          <dd><Link to='./contact'>오시는길</Link></dd>
          </dl>
                
      </div>

    </article>
  )
}



function Home({TrendData}){
  
  return(
    <>
    <HArticle1/>
    <HArticle2 TrendData ={TrendData}/>
    <Harticle3/>
    </>
  )
}


export default Home
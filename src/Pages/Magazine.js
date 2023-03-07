import { Link } from 'react-router-dom'
import './Magazine.css'
import {AiOutlineClose} from 'react-icons/ai'
import $ from 'jquery'
import { useState } from 'react'



function MagazineList({data,setDetail}){
  return (data.map((item,index) => {
    return (
    <li key={index} onClick={() => {$('div#magazinemodal').fadeIn(1000); setDetail(item)}}>
      <figure>
        <p><img src={`./Images/magazine/${item.register}_main.png`} alt={item.title}/></p>
        <figcaption>
          <p className='magatitle'>{item.title}</p>
          <span className='magadate'>{item.date}</span>
          <span className='magawriter'>{item.writer}</span>
        </figcaption>
      </figure>
    </li>
    )
  }))
}

function MagazineModal({Data}){
  return(
    <div id='magazinemodal'>
        <p className='magaclose' onClick={() => {$('div#magazinemodal').fadeOut(1000)}}><AiOutlineClose/></p>
        <h3>{Data.title}</h3>
        <div>
          <p style={{background: `url(./Images/magazine/${Data.register}_back1.png) no-repeat center/cover`}}></p>
          <div className='maga1' style={{background: `url(./Images/magazine/${Data.register}_back2.png) no-repeat center/cover`}}>
            <dl className='magas1'>
              <dt>{Data.slogun}</dt>
              <dd>{Data.desc}</dd>
            </dl>
          </div>
          <button className='magashop'><Link to='/store'>바로가기</Link></button>
        </div>
      </div>
  )
}



function Magazine({MData}){
  let Rdata = MData
  console.log(MData)
 const [detail,setDetail] = useState(MData[0])
 console.log(detail)
  return (
    <article id="magazine">
      <h2>Magazine</h2>
      <div id="magazinewrap">
        <ul id='magazineshow'>
          <MagazineList data = {Rdata} setDetail ={setDetail}/>
        </ul>
      </div>
      <MagazineModal Data ={detail}/>
    </article>
  )
}

export default Magazine
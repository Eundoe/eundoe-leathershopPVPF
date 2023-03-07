import './Cart.css'

import { useSelector, useDispatch } from "react-redux"
import { RemoveCart } from '../store'
import $ from 'jquery'
import { Link } from 'react-router-dom'
import {AiOutlineClose} from 'react-icons/ai'
import {BsTrash} from 'react-icons/bs'





function Cart(){
  let state = useSelector((state) => state.orderList)
  let dispatch = useDispatch()
  let data = state.data
  let total = state.total
  let amount = state.amount


  function EmptyList(){
    if(data.length === 0){
      return(
        <div id='empty'>Cart is Empty!</div>
      )
    }
    return false
  }

  
  function CartList(){
    return data.map((item,index) => {
            return(
      <figure id='cartitem' key={index}>
        <p><img src={item.picture} alt={item.name}/></p>
        <figcaption>
          <dl>
            <dt><span>이름</span>{item.name}</dt>
            <dd><span>수량</span>{item.amount}</dd>
            <dd><span>가격</span>{item.price}</dd>
            <dd><span>색깔</span>{item.optscolor}</dd>
            <dd><span>Type</span>{item.type}</dd>
            <dd><span>총계</span>{item.total}</dd>
            <dd><span>사인</span>{item.sign}</dd>
            <dd><span>옵션</span>{item.optstype}</dd>
          </dl>
          <button onClick={() => { dispatch(RemoveCart(index))}}><BsTrash/></button>
        </figcaption>
      </figure>
      )
    }
    )    
  
  }



  function Purchase(){
    if(data.length === 0){
      return false
    }
    return(
      <div id='purchase'>
      <dl>
        <dt>결제금액</dt>
        <dd>{total}</dd>
      </dl>
      <dl>
        <dt>품목개수</dt>
        <dd>{amount}</dd>
      </dl>
      <p><Link to='/purchase' onClick={() => {$('div#cart').hide()}}>구매하기</Link></p>
    </div>
    )
  }


  return (
    <div id="cart">
      <h2>Cart On</h2>
      <p id='cartclose' onClick={() => {$('div#cart').fadeOut(500)}}><AiOutlineClose/></p>
      <div id="cartwrap">
        <div id='bill'>
        <EmptyList/>
        <CartList/>
        </div>
        <Purchase/>
      </div>  
    </div>
  )
}


export default Cart
import { useState } from 'react'
import './Store.css'
import {AiOutlineClose, AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
import {BsFilterRight} from 'react-icons/bs'
import {GrFavorite} from "react-icons/gr"
import $ from "jquery"
import { useDispatch } from 'react-redux'
import { AddCart } from '../store'
import { Link } from 'react-router-dom'




function SortMenu({setMainSort, setSubSort}){
  return(
    <div id='sort'>
      <ul id='maincategory'>
        <li onClick={() => {setMainSort("default");}}>Default</li>
        <li onClick={() => {setMainSort("wallet");}}>Wallet</li>
        <li onClick={() => {setMainSort("bag");}}>Bag</li>
        <li onClick={() => {setMainSort("acc");}}>Accesories</li>
      </ul>
      <ul id='subcategory'>
        <li onClick={() => {setSubSort('olim');}}>olim</li>
        <li onClick={() => {setSubSort('nlim');}}>nlim</li>
      </ul>
      <p className='sortclose'><AiOutlineClose onClick={() =>{$('div#sort').slideUp(1000)}}/></p>
    </div>
  )
}


function PModal({ModalBase, currentItem}){
  let redate = ModalBase.filter((item) => {
    return item.id === currentItem
  })
  let Mitem = redate[0]
  
  let dispatch = useDispatch()



  let ramount = 0
  let result = document.querySelector('span.amountresult')
  let total = document.querySelector('dl#total>dd')
  function MinusB(){
    
    if (ramount === 0){
     window.alert('0보다 작을수 없습니다.')
     ramount = 0
    return false

    }
    else{
      ramount -= 1
      CartData.amount = ramount
      CartData.total = (Mitem.price * ramount)
      total.textContent = (Mitem.price * ramount)
      result.textContent = ramount
    }
  
 }

 function PlusB(){
   if (ramount >= 10){
     window.alert('10개이상 주문 불가합니다.')
     ramount = 10
     return false
   }
   else{
    ramount += 1
    CartData.amount = ramount
    CartData.total = (Mitem.price * ramount)
    result.textContent = ramount
    total.textContent = (Mitem.price * ramount)
   
   }
 }

 function ClearData(){
  ramount = 0
  result.textContent = ramount
  total.textContent = (Mitem.price * ramount)
 }





let CartData = {
  name : Mitem.name,
  picture : Mitem.mpic,
  amount : ramount,
  optstype : '해당없음',
  optscolor : $('select#color').val(),
  price : Mitem.price,
  type :"store",
  total : (Mitem.price * ramount),
  sign : "해당없음"
}


function DesSlogun(){
  return Mitem.description.map((item,index) => {
    return <li key={index}>{item}</li>
  })
}

function Options(){
  return Mitem.color.map((item,index) => {
    return <option name='color' key={index} value={item}>{item}</option>
  })
}


  return(
    <div id='Pmodal'>
      <p id='modalclose' onClick={() => {$('div#Pmodal').fadeOut(100); ClearData()}}><AiOutlineClose/></p>
      <div id='inform'>
        <p><img src={Mitem.mpic} alt={Mitem.mpic}/></p>
        <div id='detail'>
          <p className='name'>{Mitem.name}</p>
          <dl className='price'>
            <dt>Price</dt>
            <dd>{Mitem.price}</dd>
          </dl>
          <dl className='kind'>
            <dt>Type</dt>
            <dd>{Mitem.type}</dd>
          </dl>
        <form>
          <fieldset>
            <label htmlFor='color'>Color</label>
            <select id='color' name='color' onChange={(e) => CartData.optscolor = e.target.value }  >
              <Options/>
            </select>
            <label htmlFor='amount'>Amount</label>
            <p id='amount'>
              <button onClick={(e) => {MinusB(); return e.preventDefault() }}><AiOutlineMinus/></button>
              <span className='amountresult'>{ramount}</span>
              <button onClick={(e) => {PlusB(); return e.preventDefault() }}><AiOutlinePlus/></button>
            </p>
            <dl id='total'>
              <dt>Total</dt>
              <dd>{CartData.total}</dd>
            </dl>
            <div id='modalbtn'>
              <button className='ordernow' onClick={(e) => {e.preventDefault()}}><Link to='./error'>OrderNow</Link></button>  
              <button className='pocket' onClick={(e) => {if(CartData.amount === 0 ){
                window.alert('최소값은 0보다 커야합니다.')
                e.preventDefault()
              }else{dispatch(AddCart(CartData),console.log(CartData.amount),ClearData(),$('div#Pmodal').fadeOut(100),e.preventDefault());}}}>inmyPocket</button>  
              <button className='fav' onClick={(e) => {e.preventDefault()}}><Link to='./error'><GrFavorite/></Link></button>  
            </div>
          </fieldset>
        </form>
        </div>
      </div>
      <div id='Pslogun'>
        <ul>
           <DesSlogun/>
        </ul>
      </div>
      <div id='description'>
        <p style={{background : `url(${Mitem.spic[0]}) center/cover no-repeat`}}>background1</p>
        <p style={{background : `url(${Mitem.spic[1]}) center/cover  no-repeat`}}>background2</p>
        <p style={{background : `url(${Mitem.spic[2]}) center/cover no-repeat`}}>background3</p>
        <div>
          <dl>
            <dt>재원</dt>
            <dd>가로 : {Mitem.size[0]}, 세로 : {Mitem.size[1]}</dd>
          </dl>
          <dl>
            <dt>재료</dt>
            <dd>{Mitem.materi}</dd>
          </dl>
          </div>
      </div>
      <dl id='warn'>
        <dt>주의사항</dt>
        <dd>해당 제품은 천연가죽 제품으로 습기와 온도변화에 취약하니 관리에 주의부탁드립니다.</dd>
      </dl>
    </div>
  )
}







function Store({InitData}){

const [mainSort,setMainSort] = useState('default')
const [subSort,setSubSort] = useState('olim')
let baseData = InitData
let ReData = baseData.filter((item) => {
  if (mainSort === "default"){
    return (baseData)
  }
  else{
    return (item.type === mainSort)
  } 
}).sort((a,b) => {
  let order = (subSort === 'olim') ? 1 : -1
  return (a.price < b.price) ? -1 * order : 1 * order
})
const product = ReData
const postPage = 12
const [currentPage,setCurrentPage] = useState(1)
const [currentProduct,setCurrentProduct] = useState(1)


function PList({setCurrentProduct}){
  const indexOfLast = postPage * currentPage;
  const indexOfFirst = indexOfLast - postPage 
  const productList = product.slice(indexOfFirst,indexOfLast)

  function Detail({item}){
    return(
      <figure>
        <p><img src={item.mpic} alt={item.id}/></p>
        <figcaption>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </figcaption>
      </figure>
    )
  }

  return productList.map((item,index) => {
    return(<li key={index} onClick = {() => {setCurrentProduct(item.id); $('div#Pmodal').fadeIn(100).scrollTop(0)}}>
      <Detail item = {item}/>
    </li>)
  })
}

function Pagination(){
  const pageNumber = []
  const totalpage = product.length
  for(let i = 1; i <= totalpage/postPage ; ++i){
    pageNumber.push(i)
  }
  return pageNumber.map((item,index) => {
    return(
      <li key={index}><span onClick={()=>{setCurrentPage(item)}}>{item}</span></li>
    )
  })
}

  return(
    <article id="store">
      <h2>Store</h2>
      <div id='storewrap'>
        <p id='sortmenu'><BsFilterRight id='sorticon' onClick={() => {$('div#sort').slideDown(1000)}}/></p>
        <SortMenu setMainSort = {setMainSort} setSubSort={setSubSort}/>
        <div id='productshow'>
          <ul id='productList'>
            <PList setCurrentProduct = {setCurrentProduct}/>
          </ul>
          <ul id='pagination'>
            <Pagination/>
          </ul>
        </div>
      <PModal currentItem = {currentProduct} ModalBase = {baseData}/>
      </div>
    </article>
  )
}


export default Store
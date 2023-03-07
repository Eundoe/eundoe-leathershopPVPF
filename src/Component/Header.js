import { Link } from "react-router-dom"
import "./Header.css"
import {AiFillShopping, AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {MdSupervisorAccount} from "react-icons/md"
import {BiSearchAlt2} from "react-icons/bi"
import {RiAccountBoxFill} from "react-icons/ri"
import Cart from "../Pages/Cart"
import $ from "jquery"


$(function(){
  $(window).on('resize',function(e){
    if(window.outerWidth <= 580 && window.outerWidth > 5){
      $('div#priv').css("display","block")
      $('div#mainnav>nav').css("display","block")
      $('div#mainnav').css("display","none")
    }
    if(window.outerWidth <= 980 && window.outerWidth > 580 ){
        $('div#priv').css("display","none")
        $('div#mainnav>nav').css("display","none")
        $('div#mainnav').css("display","block")
    }
    if(window.outerWidth > 980){
      $('div#priv').css("display","block")
      $('div#mainnav>nav').css("display","block")
      $('div#mainnav').css("display","flex")
    }
  })
})


function MainNavi(){
  function MainClose(){
    if (window.outerWidth <= 980 && window.outerWidth > 580){
      $('div#mainnav>nav').fadeOut(1000)
    }
    if (window.outerWidth <= 580 && window.outerWidth > 5){
      $('div#mainnav').fadeOut(1000)
    }
  }

  function Navigation(){
    return(
      <nav>
      <ul>
      <li><Link to='/about' onClick={()=>{window.scrollTo(0)}}>About</Link></li>
      <li><Link to='/store' onClick={()=>{window.scrollTo(0)}}>Store</Link></li>
      <li><Link to='/order' onClick={()=>{window.scrollTo(0)}}>Order</Link></li>
      <li><Link to='/magazine' onClick={()=>{window.scrollTo(0)}}>Magazine</Link></li>
      <li><Link to='/event' onClick={()=>{window.scrollTo(0)}}>Event</Link ></li>
      <li><Link to='/contact' onClick={()=>{window.scrollTo(0)}}>Contact</Link></li>
    </ul>
    <p className="mainclose" onClick={() => {MainClose()}}><AiOutlineClose/></p>
    </nav>
    )
  }

  function SubNavigation(){
    return(
      <div id="priv">
              <span><Link to='/login'>Login</Link></span>
              <span><Link to='/register'>Register</Link></span>
              <ul>
                <li onClick={() => {$('div#cart').fadeIn(1000)}}><AiFillShopping/></li>
                <li><Link to='/mypage'><MdSupervisorAccount/>Mypage</Link></li>
                <li><Link to='/search'><BiSearchAlt2/></Link></li>
              </ul>
              <p className="subclose" onClick={()=>{$('div#priv').fadeOut(1000)}}><AiOutlineClose/></p>
          </div>
    )
  }

  return(
    <>
    <Navigation/>
    <SubNavigation/>
    </>
  )
}



function Header(){
  function Mainmenu(){
    if (window.outerWidth <= 980 && window.outerWidth > 580){
      $('div#mainnav>nav').fadeIn(1000)
     
    }
    if (window.outerWidth <= 580 && window.outerWidth > 5){
      $('div#priv').fadeIn(500)
      $('div#mainnav>nav').fadeIn(500)
      $('div#mainnav').fadeIn(1000)
      
    }
  }


  function NaviDiv(){
     return(
          <div id="mainnav">
          <MainNavi />
        </div>
        )
    }
  return(
    <header>
      <div id="headwrap">
        <h1><Link to='/' onClick={()=>{window.scrollTo(0)}}><img src="./Images/logo/hevitzLogo.png" alt="logo"/></Link></h1>
        <NaviDiv/>
        <p id="menu" onClick={() => {Mainmenu()}}><AiOutlineMenu/></p>
        <p id="submenu" onClick={() => { $('div#priv').fadeIn(1000)}}><RiAccountBoxFill/></p>
      </div>
      <Cart/>
    </header>
  )
}

export default Header
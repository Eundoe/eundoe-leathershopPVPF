
import './Footer.css'
import { Link } from 'react-router-dom'
import {AiFillInstagram, AiFillTwitterCircle, AiFillFacebook} from "react-icons/ai"


function Footer(){
  return(
    <footer>
      <div id="footerwrap">
        <ul id="sns">
          <li><a href="/" onClick={(e)=>{window.alert('현재 준비중 입니다.'); e.preventDefault();
          }}><AiFillInstagram/></a></li>
          <li><a href="/" onClick={(e)=>{window.alert('현재 준비중 입니다.'); e.preventDefault();
          }}><AiFillTwitterCircle/></a></li>
          <li><a href="/" onClick={(e)=>{window.alert('현재 준비중 입니다.'); e.preventDefault();
          }}><AiFillFacebook/></a></li>
        </ul>
        <ul id="policy">
          <li><Link to='/contact'>고객센터</Link></li>
          <li><Link to='/policy'>개인정보처리관련</Link></li>
          <li><Link to='/regulation'>회사규정</Link></li>
        </ul>
      </div>
      <p className='footerdetail'>detail</p>
      <small>Copyright&copy;Hevitz</small>
    </footer>
  )
}

export default Footer
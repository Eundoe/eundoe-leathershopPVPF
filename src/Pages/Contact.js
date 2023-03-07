import './Contact.css'
import $ from 'jquery'


function Contact(){

  $(function(){
    $(window).on('resize',function(e){
      if (window.outerWidth <= 580){
        $('input.contin').on('focus',function(e){
          $(e.target).prev('label').fadeOut(500)
        })
        $('input.contin').on('blur',function(e){
          $(e.target).prev('label').fadeIn(500)
        })
        $('textarea.contin').on('blur',function(e){
          $(e.target).prev('label').fadeIn(500)
        })
        $('textarea.contin').on('focus',function(e){
          $(e.target).prev('label').fadeOut(500)
        })
      }
      if(window.outerWidth > 580 && window.outerWidth < 610){
        this.location.reload()
      }
      }
    )
  })


  return(
    <article id="contact">
      <h2>Contact</h2>
      <div id="contactwrap">
        <div id='contactinform'>
          <p id='mapon'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.949493591154!2d127.02278471565181!3d37.57980697979535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbcb493fa16a1%3A0xda201fdeeea409da!2z6rCA7KO96rO167CpIO2XpOu5hOy4oA!5e0!3m2!1sko!2skr!4v1675781274902!5m2!1sko!2skr" allowFullScreen="none" loading="lazy"></iframe>
          </p>
          <div id='myinfo'>
            <dl>
              <dt>SNS</dt>
              <dd>오픈톡아이디</dd>
            </dl>
            <dl>
              <dt>전화번호</dt>
              <dd>XXXX-XXXX-XXXX</dd>
            </dl>
            <dl>
              <dt>주소</dt>
              <dd>서울특별시OO구OO동</dd>
            </dl>
          </div>
        </div>
        <div id='contform'>
          <form>
            <fieldset id='formcontent'>
              <ul>
              <li>
              <label htmlFor='uname'>이름</label>
              <input type='text' id='uname' name='uname' className='contin'/>
              </li>
              <li>
              <label htmlFor='uemail'>전자메일</label>
              <input type='email' id='uemail' name='uemail' className='contin'/>
              </li>
              <li>
              <label htmlFor='uphone'>전화번호</label>
              <input type='number' id='uphone' name='uphone' className='contin'/>
              </li>
              </ul>
              <div id='message'>
              <label htmlFor='message'>메세지</label>
              <textarea id='message' name='message' cols="30" rows="10" className='contin'/>
              <button type='submit' onClick={(e) => {window.alert('이기능은 준비중입니다.');e.preventDefault()}}>보내기</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </article>
  )
}

export default Contact
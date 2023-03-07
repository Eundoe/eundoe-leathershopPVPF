
import { useState } from 'react'
import './Aboutus.css'



function Story({story}){
  if (story === "brand"){
  return(
    <div id="brand">
    <div id="story1">
      <div className="explain">
        <h3>자연스럽게, 오래도록</h3>
        <p>공예는 물건 너머의 사람을 보여줍니다. 단순히 거래되는 상품이 아니라, 누군가의 귀한 시간과 노력이 들어간 제작품이라는 걸 알게 됩니다. 의미 없이찍어낸 생산품이 아니라, 많은 사람들의 손길과 눈길, 마음길을 거쳐 온 선물이 됩니다. 작은 감사함과 존중에서 비롯된 찰나의 태도가 모든 것을 바꿀 수 있습니다.</p>
      </div>
    </div>
    <div id="story2">
      <figure>
        <p><img src="./Images/about/brand1.png" alt='brand1'/></p>
        <figcaption>
          <h3>Hevitz의 지향점</h3>
          <p><ul>
            <li>· 10년 사용 (10 years of use)</li>
            <li>· 평생 수선 (Lifetime Guarantee)</li>
            <li>· 지속 가능 (Environmentally conscious)</li>
            <li>· 정직 주의 (Honesty)</li>
            </ul></p>
        </figcaption>
      </figure>
    </div>
  </div>
  )
}
return(
  <div id='leather'>
    <h3>지속가능한 삶 : 왜 가죽인가</h3>
    <p>현대적 지속가능성은 관점의 변화를 요구합니다. 극단적인 친환경은 유지하기가 어렵고, 이기적이고 근시안적인 친인간성은 지속되기 어렵습니다. 지속가능한 삶의 형태는 그동 안 우리가 이룩해 온 것들을 자랑스럽게 여기면서, 소중한 것들을 돌아보고 재확인할 때 가능해집니다. 가죽의 재확인은 하나의 좋은 사례가 될 것입니다.</p>
    <p>가죽은 인류가 가장 먼저 발견한 업사이클링입니다. 귀한 생명의 피를 불가피하게 흘려야 한다면, 남김 없이 소비하는 것이 마땅했습니다. 그러나 시스템에 의해 생산과 소비가 완 전히 분리되자 죄책감은 흐려졌고, 오늘날 도축 폐기율은 50%를 넘습니다. 생명의 절반 이 폐기물로 버려지는 오늘날, 가죽은 중요한 업사이클링 소재입니다. 가죽은 우리 피부와 가장 유사한 친인간적 재료지만, 우리의 철학에 완벽하게 부합하려면 몇 가지 전제조건이 필요합니다. 헤비츠는 정상도축되어, 엄격한 환경규제 하에 베지터블 무두질을 한 풀그레 인 레더와 크러스트 레더만을 사용합니다.</p>
    <p>헤비츠가 궁극적으로 전하고자 하는 것은 소유에 대한 잊혀진 진실입니다. 단지 종이 몇 장, 플라스틱 카드, 혹은 디지털 숫자와 클릭 몇 번으로 모든 제품을 가질 수 있게 되면서, 우리는 진정한 소유에 대해 잊었습니다. 더 비싼 것, 더 희소한 것만 찾을 뿐, 진짜 소중한 것을 어떻게 만들고 지키는지 잊었습니다.헤비츠는 시간의 강줄기를 거슬러 올라갑니다. 소중한 것들을 다시 발견하고, 거기에 서려있는 마음을 하나씩 현실에 되살려 냅니다. 무엇이든 빠르게 흘러가버리는 시대에, 오랜 가치를 지킨다는 것은 어쩌면 어리석은 일일지도 모릅니다. 하지만 힘겹게 노력하지 않으면, 그 어떠한 가치도 저절로 발생하지 않습니다. 누구나 직관적으로 이해할 수 있는 제작 법, 눈과 피부에 편안함을 주는 천연원료, 직접 관리하며 오래도록 아껴 쓸 수 있는 전통 소재, 섬세한 설계와 따뜻한 시선을 고집하겠습니다. 여러분은 정성을 들여 진짜 소유를 완성하세요. 내 오랜 손길을 각인한 '진짜 내 물건'에서 본질적인 익숙함과 편안함을 느끼길 바랍니다.</p>
    <ul id='leathergall'>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
)
}

function HeadLine({story}){
  if (story === "brand"){
    return(
      <h2>About Us</h2>
    )
  }
  return(
    <h2>About Leather</h2>
  )
}




function Aboutus(){
const [aboutS,setAboutS] = useState('brand')
  return(
    <article id="about">
      <HeadLine story = {aboutS}/>
      <ul id='about'>
        <li onClick={() => {setAboutS("brand")}}>Brand Story</li>
        <li onClick={() => {setAboutS("leather")}}>About Leather</li>
      </ul>
      <Story story = {aboutS}/>
      </article>
  )
}

export default Aboutus
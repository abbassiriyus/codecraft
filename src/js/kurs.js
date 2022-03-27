import React, {Component} from 'react'     
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import kurstyle from '../css/kurs.module.css'
import Python from '../img/header1.png';
import Php from '../img/prolog.png';
import javascript from '../img/testing.png';
import android from '../img/android.png';
import scratch from '../img/scratch.png';
import unity from '../img/unity.png';
import AOS from 'aos';
import down1 from '../img/premium-icon-down-arrow-3840825 1.png';
import down2 from '../img/premium-icon-down-arrow-3840825 2.png';
import 'aos/dist/aos.css';
AOS.init();
export default class kurs extends Component {

  render() {
 
   
    
    return (
      <div>
          <div id='kurs' className={kurstyle.cuorse}>
 <h1><span>Чему</span> мы учим?</h1>   
   <div className={kurstyle.kurs}> 
  
    <div className={kurstyle.rows}>
    <MDBRow className='row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4 ' >
      <MDBCol className={kurstyle.kurscol}>
        <MDBCard  className={kurstyle.kursCard}>
          <MDBCardImage className={kurstyle.kursImg}
            src={Python}
            alt='Hollywood Sign on The Hill'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className={kurstyle.title}>Язык программирования <span className={kurstyle.textyellow}>Python</span></MDBCardTitle>
            <MDBCardText>
             <p>Python - это язык программирования, который активно используеться в разработке веб-сайтов, игр и программ. Благодаря своей простоте и понятности, этот язык идеально подходит для новичков.</p>
            </MDBCardText>
            <a href="/python">  <img src={down1} className={kurstyle.img} alt=" "/>
               Подробнее
               <img src={down2} className={kurstyle.img} alt=" "/></a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className={kurstyle.kurscol}>
        <MDBCard  className={kurstyle.kursCard}>
          <MDBCardImage className={kurstyle.kursImg}
            src={javascript}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className={kurstyle.title}>Язык программирования <span className={kurstyle.textyellow}>Javascript</span></MDBCardTitle>
            <MDBCardText>
            <p>Javascript - это один из самых востребованных языков программирования на сегодня. Владея этим языком, можно создавать почти всё: веб-сайты, игры и программы для любых электронных устройств,и архитектуру сайта.</p>
            </MDBCardText>
            <a href="/javascript">  <img src={down1} className={kurstyle.img} alt=" "/>
               Подробнее
               <img src={down2} className={kurstyle.img} alt=" "/></a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className={kurstyle.kurscol}>
        <MDBCard  className={kurstyle.kursCard}>
          <MDBCardImage className={kurstyle.kursImg}
            src={android}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className={kurstyle.title}>MIT App Inventor 2 <span className={kurstyle.textyellow}>OC Android</span></MDBCardTitle>
            <MDBCardText>
           <p>это визуальный конструктор приложений для Android. Таким образом, несмотря на то, что основным языком создания программ для Android является Java, в случае использования App Inventor совершенно не требуется.
                                </p>
            </MDBCardText>
            <a href="/#xabar">
              <img src={down1} className={kurstyle.img} alt=" "/>
               Подробнее
               <img src={down2} className={kurstyle.img} alt=" "/>
               </a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className={kurstyle.kurscol}>
        <MDBCard  className={kurstyle.kursCard}>
          <MDBCardImage className={kurstyle.kursImg}
            src={Php}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className={kurstyle.title}>Язык программирования <span className={kurstyle.textyellow}>
                                        PHP</span></MDBCardTitle>
            <MDBCardText>
            <p>Этот курс позволит освоить базовые принципы в программировании, без которых не обойтись ни одному будущему разработчику. Дети получат необходимый фундамент, который позволит идти дальше изучая более интересные и сложные
                                    темы в программировании.</p>
            </MDBCardText>
            <a href="/php">  <img src={down1} className={kurstyle.img} alt=" "/>
               Подробнее
               <img src={down2} className={kurstyle.img} alt=" "/></a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className={kurstyle.kurscol}>
        <MDBCard   className={kurstyle.kursCard}>
          <MDBCardImage className={kurstyle.kursImg}
            src={scratch}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className={kurstyle.title}>Курс<span className={kurstyle.textyellow}>Scratch</span></MDBCardTitle>
            <MDBCardText>
           <p>
                                    Ваш ребёнок много времени проводит играя за компьютером? Как превратить это время в пользу? Цель курса визуального программирования - научить детей созидательной работе за компьютером, раскрывая весь их творческий потенциал</p>
            </MDBCardText>
            <a href="/scratch">  <img src={down1} className={kurstyle.img} alt=" "/>
               Подробнее
               <img src={down2} className={kurstyle.img} alt=" "/></a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol >
      <MDBCol  className={kurstyle.kurscol}>
        <MDBCard  className={kurstyle.kursCard} >
          <MDBCardImage className={kurstyle.kursImg}
            src={unity}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className={kurstyle.title}> Разработка игр в  <span className={kurstyle.textyellow}>Unity</span> </MDBCardTitle>
            <MDBCardText>
             <p>
            
Unity - это популярный игровой движок, позволяющий создавать трехмерные игры, которые будут работать на компьютере, телефоне, и даже игровой приставке. Лучший выбор для более опытных ребят.</p>
            </MDBCardText>
            <a href="/mentalarifmetika">  <img src={down1} className={kurstyle.img} alt=" "/>
               Подробнее
               <img src={down2} className={kurstyle.img} alt=" "/></a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
     
    </MDBRow>
    </div>
    </div>
        </div>
      </div>
    )
  }
}





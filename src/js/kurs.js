import React, {Component} from 'react'     
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import kurstyle from '../css/kurs.module.css'
import Python from '../img/header.gif';
import Andiroid from '../img/andiroid.gif';
import Php from '../img/prolog.gif';
import Html from '../img/html.gif';
import Scratch from '../img/scratch.gif';
import styles from '../css/nashPrinsip.module.css';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Bounce } from 'react-reveal';
AOS.init();
export default class kurs extends Component {

  render() {
 
   
    
    return (
      <div>
          <div id='kurs' className={kurstyle.cuorse}>
          <Bounce left cascade ><h1 className={styles.title}><span>Чему</span> мы учим?</h1></Bounce>
   <div className={kurstyle.kurs}> 
  
    <div className={kurstyle.rows}>
    <MDBRow className='row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4 ' >
      <MDBCol className={kurstyle.kurscol}>
        <MDBCard data-aos='fade-right'  data-aos-duration="2000" className={kurstyle.kursCard}>
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
            <a href="/#xabar"> Подробнее</a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className={kurstyle.kurscol}>
        <MDBCard data-aos="flip-up"  data-aos-duration="3000" className={kurstyle.kursCard}>
          <MDBCardImage className={kurstyle.kursImg}
            src="https://media.giphy.com/media/hoILp6MRyod8s/giphy.gif"
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className={kurstyle.title}>Язык программирования <span className={kurstyle.textyellow}>Javascript</span></MDBCardTitle>
            <MDBCardText>
            <p>Javascript - это один из самых востребованных языков программирования на сегодня. Владея этим языком, можно создавать почти всё: веб-сайты, игры и программы для любых электронных устройств,и архитектуру сайта.</p>
            </MDBCardText>
            <a href="/#xabar"> Подробнее</a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className={kurstyle.kurscol}>
        <MDBCard data-aos="fade-left"  data-aos-duration="2000" className={kurstyle.kursCard}>
          <MDBCardImage className={kurstyle.kursImg}
            src={Andiroid}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className={kurstyle.title}>MIT App Inventor 2 <span className={kurstyle.textyellow}>OC Android</span></MDBCardTitle>
            <MDBCardText>
           <p>это визуальный конструктор приложений для Android. Таким образом, несмотря на то, что основным языком создания программ для Android является Java, в случае использования App Inventor совершенно не требуется.
                                </p>
            </MDBCardText>
            <a href="/#xabar"> Подробнее</a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className={kurstyle.kurscol}>
        <MDBCard data-aos="zoom-in" data-aos-duration="4000" className={kurstyle.kursCard}>
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
            <a href="/#xabar"> Подробнее</a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className={kurstyle.kurscol}>
        <MDBCard data-aos="zoom-in-down" data-aos-duration="4000" className={kurstyle.kursCard}>
          <MDBCardImage className={kurstyle.kursImg}
            src={Html}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className={kurstyle.title}>Web-<span className={kurstyle.textyellow}>Basic </span></MDBCardTitle>
            <MDBCardText>
            <p>это курс Лучший способ провести время полезно и забавно !!! Цель курса веб-программирования-научить детей самостоятельно создавать веб-страницы, оформлять дизайн и структуру этой страницы. Курс способствует развитию фантазии
                                    и новаторского качества вашега ребенка.</p>
            </MDBCardText>
            <a href="/#xabar"> Подробнее</a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className={kurstyle.kurscol}>
        <MDBCard data-aos="zoom-in-left" data-aos-duration="3000"  className={kurstyle.kursCard}>
          <MDBCardImage className={kurstyle.kursImg}
            src={Scratch}
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className={kurstyle.title}>Курс <span className={kurstyle.textyellow}>Scratch</span></MDBCardTitle>
            <MDBCardText>
           <p>
                                    Ваш ребёнок много времени проводит играя за компьютером? Как превратить это время в пользу? Цель курса визуального программирования - научить детей созидательной работе за компьютером, раскрывая весь их творческий потенциал</p>
            </MDBCardText>
            <a href="/#xabar"> Подробнее</a>
          </MDBCardBody>
        </MDBCard>
      </MDBCol >
      <MDBCol data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" className={kurstyle.kurscol}>
        <MDBCard  className={kurstyle.kursCard} data-aos="zoom-in-left" data-aos-duration="3000">
          <MDBCardImage className={kurstyle.kursImg}
            src="https://umius.ru/wp-content/uploads/2021/12/MA-1170-x-720-px-3.gif"
            alt='...'
            position='top'
          />
          <MDBCardBody>
            <MDBCardTitle className={kurstyle.title}>Ментальная <span className={kurstyle.textyellow}>арифметика</span> </MDBCardTitle>
            <MDBCardText>
             <p>
                                    это – древняя система счета.Занятия проходят с использованием специальных счетов абакус. К работе левого полушария присоединяется правое полушарие, подключая к логическим операциям творческое мышление. </p>
            </MDBCardText>
            <a href="/#xabar"> Подробнее</a>
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





import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import imgs from '../img/nnn1.gif';
import child from '../img/child.png';
import rightImg from '../img/1111.png';
import image1 from '../img/o.png';
import image2 from '../img/image2.png';
import image4 from '../img/image4.png';
import image5 from '../img/glob.png';
import image6 from '../img/image6.png';
import {Col,Row} from 'react-bootstrap';
import CountUp from 'react-countup';
import styles from '../css/nashPrinsip.module.css';
// import '../App.css'
// import Fade from 'react-reveal/Fade';
// import Rotate from 'react-reveal/Rotate';
// import Slide from 'react-reveal/Slide';

import 'aos/dist/aos.css';
import AOS from 'aos'
import { Bounce, } from 'react-reveal';
  AOS.init();
export default class Nash_prinsip extends Component {

    render() {
        return (
            <div>
            <div className={styles.main}>
            <div className={styles.boxNash}>
                <div className={styles.mainBox}>
                    <Row> 
         
        
                    <Bounce left cascade ><h1 className={styles.title}>Наши принципы <span>
        преподавания</span></h1></Bounce>
                    <Col sm={12} md={12} md={{order: 1}} lg={6} xl={6} xxl={6}>
                        <div data-aos="zoom-right" data-aos-duration="1000" className={styles.text}>
                        <p>Большая часть нашего учебного времени посвящена получению практического опыта при работе над проектами.</p>
                         <p>Работа над проектами побуждает наших студентов выражать себя с помощью кода.</p>
                         <p>Мы позволяем ученикам развиваться в своем темпе, помогая каждому понять и применить предоставленную информацию</p>
                         <p>Инструктор ведет учебный процесс, создает заинтересованность и мотивацию.</p>
                         <p>Поощряем учеников задавать вопросы и искать ответы.</p>
                         <p>Ассистенты инструкторов поддерживают инструкторов, позволяя группам с разными способностями учиться вместе.</p>
                         <p>Проекты основаны на интересах студентов, чтобы вдохновлять их воображение.</p>
                         <p>Атмосфера на уроках поощряет неформальное участие, ролевую игру реальных сценариев и творческое исследование у учеников.</p>
                         <p>Интересные домашние задания. Мы считаем, что ученики должны практиковать то, что они узнали, когда они мотивированы, а не вынуждены.</p>
                        </div>
                         </Col>

                         <Col sm={12} md={12} md={12}  lg={6} lg={{order: 2}} xl={6} xxl={6} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                          <img data-aos="zoom-in-left" data-aos-duration="1000" className={styles.img} id={styles.img} src={imgs} alt=" "/>
                         </Col>
                    </Row>
                    <Row>
                           <Col sm={12} md={6} lg={6}>
                           <div  data-aos="fade-up"
     data-aos-duration="1000" className={styles.leftCard}>
                               <img src={child}  alt=" " />
                               <h4>Удобный формат</h4>
                               <p>Благодаря современным технологиям мы построили самый лучший и комфортный формат дистанционного обучения</p>
                               </div> 
                           </Col>

                            <Col sm={12} md={6} lg={6}>
                           <div  data-aos="fade-up"
data-aos-duration="1000"  className={styles.rightCard}>
                               <img src={rightImg} alt=" "/>
                               <h4>Выжимаем максимум</h4>
                               <p>Мы проводим исключительно индивидуальные занятия, чтобы передать максимум знаний и опыта вашему ребенку</p>
                           </div>
                           </Col>
                       </Row>
                    </div>
                </div>
            </div>

            <div id='pochem' className={styles.codecrafMain}>
             <h1 className={styles.title}>Почему выбирают <span>CodeCraft</span></h1>
             <div className={styles.codecraf }>
                 <div className={styles.boxNash1}>
                 <Row>
            

                     <Col sm={12} md={6} lg={4} data-aos="zoom-in" style={{padding:'25px'}}  data-aos-duration="1000">
                     <div >
                         <img src={image1} alt=" " />
                         <h4>Самые клёвые инструкторы</h4>
                         <p>Инструкторы Codecraft - молодые, энергичные программисты и айтишники, которые с легкостью найдут общий язык с детьми и помогут им понять даже самые сложные нюансы программирования</p>
                     </div>
                     </Col>

                     <Col sm={12} md={6} lg={4} data-aos="zoom-in" style={{padding:'25px'}}  data-aos-duration="1000" >
                         <img src={image2} alt=" "/>
                         <h4>Индивидуальный подход</h4>
                         <p>Мы умеем находить индивидуальный подход ко всем нашим ученикам, учитывая их разные характерные особенности</p>
                     </Col>

                    <Col sm={12} md={6} lg={4} data-aos="zoom-in" style={{padding:'25px'}}  data-aos-duration="1000"> 
                    <img src="https://nito.rsvpu.ru/img/logo.png"/>
                    <h4>Современные технологии</h4>
                    <p>Мы всегда следим за актуальностью наших учебных программ, следуя всевозможным современным тенденциям</p>
                    </Col>
         
                      <Col  sm={12} md={6} lg={4} data-aos="zoom-in" style={{padding:'25px'}}  data-aos-duration="1000">
                          <div>
                              <img src={image4} alt=' ' />
                              <h4>Удобный график занятий</h4>
                              <p>Мы строим индивидуальный график занятий для каждого ученика, поэтому заниматься можно в любое удобное для Вас время</p>
                          </div>
                          {/* </Rotate> */}
                      </Col>
                           
                       
                          
                              <Col sm={12} md={6} lg={4} data-aos="zoom-in" style={{padding:'25px'}}  data-aos-duration="1000">
                                  <div>
                                      <img src={image5} />
                                      <h4>Обучение из любой точки мира</h4>
                                      <p>Благодаря дистанционной форме обучения, Вам не приходиться тратить время на дорогу, заниматься можно в любом удобном месте</p>
                                  </div>

                              </Col>
                            
                              <Col sm={12} md={6} lg={4} data-aos="zoom-in" style={{padding:'25px'}}  data-aos-duration="1000"> 
                              <div>
                                  <img src={image6} />
                                  <h4>Сертификат по окончанию</h4>
                                  <p>Все ребята, при успешном завершении курса, получают от нашей школы подтверждающий сертификат с выпиской про оценки</p>
                              </div>
                             {/* </Slide> */}

                              </Col>
                </Row>
             </div>
             </div>
            </div>

            <div className={styles.counter}>
                <div className='container'>
                    <Row>
                        <Col>
                        <div className={styles.counter_item}>
                            <CountUp className={styles.counter_number} start={0} end={5024} delay={1} duration={4}/><span className={styles.counter_plus}>+</span>
                            <p className={styles.counter_text}>Выпускников</p>
                        </div>
                    </Col>
                    <Col>
                        <div style={{borderRight: '1px solid #fff', borderLeft: '1px solid #fff'}} className={styles.counter_item}>
                        <CountUp className={styles.counter_number} start={0} end={48564} delay={1} duration={5}/><span className={styles.counter_plus}>+</span>
                            <p className={styles.counter_text}>Часов обучения</p>
                        </div>
                    </Col>
                    <Col>
                        <div className={styles.counter_item}>
                        <CountUp className={styles.counter_number} start={0} end={46} delay={1} duration={3}/><span className={styles.counter_plus}>+</span>
                            <p className={styles.counter_text}>Подготовлено <br/>Инструкторов</p>
                        </div>
                    </Col>
                    </Row>
                </div>
            </div>
           
        </div>
        )
    }
}

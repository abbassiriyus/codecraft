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
import shar12 from '../img/Ellipse 2.png'
import {Col,Row} from 'react-bootstrap';
import CountUp from 'react-countup';
import styles from '../css/nashPrinsip.module.css';
import 'aos/dist/aos.css';
import AOS from 'aos'
import { Bounce, } from 'react-reveal';
  AOS.init();
export default class Nashprinsip extends Component {

    render() {
        return (
            <div>
            <div className={styles.main}>  <img style={{position:'absolute',left:'0px',bottom:'-42px'}} src={shar12}/>
            <div className={styles.boxNash}>
                <div className={styles.mainBox}>
                  
                    <Row> 
         
        
                    <Bounce left cascade ><h1 className={styles.title}>Наши принципы <span>
        преподавания</span></h1></Bounce>

                    <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <div  className={styles.text}>
                        <span>Большая часть нашего учебного времени посвящена получению практического опыта при работе над проектами.</span><br/>
                         <span>Работа над проектами побуждает наших студентов выражать себя с помощью кода.</span><br/>
                         <span>Мы позволяем ученикам развиваться в своем темпе, помогая каждому понять и применить предоставленную информацию</span><br/>
                         <span>Инструктор ведет учебный процесс, создает заинтересованность и мотивацию.</span><br/>
                         <span>Поощряем учеников задавать вопросы и искать ответы.</span><br/>
                         <span>Ассистенты инструкторов поддерживают инструкторов, позволяя группам с разными способностями учиться вместе.</span><br/>
                         <span>Проекты основаны на интересах студентов, чтобы вдохновлять их воображение.</span><br/>
                         <span>Атмосфера на уроках поощряет неформальное участие, ролевую игру реальных сценариев и творческое исследование у учеников.</span><br/>
                         <span>Интересные домашние задания. Мы считаем, что ученики должны практиковать то, что они узнали, когда они мотивированы, а не вынуждены.</span><br/>
                        </div>
                         </Col>

                         <Col sm={12} md={12}  lg={6}  xl={6} xxl={6} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                          <img  className={styles.img} id={styles.img} src={imgs} alt=" "/>
                         </Col>
                    </Row>
                    <Row>
                           <Col sm={12} md={12} lg={6}>
                           <div className={styles.leftCard}>
                           <div className={styles.back}/>
                               <img src={child}  alt=" " />
                               <div className={styles.pochtext}><h4>Удобный формат</h4>
                               <p>Благодаря современным технологиям мы построили самый лучший и комфортный формат дистанционного обучения</p>
                               </div> </div>
                           </Col>

                            <Col sm={12} md={12} lg={6}>
                           <div className={styles.rightCard}>
                             <div className={styles.back}/>
                               <img src={rightImg} alt=" "/>
                               <div className={styles.pochtext}><h4>Выжимаем максимум</h4>
                               <p>Мы проводим исключительно индивидуальные занятия, чтобы передать максимум знаний и опыта вашему ребенку</p>
                           </div></div>
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
            

                     <Col sm={12} md={12} lg={6}  style={{padding:'25px'}} >
                     <div className={styles.pochcard}>
                         <img src={image1} style={{padding:'10px'}}  alt=" " />
                         <div className={styles.pochtext}><h4>Самые клёвые инструкторы</h4>
                         <p>Инструкторы <span style={{color:'#FAC819'}}>Codecraft</span>  - молодые, энергичные программисты и айтишники, которые с легкостью найдут общий язык с детьми и помогут им понять даже самые сложные нюансы программирования</p>
                     </div></div>
                     </Col>

                     <Col sm={12} md={12} lg={6} style={{padding:'25px'}}  >
                     <div className={styles.pochcard} style={{border:'2px solid #3F3E3EBF'}}  >
                         <img src={image2} style={{padding:'10px'}}  alt=" "/>
                         <div className={styles.pochtext}><h4>Индивидуальный подход</h4>
                         <p>Мы умеем находить индивидуальный подход ко всем нашим ученикам, учитывая их разные характерные особенности</p>
                         </div ></div>
                     </Col>

                    <Col sm={12} md={12} lg={6}  style={{padding:'25px'}} > 
                    <div className={styles.pochcard}  style={{border:'2px solid #3F3E3EBF'}} >
                    <img style={{padding:'10px'}}  alt='' src="https://nito.rsvpu.ru/img/logo.png"/>
                    <div className={styles.pochtext} ><h4>Современные технологии</h4>
                    <p>Мы всегда следим за актуальностью наших учебных программ, следуя всевозможным современным тенденциям</p>
                    </div></div>
                    </Col>
         
                      <Col  sm={12} md={12} lg={6}  style={{padding:'25px'}} >
                          <div className={styles.pochcard}>
                              <img src={image4} style={{padding:'10px'}} alt=' ' />
                              <div className={styles.pochtext}><h4>Удобный график занятий</h4>
                              <p>Мы строим индивидуальный график занятий для каждого ученика, поэтому заниматься можно в любое удобное для Вас время</p>
                          </div></div>
                          {/* </Rotate> */}
                      </Col>
                           
                       
                          
                              <Col sm={12} md={12} lg={6}  style={{padding:'25px'}} >
                                  <div className={styles.pochcard} >
                                      <img src={image5} alt=" " style={{padding:'10px'}} />
                                      <div className={styles.pochtext}><h4>Обучение из любой точки мира</h4>
                                      <p>Благодаря дистанционной форме обучения, Вам не приходиться тратить время на дорогу, заниматься можно в любом удобном месте</p>
                                  </div></div>

                              </Col>
                            
                              <Col sm={12} md={12} lg={6}  style={{padding:'25px'}} > 
                              <div className={styles.pochcard} style={{border:'2px solid #3F3E3EBF'}}>
                                  <img src={image6} alt=" " style={{padding:'10px'}}  />
                                  <div className={styles.pochtext}><h4>Сертификат по окончанию</h4>
                                  <p>Все ребята, при успешном завершении курса, получают от нашей школы подтверждающий сертификат с выпиской про оценки</p>
                              </div></div>
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

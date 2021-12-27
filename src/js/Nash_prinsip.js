import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import imgs from '../img/child.jpg';
import child from '../img/child.png';
import rightImg from '../img/1111.png';
import gril from '../img/kk.jpg';
import image1 from '../img/o.png';
import image2 from '../img/image2.png';
import image3 from '../img/kom.png';
import image4 from '../img/image4.png';
import image5 from '../img/glob.png';
import image6 from '../img/image6.png';
import { Container,Col,Row} from 'react-bootstrap';
import styles from '../css/nashPrinsip.module.css';

export default class Nash_prinsip extends React.Component {
    render() {
        return (
            <div>
            <div className={styles.main}>
            <div className={styles.boxNash}>
                <div className={styles.mainBox}>
                    <Row>
                        <h2 className={styles.title}>Наши принципы <span>преподавания</span></h2>
                    <Col sm={12} md={12} md={{order: 1}} lg={6} xxl={6}>
                        <div className={styles.text}>
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

                         <Col sm={12} md={12} md={12}  lg={6} lg={{order: 2}} xxl={6}>
                          <img className={styles.img} src={imgs} alt=" "/>
                          <img className={styles.imgs} src={gril}   alt=" "/>
                         </Col>
                    </Row>
                    <Row>
                           <Col sm={12} md={6} lg={6}>
                           <div className={styles.leftCard}>
                               <img src={child}  alt=" " />
                               <h4>Удобный формат</h4>
                               <p>Благодаря современным технологиям мы построили самый лучший и комфортный формат дистанционного обучения</p>
                               </div> 
                           </Col>

                            <Col sm={12} md={6} lg={6}>
                           <div className={styles.rightCard}>
                               <img src={rightImg} alt=" "/>
                               <h4>Выжимаем максимум</h4>
                               <p>Мы проводим исключительно индивидуальные занятия, чтобы передать максимум знаний и опыта вашему ребенку</p>
                           </div>
                           </Col>
                       </Row>
                    </div>
            
                </div>
            </div>


            <div className={styles.codecrafMain}>
             <h2 className={styles.title}>Почему выбирают <span>codecraft</span></h2>
             <div className={styles.codecraf }>
                 <div className={styles.boxNash}>
                 <Row>
                     <Col sm={12} md={6} lg={4}>
                     <div >
                         <img src={image1} />
                         <h4>Самые клёвые инструкторы</h4>
                         <p>Инструкторы Codecraft - молодые, энергичные программисты и айтишники, которые с легкостью найдут общий язык с детьми и помогут им понять даже самые сложные нюансы программирования</p>
                     </div>
                     </Col>

                     <Col sm={12} md={6} lg={4}>
                         <img src={image2}/>
                         <h4>Индивидуальный подход</h4>
                         <p>Мы умеем находить индивидуальный подход ко всем нашим ученикам, учитывая их разные характерные особенности</p>
                     </Col>

                    <Col sm={12} md={6} lg={4}> 
                    <img src={image3}/>
                    <h4>Современные технологии</h4>
                    <p>Мы всегда следим за актуальностью наших учебных программ, следуя всевозможным современным тенденциям</p>
                    </Col>
         
                      <Col  sm={12} md={6} lg={4}>
                          <div>
                              <img src={image4} />
                              <h4>Удобный график занятий</h4>
                              <p>Мы строим индивидуальный график занятий для каждого ученика, поэтому заниматься можно в любое удобное для Вас время</p>
                          </div>
                      </Col>
                              <Col sm={12} md={6} lg={4}>
                                  <div>
                                      <img src={image5} />
                                      <h4>Обучение из любой точки мира</h4>
                                      <p>Благодаря дистанционной форме обучения, Вам не приходиться тратить время на дорогу, заниматься можно в любом удобном месте</p>
                                  </div>
                              </Col>
                              <Col sm={12} md={6} lg={4}> 
                              <div>
                                  <img src={image6} />
                                  <h4>Сертификат по окончанию</h4>
                                  <p>Все ребята, при успешном завершении курса, получают от нашей школы подтверждающий сертификат с выпиской про оценки</p>
                              </div>
                              </Col>
                      </Row>
             </div>
             </div>
            </div>

        </div>
        )
    }
}

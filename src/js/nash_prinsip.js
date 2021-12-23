import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import imgs from '../img/child.jpg';
import child from '../img/child.png';
import rightImg from '../img/1111.png';
import gril from '../img/kk.jpg';
import { Container,Col,Row} from 'react-bootstrap';
import styles from '../css/nashPrinsip.module.css';
export default function nash_prinsip() {
    return (
        <div>
            <div className={styles.main}>
            <Container>
                <div className={styles.mainBox}>
                    <Row>
                        <h2 className={styles.title}>Наши принципы <span>преподавания</span></h2>
                    <Col sm={12} md={12} lg={6} xxl={6}>
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

                         <Col sm={12} md={12} lg={6} xxl={6}>
                          <img className={styles.img} src={imgs}/>
                          <img className={styles.imgs} src={gril} />
                         </Col>
                    </Row>
                    </div>
              
                       <Row>
                           <Col sm={12} md={6} lg={6}>
                           <div className={styles.leftCard}>
                               <img src={child}/>
                               <h4>Удобный формат</h4>
                               <p>Благодаря современным технологиям мы построили самый лучший и комфортный формат дистанционного обучения</p>
                               </div> 
                           </Col>

                            <Col sm={12} md={6} lg={6}>
                           <div className={styles.rightCard}>
                               <img src={rightImg}/>
                               <h4>Выжимаем максимум</h4>
                               <p>Мы проводим исключительно индивидуальные занятия, чтобы передать максимум знаний и опыта вашему ребенку</p>
                           </div>
                           </Col>
                       </Row>
                  
                </Container>
            </div>
        </div>
    )
}

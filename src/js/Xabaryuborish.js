import React, { Component } from 'react'
import { Row,Col } from 'react-bootstrap'
import s from '../css/Xabaryuborish.module.css'
import '../App.css'
export default class Xabaryuborish extends Component {
    render() {
        return (
            <div> 
                 <h1 className={s.title}>ЗАПИШИТЕСЬ НА <span>БЕСПЛАТНЫЙ МАСТЕР-КЛАСС</span></h1>
         <Row className={s.row1}>
             <Col lg={6} className={s.uchtalik1}>
                 <div className={s.asosiy1}>
                 <div className={s.rasm1}>ww</div>
                 <div className={s.ikkitalik1}>
                 Мы поможем вам определиться и подобрать подходящее направление для вашего ребенка
                 </div>
                 </div>
                 <div className={s.asosiy1}>
                 <div className={s.rasm1}>ww</div>
                 <div className={s.ikkitalik1}>
                 Вы познакомитесь с преподавателем и посмотрите как проходят наши занятия
                 </div>
                 </div>
                 <div className={s.asosiy1}>
                 <div className={s.rasm1}>ww</div>
                 <div className={s.ikkitalik1}>
                 Ребенок проведет свое время с пользой, узнает что-то новое и создаст первый проект
                 </div>
                 </div>
</Col>
             <Col lg={6} ></Col>
         </Row>       
            </div>
        )
    }
}

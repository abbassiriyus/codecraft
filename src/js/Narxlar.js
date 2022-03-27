import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import s from '../css/Narxlar.module.css'
import orta1 from '../img/orta1.png'
import yuqori1 from '../img/yuqori1.png'
import past1 from '../img/past1.png'
import orta2 from '../img/orta2.png'
import yuqori2 from '../img/yuqori2.png'
import past2 from '../img/past2.png'
import past12 from '../img/past12.png'
import orta3 from '../img/orta3.png'
import yuqori3 from '../img/yuqori3.png'
import past3 from '../img/past3.png'
import past13 from '../img/past13.png'
export default class Narxlar extends Component {
  render() {
    return (
      <div className={s.hammasi}>
<h1 className={s.title}>Стоимость <span> курсов</span></h1>
<Container fluid>
<Row className={s.row}>
<Col lg={4}  md={6} >
<div className={s.card1}>
<h3>Занятия в группах
онлайн</h3>
<img src={yuqori1} className={s.yuqori1} alt=" "/>
<img src={past1} className={s.past1} alt=" "/>
<img src={past12} className={s.past12} alt=" "/>
<img src={orta1} className={s.rasm1} alt=" "/>
<h3>По выходным дням</h3>
<h2>от 700 000 сум</h2>
</div>
</Col>
<Col lg={4}  md={6}><div className={s.card1}>
<h3>Занятия в группах
оффлайн</h3>
<img src={yuqori2} className={s.yuqori2} alt=" "/>
<img src={past2} className={s.past1} alt=" "/>
<img src={past12} className={s.past122} alt=" "/>
<img src={orta2} className={s.rasm1} alt=" "/>
<h3>По будням 
и выходным дням</h3>
<h2>от 650 000 сум</h2>
</div></Col>
<Col lg={4}  md={6}><div className={s.card1}>
<h3>Персональные 
онлайн и оффлан</h3>
<img src={yuqori3} className={s.yuqori1} alt=" "/>
<img src={past3} className={s.past1} alt=" "/>
<img src={past13} className={s.past123} alt=" "/>
<img src={orta3} className={s.rasm1} alt=" "/>
<h3>Индивидуальное
расписание</h3>
<h2>от 1 000 000 сум</h2>
</div></Col>
</Row></Container>
      </div>
    )
  }
}

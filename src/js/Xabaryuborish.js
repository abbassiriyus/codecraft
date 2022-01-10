import React, { Component } from 'react'
import { Row,Col, Form, Button } from 'react-bootstrap'
import s from '../css/Xabaryuborish.module.css'
import y from '../img/koz.png'
import robot from '../img/robort.png'
import '../App.css'
export default class Xabaryuborish extends Component {
    render() {
        return (
            <div className={s.hammasi1}> 
                 <h1 className={s.title}>ЗАПИШИТЕСЬ НА <span>БЕСПЛАТНЫЙ МАСТЕР-КЛАСС</span></h1>
         <Row className={s.row1}>
             <Col lg={6} className={s.uchtalik1}>
                 <div style={{display:'flex'}} className={s.as}>
                 <Form style={{width:'100%'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Имя</Form.Label>
    <Form.Control  type="text" placeholder="Введите имя..." />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Фамилия</Form.Label>
    <Form.Control type="text" placeholder="введите фамилию..." />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Номер телефона</Form.Label>
    <Form.Control type="tel" placeholder="введите телефона номер..." />
    <Form.Text className="text-muted">
    Введите свой номер телефона
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>  <img width="120" height="120" className={s.robit} src='https://pngimg.com/uploads/robot/robot_PNG40.png'/>
</div></Col>
             <Col lg={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<div>

   <div className={s.asosiy1}>
                 <div className={s.rasm1}><img  width="100%"  src="https://pngimg.com/uploads/robot/robot_PNG79.png"/></div>
                 <div className={s.ikkitalik1}>
                 Мы поможем вам определиться и подобрать подходящее направление для вашего ребенка
                 </div>
                 </div>
                 <div className={s.asosiy1}>
                 <div className={s.rasm1}><img  width="100%"  src="https://pngimg.com/uploads/robot/robot_PNG79.png"/></div>
                 <div className={s.ikkitalik1}>
                 Вы познакомитесь с преподавателем и посмотрите как проходят наши занятия
                 </div>
                 </div>
                 <div className={s.asosiy1}>
                 <div className={s.rasm1}><img width="100%"  src="https://pngimg.com/uploads/robot/robot_PNG79.png"/></div>
                 <div className={s.ikkitalik1}>
                 Ребенок проведет свое время с пользой, узнает что-то новое и создаст первый проект
                 </div>
                 </div>

</div>
             </Col>
         </Row>       
            </div>
        )
    }
}

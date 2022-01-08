import React, { Component } from 'react'
import { Row,Col, Form, Button } from 'react-bootstrap'
import s from '../css/Xabaryuborish.module.css'
import y from '../img/koz.png'
import '../App.css'
export default class Xabaryuborish extends Component {
    render() {
        return (
            <div className={s.hammasi1}> 
                 <h1 className={s.title}>ЗАПИШИТЕСЬ НА <span>БЕСПЛАТНЫЙ МАСТЕР-КЛАСС</span></h1>
         <Row className={s.row1}>
             <Col lg={6} className={s.uchtalik1}>
                 <div style={{display:'flex'}} className={s.as}>
                 <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>  <img width="120" height="120" className={s.robit} src='https://pngimg.com/uploads/robot/robot_PNG40.png'/>
</div></Col>
             <Col lg={6} >
<div>

   <div className={s.asosiy1}>
                 <div className={s.rasm1}><img  width="100%"  src={y}/></div>
                 <div className={s.ikkitalik1}>
                 Мы поможем вам определиться и подобрать подходящее направление для вашего ребенка
                 </div>
                 </div>
                 <div className={s.asosiy1}>
                 <div className={s.rasm1}><img  width="100%"  src={y}/></div>
                 <div className={s.ikkitalik1}>
                 Вы познакомитесь с преподавателем и посмотрите как проходят наши занятия
                 </div>
                 </div>
                 <div className={s.asosiy1}>
                 <div className={s.rasm1}><img width="100%"  src={y}/></div>
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

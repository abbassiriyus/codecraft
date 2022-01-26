
import React, { Component } from 'react';
import { Row,Col, Form, Button } from 'react-bootstrap';
import s from '../css/Xabaryuborish.module.css';
import { MdWavingHand } from "react-icons/md";
import koz from '../img/koz.png'
import ochkiy from '../img/ochkiy.png'
import yulduz from '../img/yulduz.png'
import axios from 'axios';
export default class Xabaryuborish extends Component {
  state={
    ism:'',
    nomer:''
  }
  anima=()=>{
    document.querySelector('#df').style=""
  }
yuborish=()=>{
const t=document.querySelector('#tel').value
const  f=document.querySelector('#fam').value
const  i=document.querySelector('#ism').value
  axios.get('https://api.telegram.org/bot5043091089:AAGUna36ZRubuSNAEulUgJ-vt8utcQbE-9M/sendMessage?chat_id=462196488&text='+'ismi: '+{i}+'   Familiya: '+{f}+'   Nomer: '+{t})
  
}

    render() {
        return (
            <div className={s.hammasi1}> 
                 <h1 id='xabar' className={s.title}>ЗАПИШИТЕСЬ НА <span>БЕСПЛАТНЫЙ МАСТЕР-КЛАСС</span></h1>
         <Row className={s.row1}>
             <Col lg={6} className={s.uchtalik1}>
                 <div style={{display:'flex'}} className={s.as}>
                 <Form style={{width:'100%'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Имя</Form.Label>
    <Form.Control id='ism'  type="text" placeholder="Введите имя..." />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Фамилия</Form.Label>
    <Form.Control id='fam' type="text" placeholder="введите фамилию..." />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Номер телефона</Form.Label>
    <Form.Control id='tel' type="tel" placeholder="введите телефона номер..." />
    <Form.Text className="text-muted" >
    Введите свой номер телефона
    </Form.Text>
  </Form.Group>
<div style={{width:'100%',margin:'auto',textAlign:'center'}}>
  <Button id={s.df}   className={s.xabarBtn} onClick={this.yuborish}>
    <MdWavingHand className='mx-3'/>
    Записаться
  </Button></div>
</Form>  <img width="120" height="120" className={s.robit} src='https://pngimg.com/uploads/robot/robot_PNG40.png' alt=" "/>
</div></Col>
             <Col lg={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<div>

   <div className={s.asosiy1}>
                 <div className={s.rasm1}><img alt=" " width="100%"  src={koz}/></div>
                 <div className={s.ikkitalik1}>
                 Мы поможем вам определиться и подобрать подходящее направление для вашего ребенка
                 </div>
                 </div>
                 <div style={{marginTop:'50px'}} className={s.asosiy1}>
                 <div className={s.rasm1}><img alt=" " width="100%"   src={ochkiy}/></div>
                 <div className={s.ikkitalik1}>
                 Вы познакомитесь с преподавателем и посмотрите как проходят наши занятия
                 </div>
                 </div>
                 <div style={{marginTop:'50px'}} className={s.asosiy1}>
                 <div className={s.rasm1}><img alt=" " width="100%"  src={yulduz}/></div>
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

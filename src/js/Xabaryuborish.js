
import React, { Component } from 'react';
import { Row,Col, Form, Button, Modal, Container } from 'react-bootstrap';
import s from '../css/Xabaryuborish.module.css';
import koz from '../img/koz.png';
import modalr from '../img/robo11.png';
import modalt from '../img/Shape10.png';
import ochkiy from '../img/ochkiy.png'
import yulduz from '../img/yulduz.png'
import robot from '../img/robot.png'
import elipe from '../img/Ellipse33.png'
import axios from 'axios';
import 'antd/dist/antd.css';
import 'antd-country-phone-input/dist/index.css';
import down1 from '../img/premium-icon-down-arrow-3840825 1.png'
import down2 from '../img/premium-icon-down-arrow-3840825 2.png'


export default class Xabaryuborish extends Component {
  state={
    ism:'',
    nomer:'',
    show:false,
    show2:false
  }
  anima=()=>{
    document.querySelector('#df').style=""
  }
  open=()=>{
    this.setState({show:true})
    document.querySelector('#tel').value="+9989";
    document.querySelector('#fam').value="";
    document.querySelector('#fam1').value="";
    document.querySelector('#ism').value="" 
  }
  open2=()=>{
    this.setState({show2:true})
  }
  close2=()=>{
    this.setState({show2:false})
  }
  close=()=>{
    this.setState({show:false})
  }
yuborish=()=>{
var t=document.querySelector('#tel').value;
var f=document.querySelector('#fam').value;
var f1=document.querySelector('#fam1').value;
var i=document.querySelector('#ism').value 
  axios.get('https://api.telegram.org/bot5043091089:AAGUna36ZRubuSNAEulUgJ-vt8utcQbE-9M/sendMessage?chat_id=462196488&text='+'ismi: '+`${i}`+'   Familiya: '+`${f}`+'   Nomer: '+'%2B'+`${t}`+'  Kurs: '+`${f1}`)
  axios.get('https://api.telegram.org/bot5043091089:AAGUna36ZRubuSNAEulUgJ-vt8utcQbE-9M/sendMessage?chat_id=5087964552&text='+'ismi: '+`${i}`+'   Familiya: '+`${f}`+'   Nomer: '+'%2B'+`${t}`+'  Kurs: '+`${f1}`)
  axios.get('https://api.telegram.org/bot5043091089:AAGUna36ZRubuSNAEulUgJ-vt8utcQbE-9M/sendMessage?chat_id=897831465&text='+'ismi: '+`${i}`+'   Familiya: '+`${f}`+'   Nomer: '+'%2B'+`${t}`+'  Kurs: '+`${f1}`)
  axios.get('https://api.telegram.org/bot5043091089:AAGUna36ZRubuSNAEulUgJ-vt8utcQbE-9M/sendMessage?chat_id=710414046&text='+'ismi: '+`${i}`+'   Familiya: '+`${f}`+'   Nomer: '+'%2B'+`${t}`+'  Kurs: '+`${f1}`)
  t.length==13?(this.open()):(this.open2())
}
componentDidMount(){
  document.querySelector('#tel').value='+998';
}
    render() {
        return (
            <div className={s.hammasi1}>
              <div className={s.sharw}></div> 
                 <h1 id='xabar' className={s.title}>ЗАПИШИТЕСЬ НА <span>БЕСПЛАТНЫЙ МАСТЕР-КЛАСС</span></h1>
                 <Container fluid>
         <Row className={s.row1}>
         <Col lg={6} md={12} sm={12} xs={12}  style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<div>

   < div className={s.asosiy1}>
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
         
             <Col lg={6} md={12} sm={12} xs={12} className={s.uchtalik1}>
                 <div style={{display:'flex'}} className={s.as}>
                 <Form style={{width:'100%'}}>
        <img width="120" height="120" className={s.robit} src={robot} alt=" "/>
        <h3 className={s.hash3}>Заявка на мастер-класс</h3>
<div style={{display:'flex', justifyContent:'space-around'}}>
  
  <div style={{width:'50%'}}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className={s.inputwf}>Имя</Form.Label>
    <Form.Control id='ism' className={s.inputw}  type="text" placeholder="Введите имя..." />
    
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className={s.inputwf}>Фамилия</Form.Label>
    <Form.Control id='fam' className={s.inputw} type="text" placeholder="введите фамилию..." />
  </Form.Group>
</div>
<div style={{width:'50%'}}>
  <Form.Group className="mb-3" controlId="formBasicPassword1">
    <Form.Label className={s.inputwf}>Название курса</Form.Label>
    <Form.Control id='fam1' className={s.inputw} type="text" placeholder="Название курса " />
  </Form.Group>
  
  <Form.Group className="mb-3"  controlId="formBasicPassword">
    <Form.Label className={s.inputwf}>Номер телефона</Form.Label>
    <Form.Control id='tel' type="tel" className={s.inputw} placeholder="введите телефона номер..." />
  </Form.Group></div>
</div>

<div style={{width:'100%',margin:'auto',textAlign:'center'}}>
  <button id={s.df}   className={s.xabarBtn} style={{color:'white'}} onClick={this.yuborish}>
   <img src={down1} className={s.down1} alt=" " />
    Записаться
    <img src={down2} className={s.down2} alt=" "/>
  </button></div>
</Form>  
</div></Col>
         </Row>  </Container>

         
      <Modal show={this.state.show}   className={s.modal}><div className={s.asosmodal}>
<div className={s.fikr}><img width="50%" src={modalt} />
<div className={s.modaltext}>
  <h3>Ваша заявка принята !</h3>
  <span>Вскорем времени наша администрация
с вами свяжется</span>
  </div>
</div>  
<div className={s.robo}><img width="50%"  src={modalr} />

</div><img src={elipe} className={s.shar1} alt=" "/>
<img src={elipe} className={s.shar2} alt=" "/>
<img src={elipe} className={s.shar3} alt=" "/>

<Button variant="primary" onClick={this.close} className={s.modalbutton}><span>Ok</span></Button>
    </div>
      </Modal>     
      <Modal show={this.state.show2}   className={s.modal}><div className={s.asosmodal}>
<div className={s.fikr}><img width="50%" src={modalt} />
<div className={s.modaltext}>
  <h3 style={{color:'red'}}>Ваша заявка непринята !</h3>
  <span style={{color:'red'}}>Вне правильно введён номер</span>
  </div>
</div>  
<div className={s.robo}><img width="50%"  src={modalr} />

</div><img src={elipe} className={s.shar1} alt=" "/>
<img src={elipe} className={s.shar2} alt=" "/>
<img src={elipe} className={s.shar3} alt=" "/>

<Button variant="primary" onClick={this.close2} className={s.modalbutton}><span>Ok</span></Button>
    </div>
      </Modal>  
            </div>
        )
    }
}

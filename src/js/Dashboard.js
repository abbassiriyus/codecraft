import React, { Component } from 'react'
import s from "../css/Dashboard.module.css"
import{  Row, Col } from 'react-bootstrap'
import { MdPhoneInTalk } from 'react-icons/md'
import 'aos/dist/aos.css';
import AOS from 'aos'
import header from '../img/header.png'
import bola from '../img/bolacha1.gif'
import komputer from '../img/komputer.png'
import lemon from '../img/lemon.png'
import team from '../img/team.png'
import online from '../img/online.png'
import kopmboa from '../img/kopmboa.png'
import kompide from '../img/kompide.png'
import { Bounce } from 'react-reveal'
  AOS.init();
export default class Dashboard extends Component {

    render() {
        return (
            <div>


{/* header  */}
<header>

<div className={s.satr}>

<ul> 
      <h1><Bounce top >Мы учим ремеслу
программирования</Bounce></h1>  

<Bounce top ><li>Для детей и подростков от 7 до 18 лет</li>
<li>Учитесь из любой точки мира</li>
<li>С любым уровнем знаний и подготовки</li>
<li>Индивидуально с профессиональным преподавателем</li>
<li>Мы научим вашего ребенка программировать!</li></Bounce>

<a href='#xabar' className={s.myButton}>Записатьсия за бесплатный мастер-класс</a>
</ul>

</div>
<div className={s.rasm}><img style={{right: '-100px'}} id={s.images} data-aos="zoom-in" src={header} alt=' '/></div>
<div className={s.aylana}></div>
</header>


{/* asosiy 6ta imkoniyatlar */}
<main className={s.mativatsiya}>
  <Bounce left cascade ><h1><span style={{color:'orange'}}> 6 причин </span> изучать программирование</h1></Bounce>

  
  <Row className={s.chet}>
    <Col   lg={{order:'first'}} lg={4} md={12}
    >
    <div style={{display:'flex'}} className={s.kard} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} alt="  " src={komputer} /></div>
      <div style={{display:'block'}}>
      <h2>Развивает мышление</h2>
      <p>Создавая программы дети учатся мыслить логически, анализировать, концентрировать внимание и находить решения возникшим проблемам.</p>
      </div>
    </div>
    <div style={{display:'flex'}} className={s.kard} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} style={{borderRadius:"50%"}} alt="  "  src={lemon} /></div>
      <div style={{display:'block'}}>
      <h2>Улучшает способности решать задачи </h2>
      <p>Создавая программы, дети учатся разбивать сложные задачи на более мелкие, применив логику, фантазию и креативность.</p>
      </div>
    </div>
    <div style={{display:'flex'}} className={s.kard} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} alt=" " style={{borderRadius:'50%'}} src={team} /></div>
      <div style={{display:'block'}}>
      <h2>Улучшает успеваемость в школе</h2>
      <p>Программирование - способ использовать на практике абстрактные знания полученные в школе, тем самым повышает интерес к учебе и знаниям у ребенка.</p>
      </div>
    </div>
    </Col>
    <Col  lg={4}  md={12}  md={{order:'first'}} sm={{order:'first'}} style={{display:'flex',justifyContent:'center',alignItems:'center'}}><img data-aos="zoom-in-down" data-aos-duration="3000" width="100%"  src={bola} alt=' '/></Col>
    <Col lg={4}  md={12}>
    <div style={{display:'flex'}} className={s.kard}  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000" >
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} alt=" " src={online} /></div>
      <div style={{display:'block'}}>
      <h2>Укрепляет стойкость</h2>
      <p>Программирование – дело не легкое: каждая сделанная ошибка требует внимательного изучения и поиска ее решения.</p>
      </div>
    </div>
    <div style={{display:'flex'}} className={s.kard}  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} alt=" " style={{borderRadius:'50%'}} src={kopmboa} /></div>
      <div style={{display:'block'}}>
      <h2>Учит работать в команде</h2>
      <p>Работая в группах, дети учатся находить общий язык, сотрудничать и брать ответственность за свои действия в команде.</p>
      </div>
    </div>
    <div style={{display:'flex'}} className={s.kard}  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} alt=" " src={kompide} /></div>
      <div style={{display:'block'}}>
      <h2>Расширяет возможности трудоустройства</h2>
      <p>Так же, как и владение иностранным языком, знание основ программирования в цифровую эпоху — показатель образованности потенциального сотрудника для работодателя.</p>
      </div>
    </div>
    </Col>
  </Row>
</main>





            </div>
        )
    }
}

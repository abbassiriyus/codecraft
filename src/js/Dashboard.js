import React, { Component } from 'react'
import s from "../css/Dashboard.module.css"
import rasm1 from '../img/logo.png'
import{ Navbar,Nav, Row, Col } from 'react-bootstrap'
import { FaBars, FaTelegramPlane } from "react-icons/fa"
import { FaFacebookSquare }from 'react-icons/fa'
import { RiInstagramFill }from 'react-icons/ri'
import 'aos/dist/aos.css';
import AOS from 'aos'
  AOS.init();
export default class Dashboard extends Component {

    render() {
        return (
            <div>
 
 
 
                {/* navbar */}
             <Navbar expand="lg" className={s.navbar}>
  <div class='container-fluid'>
    <Navbar.Brand href="#home"><img className={s.brend} src={rasm1} alt=' '/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'none',boxShadow:'none',position:'relative',right:'20px'}}><FaBars/></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" id={s.sahifa}>
        <Nav.Link id={s.bolim} href="#home">Главная</Nav.Link>
        <Nav.Link id={s.bolim}  href="#home">Курсы</Nav.Link>
        <Nav.Link id={s.bolim} href="#home">Оплата</Nav.Link>
        <Nav.Link id={s.bolim} href="#home">Сертификат</Nav.Link>
      </Nav>
         <div className={s.navicon}>
  <FaFacebookSquare/>
  <RiInstagramFill/>
  <FaTelegramPlane/>
  </div> 
    </Navbar.Collapse>
  </div>

</Navbar> 


{/* header  */}
<header>
<div className={s.satr}>

<ul>
<h1>Мы учим ремеслу
программирования</h1>
<li>Для детей и подростков от 7 до 18 лет</li>
<li>Учитесь из любой точки мира</li>
<li>С любым уровнем знаний и подготовки</li>
<li>Индивидуально с профессиональным преподавателем</li>
<li>Мы научим вашего ребенка программировать!</li>
</ul>
</div>
<div className={s.rasm}><img id={s.images} src='https://freepngimg.com/save/33947-kids-learning-clipart/655x400' alt=' '/></div>
<div className={s.aylana}></div>
</header>


{/* asosiy 6ta imkoniyatlar */}
<main className={s.mativatsiya}>
  <h1><span style={{color:'orange'}}> 6 причин </span> изучать программирование</h1>

  
  <Row className={s.chet}>
    <Col   lg={{order:'first'}} lg={4} md={12}
    >
    <div style={{display:'flex'}} className={s.kard} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} alt="  " src="https://4brain.ru/images/courses/cri.png" /></div>
      <div style={{display:'block'}}>
      <h2>Развивает мышление</h2>
      <p>Создавая программы дети учатся мыслить логически, анализировать, концентрировать внимание и находить решения возникшим проблемам.</p>
      </div>
    </div>
    <div style={{display:'flex'}} className={s.kard} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} style={{borderRadius:"50%"}} alt="  "  src="https://w7.pngwing.com/pngs/209/1016/png-transparent-computer-icons-task-id-miscellaneous-computer-logo.png" /></div>
      <div style={{display:'block'}}>
      <h2>Улучшает способности решать задачи </h2>
      <p>Создавая программы, дети учатся разбивать сложные задачи на более мелкие, применив логику, фантазию и креативность.</p>
      </div>
    </div>
    <div style={{display:'flex'}} className={s.kard} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="3000">
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} alt=" " style={{borderRadius:'50%'}} src="https://www.kindpng.com/picc/m/236-2366695_presentacin-en-tu-colegio-o-instituto-circle-school.png" /></div>
      <div style={{display:'block'}}>
      <h2>Улучшает успеваемость в школе</h2>
      <p>Программирование - способ использовать на практике абстрактные знания полученные в школе, тем самым повышает интерес к учебе и знаниям у ребенка.</p>
      </div>
    </div>
    </Col>
    <Col  lg={4}  md={12}  md={{order:'first'}} sm={{order:'first'}} style={{display:'flex',justifyContent:'center',alignItems:'center'}}><img width="100%"  src='https://thumbs.dreamstime.com/b/adorable-child-using-laptop-21973756.jpg' alt=' '/></Col>
    <Col lg={4}  md={12} data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
     data-aos-duration="2000">
    <div style={{display:'flex'}} className={s.kard} >
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} alt=" " src="https://neurospectrum.ru/wp-content/uploads/mask-group-3-1.png" /></div>
      <div style={{display:'block'}}>
      <h2>Укрепляет стойкость</h2>
      <p>Программирование – дело не легкое: каждая сделанная ошибка требует внимательного изучения и поиска ее решения.</p>
      </div>
    </div>
    <div style={{display:'flex'}} className={s.kard}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} alt=" " style={{borderRadius:'50%'}} src="https://key0.cc/images/preview/2098982_b6e8fa1142169a63f9596e00e503e200.png" /></div>
      <div style={{display:'block'}}>
      <h2>Учит работать в команде</h2>
      <p>Работая в группах, дети учатся находить общий язык, сотрудничать и брать ответственность за свои действия в команде.</p>
      </div>
    </div>
    <div style={{display:'flex'}} className={s.kard}>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'30px'}}><img className={s.rasn} alt=" " src="https://duxrec.com/wp-content/uploads/2020/11/teachers-img2.png" /></div>
      <div style={{display:'block'}}>
      <h2>Расширяет возможности трудоустройства</h2>
      <p>Так же, как и владение иностранным языком, знание основ программирования в цифровую эпоху — показатель образованности потенциального сотрудника для работодателя.</p>
      </div>
    </div>
    </Col>
  </Row>
</main>



{/* Наши принципы преподавания */}
{/* <main className={s.asos2}>
<h1>Наши принципы <span style={{color:'orange'}}>преподавания</span> </h1>
<Row className={s.rov2}>
  <Col md={12} lg={6}><div className={s.text2}>
                        <p>Большая часть нашего учебного времени посвящена получению практического опыта при работе над проектами.</p>
                         <p>Работа над проектами побуждает наших студентов выражать себя с помощью кода.</p>
                         <p>Мы позволяем ученикам развиваться в своем темпе, помогая каждому понять и применить предоставленную информацию</p>
                         <p>Инструктор ведет учебный процесс, создает заинтересованность и мотивацию.</p>
                         <p>Поощряем учеников задавать вопросы и искать ответы.</p>
                         <p>Ассистенты инструкторов поддерживают инструкторов, позволяя группам с разными способностями учиться вместе.</p>
                         <p>Проекты основаны на интересах студентов, чтобы вдохновлять их воображение.</p>
                         <p>Атмосфера на уроках поощряет неформальное участие, ролевую игру реальных сценариев и творческое исследование у учеников.</p>
                         <p>Интересные домашние задания. Мы считаем, что ученики должны практиковать то, что они узнали, когда они мотивированы, а не вынуждены.</p>
                        </div></Col>
  <Col md={12} lg={6}>
  <img className={s.img2} src="https://i.gifer.com/7SvE.gif"  style={{borderRadius:"50%"}} alt=" "/>
  </Col>
</Row>
<Row className={s.rov2}>
  <Col></Col>
  <Col></Col>
</Row>

</main> */}


            </div>
        )
    }
}

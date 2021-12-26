import React, { Component } from 'react'
import s from "../css/Dashboard.module.css"
import rasm1 from '../img/logo.png'
import{ Navbar,Nav, Row, Col, Container } from 'react-bootstrap'
import { FaBars, FaTelegramPlane } from "react-icons/fa"
import { FaFacebookSquare }from 'react-icons/fa'
import { RiInstagramFill }from 'react-icons/ri'
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
<main className={s.mativatsiya}>
  <h1><span style={{color:'orange'}}> 6 причин </span> изучать программирование</h1>
<Container>
  
  <Row>
    <Col lg={4} lg={{order:'first'}}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    </Col>
    <Col  lg={4} md={{order:'first'}}>img</Col>
    <Col lg={4}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    </Col>
  </Row>
</Container>
</main>
            </div>
        )
    }
}

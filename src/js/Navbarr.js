import React, { Component } from 'react'
import s from "../css/Dashboard.module.css"
import 'antd/dist/antd.css';
import rasm1 from '../img/logo.png'
import{ Navbar,Nav, } from 'react-bootstrap'
import { FaBars, FaMapMarkerAlt, FaTelegramPlane } from "react-icons/fa"
import { FaFacebookSquare }from 'react-icons/fa'
import { RiInstagramFill }from 'react-icons/ri'
import { Col, Row } from 'react-bootstrap'
import {AiFillInstagram} from 'react-icons/ai';
import {RiPhoneFill} from 'react-icons/ri';
import {ImHeart} from 'react-icons/im';
import styleFooter from '../css/footer.module.css'
import 'aos/dist/aos.css';
import Dashboard from './Dashboard'
import Nash_prinsip from './Nash_prinsip'
import Narxlar from './Narxlar'
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import Allpreyekt2 from './Allpreyekt2'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kurs from './kurs'
import Xabaryuborish from './Xabaryuborish'
import Accordion from './accordion'
import { BsFillTelephoneFill } from 'react-icons/bs'
import '../App.css'
import Python from './Python'

export default class Navbarr extends Component {
  
  render() {
        return (
            <div >
              <div id='body'></div>
              <div className={s.tel}><a  href="tel:+998 99 584 55 51"><BsFillTelephoneFill style={{color:'green'}}/></a></div>
                              {/* navbar */}
             <Navbar style={{position:'fixed'}}  expand="lg" className={s.navbar}>
  <div class='container-fluid'>
    <Navbar.Brand href="/#"><img className={s.brend} src={rasm1} alt=' '/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{border:'none',boxShadow:'none',position:'relative',right:'20px'}}><FaBars/></Navbar.Toggle>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" id={s.sahifa}>
        <Nav.Link id={s.bolim} href="/#" >Главная</Nav.Link>
        <Nav.Link id={s.bolim}   href="/#kurs">Курсы</Nav.Link>
        <Nav.Link id={s.bolim}  href="/teamId">Оплата</Nav.Link>
        <Nav.Link id={s.bolim}  href="/new" to="">Проекты</Nav.Link>
      </Nav>
         <div className={s.navicon}>
  <a  href='https://www.facebook.com/codecraft.uz'><FaFacebookSquare/></a>
  <a href='https://www.instagram.com/codecraft.uz/'><RiInstagramFill/></a>
  <a href='https://t.me/art_of_coding'><FaTelegramPlane/></a>
  </div> 
    </Navbar.Collapse>
  </div>
</Navbar>

<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<div style={{marginTop:'0px'}}><Dashboard/><Nash_prinsip/><Kurs/><Xabaryuborish/><Accordion/></div>}/>
      <Route path="/teamId" element={<Narxlar />} />
      <Route path="/python" element={<Python/>} />
      <Route path="/new" element={<Allpreyekt2 />} />
    </Routes>
  </BrowserRouter>

<div className={s.xarita_oynasi }>
  <div className={s.map1}><YMaps>
  <Map
  width="100%"
  height="100%"
    defaultState={{
      center: [41.327477, 69.345046],
      zoom: 15,
    }}
  >
    <Placemark geometry={[41.329082, 69.336318]} />
    <Placemark geometry={[41.327477, 69.345046]} />
  </Map>
</YMaps>
</div>
<div className={s.manzil}>
<div><FaMapMarkerAlt style={{marginRight:'20px'}} />ул.Салом 1, 241-школа, 6-кабинет, ориентир Чайхана Салом</div>
<div><FaMapMarkerAlt style={{marginRight:'20px'}} />ул.Буюк Ипак Йули 153, 171-школа, 20-кабинет,ориентир гостиница Саёхат</div>
</div>
</div>

<footer>
                
                <div className={styleFooter.footer}>
                    <Row>
                        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                        <h4>О школе</h4>
                        <ul>
                            <li><a href="/#">Главная</a></li>
                            <li><a href="/#pochem">Почему выбирают codecraft</a></li>
                            <li><a href="/new">Сертификат</a></li>
                        </ul>
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                        <h4> Полезная информация</h4>
                        <ul>
                        <li><a href="/#kurs">Курсы обучения</a></li>
                        <li><a href="/teamId">Стоимость и оплата</a></li>
                        <li><a href="/#xabar">Заявка на мастер-класс</a></li>
                        <li><a href="">Часто задаваемые вопросы</a></li>
                        </ul>
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                            <h4>Мы в социальных сетях</h4>
                            <div className={styleFooter.icons}> 
                               <div className={styleFooter.icon}>
                                 <a href='https://www.facebook.com/codecraft.uz'><FaFacebookSquare className={styleFooter.icons1}/></a>
                                <a href='https://www.instagram.com/codecraft.uz/'><AiFillInstagram className={styleFooter.icons1}/></a>
                                <a  href='https://t.me/art_of_coding'><FaTelegramPlane className={styleFooter.icons1}/></a>
                                </div>
                                <div className={styleFooter.footerTel}><a  href="tel:+998 99 300 55 00"><RiPhoneFill/>+998 99 300 55 00</a></div>
                                <div className={styleFooter.footerTel}><a  href="tel:+998 99 584 55 51"><RiPhoneFill/>+998 99 584 55 51</a></div>
                                </div>
                        </Col>
                    </Row>
                    <hr/>

                 <div className={styleFooter.heart}>
                 <div>С любовью </div> <div className={styleFooter.yurakcha}> <ImHeart/></div> <div> Codecraft ©</div>
                 </div>
                </div>

            </footer>


            </div>
        )
    }
}

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
import Nashprinsip from './Nashprinsip'
import Narxlar from './Narxlar'
import { Map, Placemark, YMaps } from 'react-yandex-maps';
import Allpreyekt from './Allpreyekt'
import Allpreyekt2 from './Allpreyekt2'
// import Admin from '../Admin/js/Menu1'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kurs from './kurs'
import Xabaryuborish from './Xabaryuborish'
import Accordion from './accordion'
import { BsFillTelephoneFill } from 'react-icons/bs'
import '../App.css'
import Python from './Python'
import Scratch from './Scratch'
import Javaskript from './Javaskript'
import PHP from './PHP'
import MentalArifmetika from './MentalArifmetika';
import image31 from '../img/image31.png'
import image32 from '../img/image32.png'
import image33 from '../img/image33.png'
import image34 from '../img/image34.png'
import image35 from '../img/image35.png'
import image36 from '../img/image36.png'
import tiue from '../img/tiue.png'
import ITpark from '../img/ITpark.png'
import Carousel1 from './Carousel1';

export default class Navbarr extends Component {
  state={
    token:''
  }


  render() {
        return (
            <div >
              <div id='body'></div>
                              {/* navbar */}
             <Navbar style={{position:'fixed',zIndex:'13232'}}  expand="lg" className={s.navbar}>
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
      <Route exact path="/" element={<div style={{marginTop:'0px'}}><Dashboard/><Nashprinsip/><Kurs/><Xabaryuborish/><Accordion/><Carousel1/></div>}/>
      <Route path="/teamId" element={<Narxlar />} />
      <Route path="/python" element={<Python/>} />
      <Route path="/scratch" element={<Scratch/>} />
      <Route path="/javascript" element={<Javaskript />} />
      <Route path="/php" element={<PHP />} />
      <Route path="/mentalarifmetika" element={<MentalArifmetika />} />
      <Route path="/new" element={<Allpreyekt />} />
      <Route path="/new2" element={<Allpreyekt2 />} />
    </Routes>
  </BrowserRouter>











<div className={s.xarita_oynasi}>
<h1 className={s.title} style={{zIndex:'123213'}}>Площадки <span>Codecraft</span></h1>
<div className={s.shar31}></div>
<div className={s.shar32}></div>
<div className={s.shar33}></div>
<div className={s.shar34}></div>
<div className={s.shar35}></div>
<div className={s.shar36}></div>
  <div className={s.map1}><YMaps>
  <Map
className={s.xarita}

    defaultState={{
      center: [41.327477, 69.345046],
      zoom: 12,
    }}
  >
    <Placemark geometry={[41.329082, 69.336318]} />
    <Placemark geometry={[41.327477, 69.345046]} />
    <Placemark geometry={[41.338663, 69.334790]} />
  </Map>
</YMaps>
</div>
<div className={s.manzil}>
<div><FaMapMarkerAlt style={{marginRight:'20px',color:'#FFFFFF'}} />241-школа, 6-кабинет, ул.Салом 1. Ориентир: Чайхана Салом</div>
<div><FaMapMarkerAlt style={{marginRight:'20px',color:'#FFFFFF'}} />171-школа, 20-кабинет, ул.Буюк Ипак Йули 153. Ориентир: гостиница Саёхат</div>
<div><FaMapMarkerAlt style={{marginRight:'20px',color:'#FFFFFF'}} />ИНХА, Блок Б 204 кабинет. Зиёлилар, 9а Буз-1 ж/м, Мирзо-Улугбекский район.</div>
</div>
</div>






<footer>
<div className={styleFooter.boglanish}>
<h1 className={styleFooter.title}>Мы в <span>соц.сетях</span></h1>
<div className={styleFooter.iconsrasm}>
  <a href="https://www.instagram.com/codecraft.uz/"><img src={image31} alt=" "/></a>
  <a href="https://www.facebook.com/codecraft.uz"><img src={image32}  alt=" "/></a>
  <a href="tel:+998 99 300 55 00"><img src={image33}  alt=" "/></a>
  <a href="https://t.me/art_of_coding"><img src={image34}  alt=" "/></a>
  <a href="https://t.me/CodecraftEDU_bot"><img src={image35}  alt=" "/></a>
  <a href="https://youtube.com/channel/UCHd-4cHn99KPJT53EXpKO5Q"><img src={image36}  alt=" "/></a>
  
  </div>
  </div>




                <div className={styleFooter.footer}>
                  <hr height="4px" />

                    <Row>
                    <Col sm={12} md={12} lg={3} xl={3} xxl={3}>
                            <h3>Телефон</h3>
                            <div className={styleFooter.icons}> 
                                <div className={styleFooter.footerTel}><a href="tel:+998 99 300 55 00">+998 99<span>300 55 00</span> </a></div>
                                <div className={styleFooter.footerTel}><a href="tel:+998 99 584 55 51">+998 99<span>584 55 51</span></a></div>
                                </div>
                        </Col>
                        <Col sm={12} md={12} lg={3} xl={3} xxl={3}>
                        <h3>График работы</h3>
                        <div className={styleFooter.icons}> 
                                <div className={styleFooter.footerTel}><a>Пн-Пт:<span>10:00-20:00</span></a></div>
                                <div className={styleFooter.footerTel}><a>Сб-Вс:<span>11:00-20:00</span></a></div>
                                </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                        <div className={styleFooter.xomiyla}>
                        <h3> Наши партнеры:</h3>
                        <img src={tiue} alt=" "/>
                        <img src={ITpark} alt=" "/>
                      </div>
                        </Col>
                    </Row>
                    

                 <div className={styleFooter.heart}>
                 <div>С любовью </div> <div className={styleFooter.yurakcha}> <ImHeart/></div> <div> Codecraft ©</div>
                 </div>
                </div>

            </footer>


            </div>
        )
    }
}

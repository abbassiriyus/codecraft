import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaFacebookSquare } from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';
import {RiPhoneFill} from 'react-icons/ri';
import {ImHeart} from 'react-icons/im';
import styleFooter from '../css/footer.module.css'
import 'aos/dist/aos.css';
export default function footer() {
    return (
        <div>
            <footer>
                
                <div className={styleFooter.footer}>
                    <Row>
                        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                        <h4>О школе</h4>
                        <ul>
                            <li><a href="">Главная</a></li>
                            <li><a href="">Почему выбирают codecraft</a></li>
                            <li><a href="">Сертификат</a></li>
                            <li><a href="tel:+998 99 300 55 00">наш номер: <span>+998 99 300 55 00</span></a></li>
                        </ul>
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                        <h4> Полезная информация</h4>
                        <ul>
                        <li><a href="">Курсы обучения</a></li>
                        <li><a href="">Стоимость и оплата</a></li>
                        <li><a href="">Заявка на мастер-класс</a></li>
                        <li><a href="">Часто задаваемые вопросы</a></li>
                        </ul>
                        </Col>
                        <Col sm={12} md={12} lg={4} xl={4} xxl={4}>
                            <h4>Мы в социальных сетях</h4>
                            <div className={styleFooter.icons}> 
                               <div className={styleFooter.icon}>
                                 <a><FaFacebookSquare className={styleFooter.icons1}/></a>
                                <a><AiFillInstagram className={styleFooter.icons1}/></a>
                                <a><FaTelegramPlane className={styleFooter.icons1}/></a>
                                </div>
                                <div className={styleFooter.footerTel}><a href="tel:+998 99 300 55 00"><RiPhoneFill/>+998 99 300 55 00</a></div>
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

import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import rasmc from '../img/1.png'
import sertifekat from '../css/certificate.module.css'
export default class certificate extends Component {
     
    render() {
       return (
            <div>
              <div className={sertifekat.container}>
              <div className={sertifekat.cards}>
              <Row>
               <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
               <div className={sertifekat.textTitle}>
               <h2>Язык программирования Python</h2>
                <p>Python - это язык программирования, который активно используеться в разработке веб-сайтов, игр и программ. Благодаря своей простоте и понятности, этот язык идеально подходит для новичков.</p> 
               </div>
               
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div className={sertifekat.imgs}> 
                        <img src={rasmc}/>
                    </div>
                </Col>
               
               </Row>
               </div>
               
               <div className={sertifekat.cards}>
              <Row>
               <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
               <div className={sertifekat.textTitle}>
               <h2>Язык программирования Javascript</h2>
                <p>Javascript - это один из самых востребованных языков программирования на сегодня. Владея этим языком, можно создавать почти всё: веб-сайты, игры и программы для любых электронных устройств,и архитектуру сайта.</p> 
               </div>
               
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div className={sertifekat.imgs}> 
                        <img src={rasmc}/>
                    </div>
                </Col>
               
               </Row>
               </div>

               <div className={sertifekat.cards}>
              <Row>
               <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
               <div className={sertifekat.textTitle}>
               <h2> MIT App Inventor 2 OC Android</h2>
                <p>это визуальный конструктор приложений для Android. Таким образом, несмотря на то, что основным языком создания программ для Android является Java, в случае использования App Inventor совершенно не требуется.</p> 
               </div>
               
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div className={sertifekat.imgs}> 
                        <img src={rasmc}/>
                    </div>
                </Col>
               
               </Row>
               </div>

               <div className={sertifekat.cards}>
              <Row>
               <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
               <div className={sertifekat.textTitle}>
               <h2>Язык программирования Python</h2>
                <p>Python - это язык программирования, который активно используеться в разработке веб-сайтов, игр и программ. Благодаря своей простоте и понятности, этот язык идеально подходит для новичков.</p> 
               </div>
               
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div className={sertifekat.imgs}> 
                        <img src={rasmc}/>
                    </div>
                </Col>
               
               </Row>
               </div>

               <div className={sertifekat.cards}>
              <Row>
               <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
               <div className={sertifekat.textTitle}>
               <h2>Язык программирования Python</h2>
                <p>Python - это язык программирования, который активно используеться в разработке веб-сайтов, игр и программ. Благодаря своей простоте и понятности, этот язык идеально подходит для новичков.</p> 
               </div>
               
                </Col>
                <Col sm={12} md={12} lg={6} xl={6} xxl={6}>
                    <div className={sertifekat.imgs}> 
                        <img src={rasmc}/>
                    </div>
                </Col>
               
               </Row>
               </div>

              </div>
            </div>
        )
    }
}

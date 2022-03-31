import React from 'react';
import { Col, Row } from 'react-bootstrap';
import skript from '../css/Javaskript.module.css'
import imgs from '../img/javascriptimg.png'
import chapmushak from '../img/ongmushak.png'
import ongmushak from '../img/chapmushak.png'
import internet from '../img/icon-internet.png'
import keyboardicon from '../img/icon-keyboard.png'
import laptop from '../img/icon-laptop.png'
import money from '../img/icon-money.png'
import padlock from '../img/icon-padlock.png'
import programming from '../img/icon-programming.png'

const Javaskript = () => {
    return (
        <div >  
            <div className={skript.box}> 
                <div>
                <h2 className={skript.headingTitle}>Язык программирования JavaScript</h2>
                <div className={skript.mains}>
               <Row>
              <Col md={12} lg={6} xl={6} xxl={6}>
                <div className={skript.headingName}>
                    <h4>Основы программирования на Java</h4>
<p>Java — это язык программирования который следует принципу «Написать один раз и использовать везде». Java можно найти везде, это основной язык разработки для Android, веб-приложений, правительственных веб-сайтов и технологий обработки больших данных, также java подходит и для научных проектов, особенно в области <span className={skript.texts}>обработки естественного языка</span>.</p>                 
                    </div>
              </Col>
              <Col md={12} lg={6} xl={6} xxl={6} className={skript.imgshadow}><div className={skript.boxshadow}></div><img className={skript.imgsjavascript} src={imgs}  />
              </Col>
               </Row>
               </div>
                    </div>

                    {/* 2-BOLIM */}

                    <div className={skript.section}>
                 <h2>Преимущества     <img className={skript.ongmushakimg} src={ongmushak}/>Java
                 <img className={skript.chapmushakimg} src={chapmushak}/>
                 </h2>
                 <div className={skript.boxText}>
                    <Row>
                        <Col md={6} lg={4} xl={3} xxl={3}>
                        <div className={skript.coloryellow}>
                        <img  src={programming}/>
                        <h4>Объектно-ориентированное программирование</h4>
<p>Java включает в себя концепцию, в которой вы не только определяете тип данных и его структуру, но и набор функций, применяемых к нему.</p>
                        </div>
                        </Col>
                        <Col md={6} lg={4} xl={3} xxl={3}>
                            <div  className={skript.coloryellow}>
                            <img src={keyboardicon} />
                                <h4>Простой синтаксис</h4>
<p>Синтаксис Java основан на C ++, поэтому Java похожа на C. Тем не менее, синтаксис Java проще, что позволяет новичкам быстрее учиться и эффективнее использовать код для достижения конкретных результатов.</p>
                            </div> 
                        </Col>
                        <Col md={6} lg={4} xl={3} xxl={3}>
                            <div  className={skript.coloryellow}>
                        <img src={internet} />
                        <h4>Java – везде</h4>
<p>Java используется на более чем 3 млрд устройствах по всему миру. Ни один другой язык не работает так на других устройствах. Java позволяет создавать программы, которые работают практически в любом месте.</p>
                            </div>
                        </Col>
                        <Col md={6} lg={4} xl={3} xxl={3}>
                        <div  className={skript.coloryellow}>
                        <img src={money} />
                        <h4>Востребованность на бирже труда</h4>
<p>Потребность в Java-программистах не утихает. Более того, она только растёт. Поскольку лучшее решение для корпоративных серверов баз данных – Java, вас с радостью возьмут даже с начальными знаниями ООП.</p>
                        </div>
                        </Col>
                        <Col md={6} lg={4} xl={3} xxl={3}>
                            <div  className={skript.coloryellow}>
                        <img  src={padlock}/>
                                <h4>Безопасность</h4>
<p>В Java есть Security Manager, созданная для каждого приложения политика безопасности, в которой можно указать правила доступа. Это позволяет запускать приложения Java в «песочнице» и устранять таким образом уязвимости.</p> 
                            </div>
                        </Col>
                        <Col md={6} lg={4} xl={3} xxl={3}>
                        <div  className={skript.coloryellow}>
                        <img src={laptop} />
                        <h4>Независимость от платформы</h4>
<p>«Написать один раз и использовать везде» — фраза, которой описываются кросс-платформенные возможности Java. Можно создать Java-приложение на Windows и запустить его на любой другой платформе, поддерживающей виртуальную машину Java.</p>
                        </div>
                        </Col>
                    </Row>
                </div>
                </div>
                </div>
               
               

                <div>loremmmm</div>
        </div>
    );
};


export default Javaskript;
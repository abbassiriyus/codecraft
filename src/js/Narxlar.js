import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import s from '../css/Narxlar.module.css'
import { Accordion } from 'react-bootstrap'
import accordionstyle from '../css/accordion.module.css'
import { FaDollarSign, FaEuroSign, FaRubleSign } from 'react-icons/fa'
export default class Narxlar extends Component {
state={
    id:0,
    key:0
}
 soati1=()=>{
this.setState({id:0})
document.querySelector('#soati1').style="background-color: #9727af;"
document.querySelector('#soati2').style="background-color: none;"
document.querySelector('#soati3').style="background-color: none;"
 }  
 soati2=()=>{
    this.setState({id:1})
    document.querySelector('#soati1').style="background-color: none;"
    document.querySelector('#soati2').style="background-color: #9727af;"
    document.querySelector('#soati3').style="background-color: none;"
}    
soati3=()=>{
    this.setState({id:2})
    document.querySelector('#soati1').style="background-color: none;"
    document.querySelector('#soati2').style="background-color: none;"
    document.querySelector('#soati3').style="background-color: #9727af;"
} 
rub1=()=>{
    this.setState({key:0})
    document.querySelector('#rub').style="background-color: #9727af;"
    document.querySelector('#uzb').style="background-color: none;"
    document.querySelector('#usd').style="background-color: none;"
    document.querySelector('#eur').style="background-color: none;"
}
uzb1=()=>{
    this.setState({key:1})
    document.querySelector('#uzb').style="background-color: #9727af;"
    document.querySelector('#rub').style="background-color: none;"
    document.querySelector('#usd').style="background-color: none;"
    document.querySelector('#eur').style="background-color: none;"
}
usd1=()=>{
    this.setState({key:2})
    document.querySelector('#usd').style="background-color: #9727af;"
    document.querySelector('#uzb').style="background-color: none;"
    document.querySelector('#rub').style="background-color: none;"
    document.querySelector('#eur').style="background-color: none;"
}
eur1=()=>{
    this.setState({key:3})
    document.querySelector('#eur').style="background-color: #9727af;"
    document.querySelector('#uzb').style="background-color: none;"
    document.querySelector('#rub').style="background-color: none;"
    document.querySelector('#usd').style="background-color: none;"
}
color=()=>{
    document.querySelector('#rub').style="background-color: #9727af;"
    document.querySelector('#uzb').style="background-color: none;"
    document.querySelector('#usd').style="background-color: none;"
    document.querySelector('#eur').style="background-color: none;"
    document.querySelector('#soati1').style="background-color: #9727af;"
    document.querySelector('#soati2').style="background-color: none;"
    document.querySelector('#soati3').style="background-color: none;" 
}
componentDidMount(){
    this.color()
}

    render() {
        return (
            <div >
                <header className={s.header1}>
               <h1> Стоимость и оплата занятий</h1>
                </header>
                <h1 style={{margin:'auto',textAlign:'center',marginBottom:'50px',marginTop:'50px'}}>Индивидуальные и группавые занятия</h1>
                <div  className={s.soat}> 
<div className={s.soati1} id='soati1' onClick={this.soati1}>Онлайн 1.5 часа</div>
<div className={s.soati2} id='soati2'  onClick={this.soati2}>Оффлайн 2 часа</div>
<div className={s.soati2} id='soati3'  onClick={this.soati3}>Индивидуальные занятия 1.5 часа</div>
</div>

        {/* pulBirligi */}
<div className={s.pulBirligi}>
        <div id='rub' onClick={this.rub1} className={s.rub}>RUB</div>
        <div id='uzb' onClick={this.uzb1} className={s.rub}>UZS</div>
        <div id='usd' onClick={this.usd1} className={s.rub}>USD</div>
        <div id='eur' onClick={this.eur1} className={s.rub}>EUR</div>

</div>



{ this.state.id===0?(
<div>
    {this.state.key===0?(
    <div> 
        {/* rubl */}
         <div className={s.narxCard}>
    <Row>
        <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
         <div className={s.cards}>
             <div className={s.card}>
                 <p className={s.number}>веб-программист</p>
                 <h2>540 <FaRubleSign /></h2>
                 <p>за урок</p>
             </div>
             <div className={s.cardText}>
                 <p>Количество: <span>12</span> уроков</p>
                 <p>Длительность: <span>90</span> минут</p>
                 <p>Всего за пакет: <span>6500</span> RUB</p>
               <button>Оплатитъ</button>
             </div>
         </div>
        </Col>
        <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
        <div className={s.cards}>
             <div className={s.card}>
                 <p className={s.number}>
создание игры</p>
                 <h2>360 <FaRubleSign /></h2>
                 <p>за урок</p>
             </div>
             <div className={s.cardText}>
                 <p>Количество: <span>12</span> уроков</p>
                 <p>Длительность: <span>90</span> минут</p>
                 <p>Всего за пакет: <span>4300</span> RUB</p>
               <button>Оплатитъ</button>
             </div>
         </div>
        </Col>
        <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
        <div className={s.cards}>
             <div className={s.card}>
                 <p className={s.number}>графический дизайн</p>
                 <h2>360 <FaRubleSign /></h2>
                 <p>за урок</p>
             </div>
             <div className={s.cardText}>
                 <p>Количество: <span>12</span> уроков</p>
                 <p>Длительность: <span>90</span> минут</p>
                 <p>Всего за пакет: <span>4300</span> RUB</p>
               <button>Оплатитъ</button>
             </div>
         </div>
        </Col>
    </Row>
    </div></div>
    ):(this.state.key===1?(
    <div>     
         {/* uzb */}
    <div className={s.narxCard}>
<Row>
   <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
        <div className={s.card}>
            <p className={s.number}>веб-программист</p>
            <h2>540 so`m</h2>
            <p>за урок</p>
        </div>
        <div className={s.cardText}>
            <p>Количество: <span>12</span> уроков</p>
            <p>Длительность: <span>90</span> минут</p>
            <p>Всего за пакет: <span>6500</span> UZB</p>
          <button>Оплатитъ</button>
        </div>
    </div>
   </Col>
   <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
   <div className={s.cards}>
        <div className={s.card}>
            <p className={s.number}>
создание игры</p>
            <h2>360 so`m</h2>
            <p>за урок</p>
        </div>
        <div className={s.cardText}>
            <p>Количество: <span>12</span> уроков</p>
            <p>Длительность: <span>90</span> минут</p>
            <p>Всего за пакет: <span>4300</span> UZB</p>
          <button>Оплатитъ</button>
        </div>
    </div>
   </Col>
   <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
   <div className={s.cards}>
        <div className={s.card}>
            <p className={s.number}>графический дизайн</p>
            <h2>360 so`m</h2>
            <p>за урок</p>
        </div>
        <div className={s.cardText}>
            <p>Количество: <span>12</span> уроков</p>
            <p>Длительность: <span>90</span> минут</p>
            <p>Всего за пакет: <span>4300</span> UZB</p>
          <button>Оплатитъ</button>
        </div>
    </div>
   </Col>
</Row>
</div></div>
    ):(this.state.key===2?(
    <div>    
          {/* dolllor */}
    <div className={s.narxCard}>
<Row>
   <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
        <div className={s.card}>
            <p className={s.number}>веб-программист</p>
            <h2>540 <FaDollarSign/></h2>
            <p>за урок</p>
        </div>
        <div className={s.cardText}>
            <p>Количество: <span>12</span> уроков</p>
            <p>Длительность: <span>90</span> минут</p>
            <p>Всего за пакет: <span>6500</span> USD</p>
          <button>Оплатитъ</button>
        </div>
    </div>
   </Col>
   <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
   <div className={s.cards}>
        <div className={s.card}>
            <p className={s.number}>
создание игры</p>
            <h2>360 <FaDollarSign/></h2>
            <p>за урок</p>
        </div>
        <div className={s.cardText}>
            <p>Количество: <span>12</span> уроков</p>
            <p>Длительность: <span>90</span> минут</p>
            <p>Всего за пакет: <span>4300</span> USD</p>
          <button>Оплатитъ</button>
        </div>
    </div>
   </Col>
   <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
   <div className={s.cards}>
        <div className={s.card}>
            <p className={s.number}>графический дизайн</p>
            <h2>360 <FaDollarSign/></h2>
            <p>за урок</p>
        </div>
        <div className={s.cardText}>
            <p>Количество: <span>12</span> уроков</p>
            <p>Длительность: <span>90</span> минут</p>
            <p>Всего за пакет: <span>4300</span> USD</p>
          <button>Оплатитъ</button>
        </div>
    </div>
   </Col>
</Row>
</div></div>
    ):(
    <div>   
           {/* yevro */}
    <div className={s.narxCard}>
<Row>
   <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
        <div className={s.card}>
            <p className={s.number}>веб-программист</p>
            <h2>540 <FaEuroSign /></h2>
            <p>за урок</p>
        </div>
        <div className={s.cardText}>
            <p>Количество: <span>12</span> уроков</p>
            <p>Длительность: <span>90</span> минут</p>
            <p>Всего за пакет: <span>6500</span> EUR</p>
          <button>Оплатитъ</button>
        </div>
    </div>
   </Col>
   <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
   <div className={s.cards}>
        <div className={s.card}>
            <p className={s.number}>
создание игры</p>
            <h2>360 <FaEuroSign /></h2>
            <p>за урок</p>
        </div>
        <div className={s.cardText}>
            <p>Количество: <span>12</span> уроков</p>
            <p>Длительность: <span>90</span> минут</p>
            <p>Всего за пакет: <span>4300</span> EUR</p>
          <button>Оплатитъ</button>
        </div>
    </div>
   </Col>
   <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
   <div className={s.cards}>
        <div className={s.card}>
            <p className={s.number}>графический дизайн</p>
            <h2>360 <FaEuroSign /></h2>
            <p>за урок</p>
        </div>
        <div className={s.cardText}>
            <p>Количество: <span>12</span> уроков</p>
            <p>Длительность: <span>90</span> минут</p>
            <p>Всего за пакет: <span>4300</span> EUR</p>
          <button>Оплатитъ</button>
        </div>
    </div>
   </Col>
</Row>
</div></div>
    )))}
</div>
):(this.state.id===1?(
<div>
     {this.state.key===0?(
     <h1>      {/* rubl */}
     <div className={s.narxCard}>
<Row>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
     <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>веб-программист</p>
             <h2>540 <FaRubleSign /></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>120</span> минут</p>
             <p>Всего за пакет: <span>6500</span> RUB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>
создание игры</p>
             <h2>360 <FaRubleSign /></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>120</span> минут</p>
             <p>Всего за пакет: <span>4300</span> RUB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>
создание игры</p>
             <h2>360 <FaRubleSign /></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>120</span> минут</p>
             <p>Всего за пакет: <span>4300</span> RUB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
</Row>
</div></h1>
     ):(this.state.key===1?(
     <h1>      {/* uzb */}
     <div className={s.narxCard}>
<Row>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
     <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>веб-программист</p>
             <h2>540 so`m</h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>120</span> минут</p>
             <p>Всего за пакет: <span>6500</span> UZB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>
создание игры</p>
             <h2>360 so`m</h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>120</span> минут</p>
             <p>Всего за пакет: <span>4300</span> UZB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>графический дизайн</p>
             <h2>360 so`m</h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>120</span> минут</p>
             <p>Всего за пакет: <span>4300</span> UZB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>
создание игры</p>
             <h2>360 so`m</h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>120</span> минут</p>
             <p>Всего за пакет: <span>4300</span> UZB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>графический дизайн</p>
             <h2>360 so`m</h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>120</span> минут</p>
             <p>Всего за пакет: <span>4300</span> UZB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    
</Row>
</div></h1>
     ):(this.state.key===2?(
     <h1>      {/* dollor */}
     <div className={s.narxCard}>
<Row>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
     <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>веб-программист</p>
             <h2>540 <FaDollarSign/></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>120</span> минут</p>
             <p>Всего за пакет: <span>6500</span> USD</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>
создание игры</p>
             <h2>360 <FaDollarSign/></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>120</span> минут</p>
             <p>Всего за пакет: <span>4300</span> USD</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>графический дизайн</p>
             <h2>360 <FaDollarSign/></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>120</span> минут</p>
             <p>Всего за пакет: <span>4300</span> USD</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
</Row>
</div></h1>
     ):(<h1>   {/* yevro */}
        <div className={s.narxCard}>
   <Row>
       <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
        <div className={s.cards}>
            <div className={s.card}>
                <p className={s.number}>веб-программист</p>
                <h2>540 <FaEuroSign /></h2>
                <p>за урок</p>
            </div>
            <div className={s.cardText}>
                <p>Количество: <span>12</span> уроков</p>
                <p>Длительность: <span>120</span> минут</p>
                <p>Всего за пакет: <span>6500</span> EUR</p>
              <button>Оплатитъ</button>
            </div>
        </div>
       </Col>
       <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
       <div className={s.cards}>
            <div className={s.card}>
                <p className={s.number}>
создание игры</p>
                <h2>360 <FaEuroSign /></h2>
                <p>за урок</p>
            </div>
            <div className={s.cardText}>
                <p>Количество: <span>12</span> уроков</p>
                <p>Длительность: <span>120</span> минут</p>
                <p>Всего за пакет: <span>4300</span> EUR</p>
              <button>Оплатитъ</button>
            </div>
        </div>
       </Col>
       <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
       <div className={s.cards}>
            <div className={s.card}>
                <p className={s.number}>графический дизайн</p>
                <h2>360 <FaEuroSign /></h2>
                <p>за урок</p>
            </div>
            <div className={s.cardText}>
                <p>Количество: <span>12</span> уроков</p>
                <p>Длительность: <span>120</span> минут</p>
                <p>Всего за пакет: <span>4300</span> EUR</p>
              <button>Оплатитъ</button>
            </div>
        </div>
       </Col>
   </Row>
   </div></h1>
     )))}
</div>
):(
<div>
     {this.state.key===0?(
     <h1>   {/* rubl*/}
     <div className={s.narxCard}>
<Row>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
     <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>веб-программист</p>
             <h2>540 <FaRubleSign /></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>90</span> минут</p>
             <p>Всего за пакет: <span>6500</span> RUB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>
создание игры</p>
             <h2>360 <FaRubleSign /></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>90</span> минут</p>
             <p>Всего за пакет: <span>4300</span> RUB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>графический дизайн</p>
             <h2>360 <FaRubleSign /></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>90</span> минут</p>
             <p>Всего за пакет: <span>4300</span> RUB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
</Row>
</div></h1>
     ):(this.state.key===1?(
     <h1>   {/* uzb */}
     <div className={s.narxCard}>
<Row>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
     <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>веб-программист</p>
             <h2>540 so`m</h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>90</span> минут</p>
             <p>Всего за пакет: <span>6500</span> UZB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>
создание игры</p>
             <h2>360 so`m</h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>90</span> минут</p>
             <p>Всего за пакет: <span>4300</span> UZB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>графический дизайн</p>
             <h2>360 so`m</h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>90</span> минут</p>
             <p>Всего за пакет: <span>4300</span> UZB</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
</Row>
</div></h1>
     ):(this.state.key===2?(
     <h1>   {/* dollor */}
     <div className={s.narxCard}>
<Row>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
     <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>веб-программист</p>
             <h2>540 <FaDollarSign/></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>90</span> минут</p>
             <p>Всего за пакет: <span>6500</span> USD</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>
создание игры</p>
             <h2>360 <FaDollarSign/></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>90</span> минут</p>
             <p>Всего за пакет: <span>4300</span> USD</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>графический дизайн</p>
             <h2>360 <FaDollarSign/></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>90</span> минут</p>
             <p>Всего за пакет: <span>4300</span> USD</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
</Row>
</div></h1>):(
     <h1>   {/* yevro */}
     <div className={s.narxCard}>
<Row>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
     <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>веб-программист</p>
             <h2>540 <FaEuroSign /></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Длительность: <span>90</span> минут</p>
             <p>Количество: <span>12</span> уроков</p>
             
             <p>Всего за пакет: <span>6500</span> EUR</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>
создание игры</p>
             <h2>360 <FaEuroSign /></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>90</span> минут</p>
             <p>Всего за пакет: <span>4300</span> EUR</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
    <Col sm={12} md={12} lg={6} xl={4} xxl={4}>
    <div className={s.cards}>
         <div className={s.card}>
             <p className={s.number}>графический дизайн</p>
             <h2>360 <FaEuroSign /></h2>
             <p>за урок</p>
         </div>
         <div className={s.cardText}>
             <p>Количество: <span>12</span> уроков</p>
             <p>Длительность: <span>90</span> минут</p>
             <p>Всего за пакет: <span>4300</span> EUR</p>
           <button>Оплатитъ</button>
         </div>
     </div>
    </Col>
</Row>
</div></h1>)))}
</div>))
}

<div className={accordionstyle.accordions}>
           
           <h1 className={accordionstyle.title}>Часто задаваемые <span> вопросы</span></h1>
           <Accordion>
 <Accordion.Item eventKey="0">
   <Accordion.Header data-aos="flip-up" ><h5 className={accordionstyle.accordionHeader}>На каком языке ведутся занятия?</h5>
</Accordion.Header>
   <Accordion.Body>
  <p className={accordionstyle.textaccordion}> В данное время занятия ведутся на русском языке, с изучением технической терминологии на английском</p>
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="1">
   <Accordion.Header data-aos="flip-up"><h5 className={accordionstyle.accordionHeader}> Есть ли возрастные ограничения?</h5>
</Accordion.Header>
   <Accordion.Body>
 <p className={accordionstyle.textaccordion}>  Да, наша программа курсов рассчитана на детей от 9 до 16 лет</p>
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="2">
   <Accordion.Header data-aos="flip-up"> <h5 className={accordionstyle.accordionHeader}>В какое время и сколько раз в неделю проходят занятия?</h5>
</Accordion.Header>
   <Accordion.Body>
  <p className={accordionstyle.textaccordion}> 3 раза в неделю по 120 минут. Подробнее время занятий вы можете посмотреть в разделе Курсы</p>
   </Accordion.Body>
 </Accordion.Item>
 <Accordion.Item eventKey="3">
   <Accordion.Header data-aos="flip-up"><h5 className={accordionstyle.accordionHeader}> Где проходят занятия?</h5>
</Accordion.Header>
   <Accordion.Body>
  <p className={accordionstyle.textaccordion}> Занятия проходят в Ташкенте по адресу Мирзо-Улугбекский район, ул.Салом1, 241 школа</p>
   </Accordion.Body>
 </Accordion.Item>


</Accordion>
       </div>    
            </div>
        )
    }
}

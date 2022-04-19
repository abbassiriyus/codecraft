import React,{Component} from 'react'
import { Accordion } from 'react-bootstrap'
import accordionstyle from '../css/accordion.module.css'
import bot from '../img/bot_new.gif.gif'
export default class accordion extends Component {
  yozu=()=>{
    document.querySelector('#yozu').innerHTML=`<p>На каком языке ведутся занятия?<p>`
    document.querySelector('#yozu').style.height="150px"
  }
  yozu1=()=>{
    document.querySelector('#yozu').innerHTML=`<p>Есть ли возрастные ограничения?<p>`
    document.querySelector('#yozu').style.height="150px"
  }
  yozu2=()=>{
    document.querySelector('#yozu').innerHTML=`<p>Сколько детей занимается в группе?<p>`
    document.querySelector('#yozu').style.height="150px"
  }
  yozu3=()=>{
    document.querySelector('#yozu').innerHTML=`<p>Где мы можем получить более подробную информацию о каждом курсе?<p>`
    document.querySelector('#yozu').style.height="200px"
  }
  yozu4=()=>{
    document.querySelector('#yozu').innerHTML=`<p>В какое время и сколько раз в неделю проходят занятия?<p>`
    document.querySelector('#yozu').style.height="200px"
  }
  render() {
    return (
      <div><div className={accordionstyle.hammasi}>
      <div className={accordionstyle.text}>
        <div className={accordionstyle.ikkita1}>
        <div className={accordionstyle.ikkita11}><div  className={accordionstyle.shar}></div><p onClick={this.yozu} className={accordionstyle.p}>На каком языке ведутся занятия?</p></div>
        <div className={accordionstyle.ikkita12}><div className={accordionstyle.shar}></div><p onClick={this.yozu1} className={accordionstyle.p}>Есть ли возрастные ограничения?</p></div>
          </div>
        <div className={accordionstyle.bitta}><div className={accordionstyle.shar}></div><p onClick={this.yozu2} className={accordionstyle.p}>Сколько детей занимается в группе?</p>
    </div>
        <div className={accordionstyle.ikkita2}>
        <div className={accordionstyle.ikkita21}><div className={accordionstyle.shar}></div><p onClick={this.yozu3} className={accordionstyle.p}>Где мы можем получить более подробную информацию о каждом курсе?</p></div>
        <div className={accordionstyle.ikkita22}><div className={accordionstyle.shar}></div><p onClick={this.yozu4} className={accordionstyle.p}>В какое время и сколько раз в неделю проходят занятия?</p>
    </div>
        </div>
        </div>
      
      <div className={accordionstyle.robot}>
        <div className={accordionstyle.satr} id="yozu">В данное время занятия ведутся на русском языке, с изучением технической терминологии на английском</div>
        <div className={accordionstyle.doira1}></div>
       
        <div className={accordionstyle.robot}>
          {/* <video autoPlay loop  width='100%' height='100%'>
          <source  src={bot} type="video/mp4"/>
          </video> */}
          <img src={bot}/></div> 
         </div>
      </div>
    
    
    
    
    <div></div></div>
    )
  }
}


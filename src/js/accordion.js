import React from 'react'
import { Accordion } from 'react-bootstrap'
import accordionstyle from '../css/accordion.module.css'
import bot from '../img/bot.png'
export default function accordion() {
    return (
        <div>
<div className={accordionstyle.hammasi}>
  <div className={accordionstyle.text}>
    <div className={accordionstyle.ikkita1}>
    <div className={accordionstyle.ikkita11}><div className={accordionstyle.shar}></div><p className={accordionstyle.p}>На каком языке ведутся занятия?</p></div>
    <div className={accordionstyle.ikkita12}><div className={accordionstyle.shar}></div><p className={accordionstyle.p}>Есть ли возрастные ограничения?</p></div>
      
      </div>
    <div className={accordionstyle.bitta}><div className={accordionstyle.shar}></div><p className={accordionstyle.p}>Сколько детей занимается в группе?</p>
</div>
    <div className={accordionstyle.ikkita2}>
    <div className={accordionstyle.ikkita21}><div className={accordionstyle.shar}></div><p className={accordionstyle.p}>Где мы можем получить более подробную информацию о каждом курсе?</p></div>
    <div className={accordionstyle.ikkita22}><div className={accordionstyle.shar}></div><p className={accordionstyle.p}>В какое время и сколько раз в неделю проходят занятия?</p>
</div>
    </div>
    </div>
  
  <div className={accordionstyle.robot}>
    <div className={accordionstyle.satr}>В данное время занятия ведутся на русском языке, с изучением технической терминологии на английском</div>
    <div className={accordionstyle.doira1}></div>
   
    <div className={accordionstyle.robot}><img src={bot}/></div>
     </div>
  </div>




<div></div>
        </div>
    )
}

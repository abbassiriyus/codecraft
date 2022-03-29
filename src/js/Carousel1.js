import React, { Component } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import s from '../css/Carousel1.module.css'
import rajabboy from '../img/Rajabboy.jpg'
import askar from '../img/askar.PNG'
import barno from '../img/barno.jpg'
import begzod from '../img/begzod.JPG'
import abbas from '../img/abbas.jpg'
import abror from '../img/abrar.jpg'
const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    700: { items: 2 },
    1024: { items: 3 },
};

export default class Carousel1 extends Component {
  render() {
    const items = [
     <div className={s.card}>
        <div className={s.img}> <img src={rajabboy} alt="" /></div>
         <h2>Наимов Ражаббой</h2>
         <span>Инструктор по вэб программированию</span>
     </div>,
       <div className={s.card}>
       <div className={s.img}> <img src={abbas} alt="" /></div>
        <h2>Аббас Ергашалиев</h2>
        <span>Инструктор по вэб программированию</span>
    </div>,
      <div className={s.card}>
      <div className={s.img}> <img src={abror} alt="" /></div>
       <h2>Aхмадов Aброржон</h2>
       <span>Инструктор по Python</span>
   </div>,
       <div className={s.card}>
      <div className={s.img}><img src={barno} alt="" /></div> 
       <h2>Абдулазизова Барно</h2>
       <span>Проектный менеджер,администратор</span>
   </div>,
       <div className={s.card}>
      <div className={s.img}> <img src={askar} alt="" /></div>
       <h2>Баймирзаев Аскар</h2>
       <span>маркетолог</span>
   </div>,
      <div className={s.card}>
     <div className={s.img}><img src={begzod} alt="" /></div>
      <h2>Каххоров Бекзод</h2>
      <span>Инструктор по вэб программированию</span>
  </div>,
      ];
    return (
      <div>
<div className={s.komanda}>
    <div className={s.title}>Наша команда</div>
<AliceCarousel mouseTracking animationDuration={400} responsive={responsive} items={items} />
<button className={s.button}>Вся команда</button>
</div>
      </div>
    )
  }
}

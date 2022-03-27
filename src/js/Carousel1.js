import React, { Component } from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import img from '../img/1.png'
import s from '../css/Carousel1.module.css'
import { Button } from 'react-bootstrap';
const handleDragStart = (e) => e.preventDefault();

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

export default class Carousel1 extends Component {
  render() {
    const items = [
     <div className={s.card}>
         <img src="https://image.made-in-china.com/44f3j00YbytHvLcqgrT/Design-Classic-Gray-Color-Security-Guard-Uniform-Shirts.jpg" alt="" />
         <h2>abbas developper</h2>
         <span>занимается тем сем и ни чего пойдет да не пойдет 
пыпв пвапрвап пвпвапв пвпвапвап </span>
     </div>,
       <div className={s.card}>
       <img src="https://image.made-in-china.com/202f0j00ScsWUmDGEJuz/Cotton-Formal-Training-Durable-Security-Guard-Safety-Wear-Uniform.jpg" alt="" />
       <h2>abbas developper</h2>
       <span>занимается тем сем и ни чего пойдет да не пойдет 
пыпв пвапрвап пвпвапв пвпвапвап </span>
   </div>,
       <div className={s.card}>
       <img src="https://image.made-in-china.com/155f0j00GRyfdnmsyMue/Customized-Men-s-Security-Guard-Dress-Uniform-Cheap-Security-Shirt-Design-Security-Guard-Wear.jpg" alt="" />
       <h2>abbas developper</h2>
       <span>занимается тем сем и ни чего пойдет да не пойдет 
пыпв пвапрвап пвпвапв пвпвапвап </span>
   </div>,
      <div className={s.card}>
      <img src="https://image.made-in-china.com/202f0j00PYwRMHTgIvra/Customized-Long-Sleeve-Blue-Shirt-Hotel-Security-Guard-Uniforms.jpg" alt="" />
      <h2>abbas developper</h2>
      <span>занимается тем сем и ни чего пойдет да не пойдет 
пыпв пвапрвап пвпвапв пвпвапвап </span>
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

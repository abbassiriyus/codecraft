import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import z from '../css/Corusel.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

const img = <img className={z.img1} src='https://img.freepik.com/free-photo/view-manhattan-sunset-new-york-city_268835-463.jpg?size=626&ext=jpg&ga=GA1.2.1588438836.1641600000' />


const items = [
    <div className={z.item} data-value="1">{img}</div>,
    <div className={z.item} data-value="2">{img}</div>,
    <div className={z.item} data-value="3">{img}</div>,
    <div className={z.item} data-value="4">{img}</div>,
    <div className={z.item} data-value="5">{img}</div>,
];

const Corusel = () => (
    
    <div className={z.corusell}> 
        <AliceCarousel
    autoHeight  
    // autoWidth
    autoPlay
        // autoPlayControls
        autoPlayStrategy="none"
    autoPlayInterval={1000}
        animationType="fadeout" 
        animationDuration={2500}
        disableButtonsControls
        infinite
        items={items}
        mouseTracking
    />

    <h1>title</h1>
    <a className={z.aHref} href="https://www.youtube.com/watch?v=M0d-wAnhW8s">URL</a>
    <p className={z.loremText}>open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.</p>
    </div>
   
);





export default Corusel;
import React from 'react';
import img1 from '../img/1.png'
import o from '../css/Yangiliklar.module.css'

const Yangiliklar = () => {
    return (
        <div>
            <div className="card bg-dark text-white" style={{width: '500px', height: '00px'}}>
                <img src={img1} class="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title" className={o.imgText} >Card title</h5>
                    <p className="card-text" className={o.imgTextp}>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text" className={o.imgTextp}>Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    );
};



export default Yangiliklar;
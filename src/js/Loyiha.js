import React, { Component } from 'react'
import { FaTelegram } from 'react-icons/fa'
import s from '../css/Loyiha.module.css'
export default class Loyiha extends Component {
    render() {
        return (
            <div className={s.all1}>
                <div className={s.fon1}></div>
    <div className={s.container}>
    <div className={s.box}>

        <div className={s.title}>
            <span className={s.block}></span>
            <h1>Code Craft<span></span></h1>
        </div>

        <div className={s.role}>
            <div className={s.block}></div>
            <p>проектный отдел</p>
        </div>

    </div> 
 

</div>

<a href="https://t.me/websirius11" >
    <footer style={{zIndex:'213'}}  id={s.footer}>
    <div className={s.texto}>
        <span>
           <FaTelegram className={s.i}/>
             watch on telegram</span>
    </div>
</footer>
   </a> 
            </div>
        )
    }
}

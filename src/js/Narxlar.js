import React, { Component } from 'react'
import { ImDisplay } from 'react-icons/im'
import s from '../css/Narxlar.module.css'
export default class Narxlar extends Component {
state={
    id:1,
    key:3
}
 soati1=()=>{
this.setState({id:0})
 }  
 soati2=()=>{
    this.setState({id:1})
}    
    render() {
        return (
            <div><div className={s.soat}>
<div className={s.soati1} onClick={this.soati1}>salom</div><div className={s.soati2} onClick={this.soati2}>salom1</div>
</div>


        {/* pulBirligi */}
    <div className={s.pulBirligi}>
        <div className={s.rub}>RUB</div>
        <div className={s.uzs}>UZS</div>
        <div className={s.uan}>UAN</div>
        <div className={s.usd}>USD</div>
        <div className={s.eur}>EUR</div>

</div>



{ this.state.id===0?(
<div>
    {this.state.key===0?(
    <div>uzbek1 somi</div>
    ):(this.state.key===1?(
    <div>rus1 rubl</div>
    ):(this.state.key===2?(
    <div>aqsh1 dollor</div>
    ):(
    <div>xitoy1 uang</div>
    )))}
</div>
):(<div>
     {this.state.key===0?(<h1>hello1</h1>):(this.state.key===1?(<h1>hello2</h1>):(this.state.key===2?(<h1>hello3</h1>):(<h1>hello4</h1>)))}
</div>)
}
            </div>
        )
    }
}

import scratch from '../css/Scratch.module.css';
import imgTogle from '../img/list.svg';
import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './scratch.css'

export default class Scratch extends Component {
    state={
        key:true,
    }
    Uz=()=>{
       this.setState({key:false}) 
    }
    Ru=()=>{
        this.setState({key:true}) 
    }
Sc1=()=>{
  document.querySelector('#sc1').style.display='flex'
  document.querySelector('#sc2').style.display='none'
  document.querySelector('#sc3').style.display='none'
  document.querySelector('#sc4').style.display='none'
  document.querySelector('#sc5').style.display='none'
}
Sc2=()=>{
  document.querySelector('#sc1').style.display='none'
  document.querySelector('#sc2').style.display='flex'
  document.querySelector('#sc3').style.display='none'
  document.querySelector('#sc4').style.display='none'
  document.querySelector('#sc5').style.display='none'
}
Sc3=()=>{
  document.querySelector('#sc1').style.display='none'
  document.querySelector('#sc2').style.display='none'
  document.querySelector('#sc3').style.display='flex'
  document.querySelector('#sc4').style.display='none'
  document.querySelector('#sc5').style.display='none'
}
Sc4=()=>{
  document.querySelector('#sc1').style.display='none'
  document.querySelector('#sc2').style.display='none'
  document.querySelector('#sc3').style.display='none'
  document.querySelector('#sc4').style.display='flex'
  document.querySelector('#sc5').style.display='none'
}
Sc5=()=>{
  document.querySelector('#sc1').style.display='none'
  document.querySelector('#sc2').style.display='none'
  document.querySelector('#sc3').style.display='none'
  document.querySelector('#sc4').style.display='none'
  document.querySelector('#sc5').style.display='flex'
}
 start=()=>{
      document.querySelector('#sc1').style.display='none'
      document.querySelector('#sc2').style.display='none'
      document.querySelector('#sc3').style.display='none'
      document.querySelector('#sc4').style.display='none'
      document.querySelector('#sc5').style.display='none'
}

  render() {

    return <div>  




    <div>
        
    {this.state.key?(<div> <header className={scratch.header1} style={{zIndex:'1323'}}>
       <h1 className={scratch.idi1} id='id1' >Scratch ??????-</h1>
        </header>
       
        <Button style={{position:'fixed',zIndex:'100',opacity:'0.6'}} onClick={this.Uz}>Uz</Button>
           <div className='container-fluid' id={scratch.fluid}>
               <div className='row'>
                   <div className='col-md-9' id={scratch.colMd9}>
                   <div className={scratch.drop}>
       
        <div className={scratch.dropdown}>
            <button className={scratch.dropbtn}>   <img className={scratch.dropbtnImg} alt=" " src={imgTogle} />  </button>
            <div className={scratch.dropdownContent}>
                <a href='#id1' >Scratch ??????-</a>
                <a href='#id2' > Scratch ????????????????????????????????</a>
                <a href='#id3' > ?????? ?????? ???????????????? </a>
                <a href='#id4' > ???????????????? ??????????</a>
            </div>
        </div>
        {/* hjghjghjgjhggjhgj */}
        </div>




                        <div className={scratch.textCol}>
                            <p className={scratch.text}></p>
                        </div>
                        <div className={scratch.textDiv}>
                            <p id='id2' className={scratch.text1Span}>Scratch ????????????????????????????????: ?????? ?????? ?? ???????? ?????? ?????????? ??????????????????</p>
                            <p  className={scratch.text1}>
                            ?????????????? ???????????????????????? ?????????????????????? ???????????????? ?????????? ???? ?????????????? ?????????????? ?????? ???????????? ????????????????. ???????? ???? ?????????????? ???????? ?? ???????? ???? ????????????????, ?????????? ?????????????????????? ?? ?????????? ???????????????????????? ???????????????????????? ?????????????????????? ????????????????????????, ???????????????????????? ?????? ?????????? ???????????????????????? ?? ???????? ??? ???????????? ???????????????????? ?? ???????? ?????????? ???????? ????????????-???? ???????????????????????????????? ???????????????? ???????????? ??????????????????????. ???? ???????? ?????? ?????????? ???????????????? ???????????????? ?????? ?????????? ???????? ?????? ?? ???? ?????? ??????????????????, ???? ?????? ????????????????, ?? ???????????????? ??????????, ?????? ?????? ???????????????? ?????????? ???????????? ?? ???????????? ????????????????????????.
                            ????????????????, ?????? ?????????? ?????????????? ?????????????????? ???? ?????????????????????????? ???????????????????????? ?????????? ????????????????????????. ?????????????? ?? ?????????????????????? ?????????? ???? ???????????????? ????????????????, ?????? ?????????? ???????? ???? 3 000 ??? 5 000 $ ?? ??????????, ?????? ???????????????? ???????????? ?????????????????? ???????????????? ???? ?????????????????? ?? ???????????? ????????????????????????????. ??????????????, ?????? ?????? ???????????? ?????????? ???????????? ?????????????????? ?????????? ???????????? ?? ????????????????????????????????, ?????? ?????? ?????????? ?????? ???????????? ?????????????????????? ???????? ???????????????????? ?? ?????????????????????????? ??????????????????????, ?????? ????????, ???? ?????????????? ???? 100 $ ?? ??????????. ???? ?? ???????? ???????????????? ????????????????, ???????????????? ???????? ?????????????? ?????? 5-8 ??????, ???????? ???????????? ???????????????????????????????? ??? ?????? ?????????????????????? ?????????? ?? ???????????????????? ?????????????? ???? ??????????????????????, ?????? ???????????? ???????????? ???????????? ????????????????.
???? ?????????? ??????????????, ?????? Scratch ????????????????????????????????, ?????????????????? ?? ?????????????? ?????????? ???????????????? ???? ???????????? https://polycent.ru/courses/programmirovanie/10f6335c-196c-ecce-a1c1-583a9873c35e/, ???????????????????? ?????? ???????????????? ????????????. ???????????? ?????????????????? ???????? ???????????????????? ???????????? ???????????????????????????????? ?????? ?????????? ???????????????? ??????, ?????? ???????????????????????????? ?????? ???????? ?? ?????????? ?????????? ?????????????????? ?????????????? ??????????????, ???????????????????????? ?????????????????????????????? ????????????????????.
                            </p>
                    <img className={scratch.imgPython} alt=' ' src='http://en.kidit.com.ua/wp-content/uploads/2018/11/scratch.png' />
                        
                        </div>
                        <div className={scratch.textDiv}>
                            <p id='id3' className={scratch.text1Span}>Scratch ???????????????????????????????? ??? ?????? ?????? ????????????????</p>
                            <p className={scratch.text1}>
                            ???????????? ?????? ???????????????????? ???? ???????????????????? ???????????????????? ?????? ?????????? ?? ?????????????????? ?????????????? ?????????? ?????????????? ??? ?????????????????????????????? ???????????????? ???????????????? ?????????? ?????????????????????? ????????????????. ?????????????? ???? ?????????? ?????????????????? ?????????? ?? ?????????? ?????? ?? ???????????? ?????????????????????? ???? ???????????? ????????????????????. ???????????????????? ???????????? ???????????????? ???????????????? ???????? ??????????????????????, ?????????????? ?????????? ???????????????? ???? ?????????? ?????????????? ???????????? ?? ?????????????????? ???????????????? ????????????????????, ?????????????? ?????????? ???????????????????? ?????? ??????????.
                            ???????????????????? ???? ???????????????????? ?????? ?????????? ??????????????, ???????????????? ??????????????, ?????????? ?????????? ???????????? ?? ?????????????????????? ?????????????? ????????????????, ?????? ?????? ?????? ???????? ?????????????????? ???? ???????????????????????? ??????????????, ???????????????????????? ?????????? ????????????. ?????????????? ?????????? ?? ?????????????????????? ???????????????? ???????????????????????? ????????????????, ???????????? ?? ????????????! ?????????????? ???????????? ??????????????, ?????????????? ?????????????????????????? ????????????, ?? ???????????????????? ?????????????????? ???????????????????? ???????????????????? ?? ?????????????????????????? ??????????.
???????????? ????????????????, ?????????????? ?????????????? ?????????????????????????????? ??????????????????, ?????????????????????? ?? ?????? ?????????????????????????? ????????????????????????. ???? ???????????????? ???????????? ???????? ?????????????????? ????????????????, ??????????????, ?????? ???? ???????????????? ?? ??????????, ?????????????? ?????? ?????????????????? ???? ?????????? ????????????.
???????????????????? ???????????? ?????????? ???? ???????? POLYCENT ?????? ???? ????????????????, ?????????? ?????????? ?????????????????? Scratch ????????????????????????????????. ?????????????? ?? ???????????? ????, ?????????????? ???????????????? ?????????????????? ????????????:
                            </p>
                        </div>
                    <div className={scratch.pythonUrlIm}> 
                    <img className={scratch.imgPython} alt=' ' src='https://ktp-production-public.s3.us-east-2.amazonaws.com/photos/course_main-444.3aaece89e537dd96353c22e457351c90' />
                    </div>          

                    <div className={scratch.ulliBox}>
                        <p id='id4' className={scratch.ulliTitle}>Scratch ???????????????????????????????? ??? ?????? ?????? ????????????????</p>
                        <ul className={scratch.ulli}>
                            <li>?????????????????? ???????????????????? ?? ?????????????????????????? ??????????????????????. ???????????????? ?????????? ???????????????????? ????????????, ???? ??????????, ?????? ?????? ???????????????? ?????????????????? ???????????????????? ?????????????????? ?? ?????????????????? ?????????????????? ??????, ?????????????? ?????????? ??????????????????????. ?????? ?????????? ?????????? ?????????????????????? ?? ??????????, ?????????? ????????????;</li>
                            <li>?????????????????? ?????????????????????? ?????????????? ???????? ?????? ?????????????????? ?????????? ?????????????????? ?????????????? ????????????????????????????????, ?????????????? ???????????????? ?????????????? ?? ?????????????? ?? ???????????????????????? ?????? ???? ?????????????????????? ????????????;</li>
                            <li>?????????????? ?????????????????? ???????? ????????????, ???????????????????? ?????????? ???????????????? ?? ???????????????????? ?????? ?????????? ??????????????????. ???????????????????????????? ???????????? ?????????????? ?????? ?????????? ?????????????????????????????? ?? ???????????????????? ???????? ?? ?????????? ?????????????????? ?????????????? ???????? ???????????? ?? ??????????. ???????? ???? ??????????????, ?????????? ?????? ?????????????? ?????????? ?????????????????? ?????????????????????????? ?? ?????????????????????? ???? ?????????? ?????????? $$$, ???? ?????????????????????? ?????????????????????? ?????? ?? ?????????? ???????????????? ????????! </li>
                        </ul>
                    </div>

                   
                    
                    
                   </div>

                   <div className='col-3' id={scratch.colMd3}>
                        <div className={scratch.position} >
                            <ul className={scratch.hrefUl}>
                                <li className={scratch.hrefLi}><a href='#id1' > Scratch ??????-</a></li>
                                <li className={scratch.hrefLi}><a href='#id2' > Scratch ???????????????????????????????? </a></li>
                                <li className={scratch.hrefLi}><a href='#id3' > ?????? ?????? ???????????????? </a></li>
                                <li className={scratch.hrefLi}><a href='#id4' > ???????????????? ?????????? </a></li> 
                            </ul>
                        </div>
                   </div>
               </div>
           </div></div>):(<div className='scratch'>
           {/* <header className={scratch.header1} style={{zIndex:'1323'}}>
       <h1 className={scratch.idi1} id='id1' style={{fontSize:'50px'}}>Scratchning afzalliklar va qo`shimcha imkoniyatlari</h1>
        </header> */}
    <Button style={{position:'fixed',zIndex:'100',opacity:'0.6'}} onClick={this.Ru}>Rus</Button>
<div style={{position:'fixed',right:'0px',top:'100px',zIndex:'21312'}}>
<div style={{display:'flex',position:'fixed',right:'0px',top:'100px',zIndex:'21312' }}>
  <a className={scratch.scratch1} style={{padding:'20px',backgroundColor:'white',paddingTop:'0px',paddingBottom:'0px'}} href="#s1" id='sc1'>Scratch nima?</a><Button onClick={this.Sc1} onDoubleClick={this.start}> </Button></div>
<div style={{display:'flex',position:'fixed',right:'0px',top:'140px',zIndex:'21312' }}>
  <a className={scratch.scratch2} style={{padding:'20px',backgroundColor:'white',paddingTop:'0px',paddingBottom:'0px'}} href="#s2" id='sc2'>Foydalanish</a><Button onClick={this.Sc2} onDoubleClick={this.start}> </Button></div>
<div style={{display:'flex',position:'fixed',right:'0px',top:'180px',zIndex:'21312' }}>
  <a className={scratch.scratch3} style={{padding:'20px',backgroundColor:'white',paddingTop:'0px',paddingBottom:'0px'}} href="#s3" id='sc3'>Maqsadimiz</a><Button onClick={this.Sc3} onDoubleClick={this.start}> </Button></div>
<div style={{display:'flex',position:'fixed',right:'0px',top:'220px',zIndex:'21312' }}>
  <a className={scratch.scratch4} style={{padding:'20px',backgroundColor:'white',paddingTop:'0px',paddingBottom:'0px'}} href="#s4" id='sc4'>Scratchda yaratilgan o`yinlar</a><Button onClick={this.Sc4} onDoubleClick={this.start} > </Button></div>
<div style={{display:'flex',position:'fixed',right:'0px',top:'260px',zIndex:'21312' }}>
  <a className={scratch.scratch5} style={{padding:'20px',backgroundColor:'white',paddingTop:'0px',paddingBottom:'0px'}} href="#s5" id='sc5'>Savollar</a><Button onClick={this.Sc5} onDoubleClick={this.start}> </Button></div>
</div>

    <div class="section-container">
  <section id='s1'>
    <h1 style={{padding:'100px',fontFamily:'fanatic',fontSize:'60px',color:'orange'}}  id={scratch.anim}>Scratch  bloklarga asoslangan dasturlash yordamida interaktiv hikoyalar, o'yinlar , badiiy , simulyatsiya va boshqalarni yaratish uchun mo`ljallangan dasturlash tili` .</h1>
  </section>
  <section id='s2'>
    <div style={{display:'flex'}}><img style={{width:'50%',padding:'40px',margin:'40px'}} alt=" " className={scratch.rasmmm}  src='https://www.kangaroopert.com/wp-content/uploads/2018/01/scratch-project-1-vid.gif'/>
    <h1 style={{width:'50%',padding:'80px',fontFamily:'fanatic',fontSize:'35px',color:'orange'}} id={scratch.anim} >Scratch - bu asosan kodni o'rganishda yordam beradigan 8-16 yoshdagi bolalarga mo'ljallangan blokli vizual dasturlash tili va veb-sayti. Sayt foydalanuvchilari Internetda blokga o'xshash interfeys yordamida loyihalar yaratishlari mumkin. Xizmat MIT Media Lab tomonidan ishlab chiqilgan , 70 dan ortiq tillarga tarjima qilingan va dunyoning aksariyat qismlarida qo'llaniladi. Scratch maktabdan keyingi markazlarda, maktablarda va kollejlarda, shuningdek boshqa jamoat bilimlari muassasalarida o'qitiladi va qo'llaniladi.
      </h1></div>
  </section>
  <section id='s3'>
    <h1><Row>
      <Col><img alt=" " style={{width:'100%',padding:'20px'}} className={scratch.rasmm}  src='https://lh5.googleusercontent.com/WXipiV4kl0MbFIaypdfl5wPY2CBPuC8YUlJTH_vHzRW5-bZX2CPwMm0dKF2-pnloA7ipFGobciUT5FEp9GJLgfHgYCtOKbaYlGpdTYNRIAq9QqICXia-9GZzr7mY2C7FJjqM51lE'/></Col>
      <Col><img alt=" "  style={{width:'100%',padding:'20px'}} className={scratch.rasmm} src='https://i.ytimg.com/vi/r56Tmwr6PAA/maxresdefault.jpg'/></Col>
      <Col><img alt=" "  style={{width:'100%',padding:'20px'}} className={scratch.rasmm} src='http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/08/Django-Tutorial.png'/></Col>
      </Row></h1>
  </section>
  <section id='s4'>
  <iframe width="100%" height="100%" title=' '
src="https://res.cloudinary.com/duvkf4jlo/video/upload/v1644405159/Scratch_hafaqr.mp4?_s=vp-1.7.0">
</iframe> 
  </section>
  <section id='s5'>
    <h1>E`tibor uchun rahmat! Kimda savillar bo`lsa berishi mumkin.</h1>
  </section>
</div>


</div>)}
</div>
</div>
  }
}

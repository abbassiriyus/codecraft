import scratch from '../css/Scratch.module.css';
import imgTogle from '../img/list.svg';
import React, { Component } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import './scratch.css'
import { Image } from 'antd';
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
       <h1 className={scratch.idi1} id='id1'>Scratch это-</h1>
        </header>
       
        <Button style={{position:'fixed',zIndex:'100',opacity:'0.6'}} onClick={this.Uz}>Uz</Button>
           <div className='container-fluid' id={scratch.fluid}>
               <div className='row'>
                   <div className='col-md-9' id={scratch.colMd9}>
                   <div className={scratch.drop}>
       
        <div className={scratch.dropdown}>
            <button className={scratch.dropbtn}>   <img className={scratch.dropbtnImg} alt=" " src={imgTogle} />  </button>
            <div className={scratch.dropdownContent}>
                <a href='#id1' >Scratch это-</a>
                <a href='#id2' > Scratch программирование</a>
                <a href='#id3' > как это выглядит </a>
                <a href='#id4' > Создавая новые</a>
            </div>
        </div>
        {/* hjghjghjgjhggjhgj */}
        </div>




                        <div className={scratch.textCol}>
                            <p className={scratch.text}></p>
                        </div>
                        <div className={scratch.textDiv}>
                            <p id='id2' className={scratch.text1Span}>Scratch программирование: что это и кому оно будет интересно</p>
                            <p  className={scratch.text1}>
                            Сегодня компьютерная грамотность является одним из базовых навыков для любого человека. Если Вы желаете идти в ногу со временем, легко разбираться в новых предлагаемых цивилизацией технических возможностях, использовать все блага человечества в Сети – знание компьютера и даже основ хоть какого-то программирования является просто необходимым. Но если для людей старшего возраста это может быть уже и не так интересно, то для молодежи, а особенно детей, все это является очень важным и просто обязательным.
                            Известно, что самые большие заработки на постсоветском пространстве имеют программисты. Работая в большинстве своем на западные компании, они имеют даже по 3 000 – 5 000 $ в месяц, что является просто громадным разрывом по отношение к другим специальностям. Понятно, что все больше людей желает направить детей именно в программирование, так как здесь они смогут реализовать свои умственные и аналитические способности, при этом, не работая за 100 $ в месяц. Но с чего начинать обучение, особенно если ребенку еще 5-8 лет, ведь чистое программирование – это бесконечная скука и постоянное сидение за компьютером, что любому малышу просто противно.
Но такое явление, как Scratch программирование, подробнее о котором можно почитать по ссылке https://polycent.ru/courses/programmirovanie/10f6335c-196c-ecce-a1c1-583a9873c35e/, исправляет эти досадные минусы. Данный обучающий курс начального уровня программирования для детей выстроен так, что воспринимается как игра и будет очень интересен каждому ребенку, проявляющему соответствующие склонности.
                            </p>
                    <img className={scratch.imgPython} alt=' ' src='http://en.kidit.com.ua/wp-content/uploads/2018/11/scratch.png' />
                        
                        </div>
                        <div className={scratch.textDiv}>
                            <p id='id3' className={scratch.text1Span}>Scratch программирование – как это выглядит</p>
                            <p className={scratch.text1}>
                            Данный тип обучающего ПО разработан специально для детей и позволяет сделать самое главное – визуализировать процессы создания самых примитивных программ. Ребенку не нужно прожигать глаза о сухой код и думать алгоритмами из высшей математики. Достаточно просто собирать забавные мини мультфильмы, которые будут состоять из самых простых сценок и содержать забавных персонажей, которые любят совершенно все детки.
                            Набрасывая на композицию все новые объекты, звуковые эффекты, малыш будет видеть о подноготную данного процесса, так как все шаги разложены на определенные команды, отображаемые сбоку экрана. Никакой скуки и неприятного обучения всевозможных процедур, правил и команд! Ребенок учится играючи, получая положительные эмоции, с увлечением занимаясь достаточно творческим и разнообразным делом.
Многие взрослые, которые оценили рассматриваемую программу, высказались о ней исключительно положительно. ПО способно увлечь даже взрослого человека, поэтому, что уж говорить о детях, которые так стремятся ко всему новому.
Достаточно просто зайти на сайт POLYCENT или ей подобной, чтобы найти программу Scratch программирование. Работая с данным ПО, ребенок получает следующую пользу:
                            </p>
                        </div>
                    <div className={scratch.pythonUrlIm}> 
                    <img className={scratch.imgPython} alt=' ' src='https://ktp-production-public.s3.us-east-2.amazonaws.com/photos/course_main-444.3aaece89e537dd96353c22e457351c90' />
                    </div>          

                    <div className={scratch.ulliBox}>
                        <p id='id4' className={scratch.ulliTitle}>Scratch программирование – как это выглядит</p>
                        <ul className={scratch.ulli}>
                            <li>Развивает творческие и аналитические способности. Создавая новые мультяшные сценки, он видит, что его действия порождают интересный результат и стремится усложнить его, сделать более совершенным. Для этого нужно развиваться и знать, уметь больше;</li>
                            <li>Программа закладывает хорошую базу для понимания более серьезных уровней программирования, которые придется изучать в будущем в университете или на специальных курсах;</li>
                            <li>Ребенок развивает свою память, становится более мыслящим и интересным для своих однолеток. Дополнительные знания помогут ему лучше ориентироваться в окружающем мире и более правильно выбрать себе дорогу в жизнь. Если Вы желаете, чтобы Ваш ребенок вырос настоящим программистом и зарабатывал по много тысяч $$$, то обязательно подтолкните его к этому светлому пути! </li>
                        </ul>
                    </div>

                   
                    
                    
                   </div>

                   <div className='col-3' id={scratch.colMd3}>
                        <div className={scratch.position} >
                            <ul className={scratch.hrefUl}>
                                <li className={scratch.hrefLi}><a href='#id1' > Scratch это-</a></li>
                                <li className={scratch.hrefLi}><a href='#id2' > Scratch программирование </a></li>
                                <li className={scratch.hrefLi}><a href='#id3' > как это выглядит </a></li>
                                <li className={scratch.hrefLi}><a href='#id4' > Создавая новые </a></li> 
                            </ul>
                        </div>
                   </div>
               </div>
           </div></div>):(<div className='scratch'>
           {/* <header className={scratch.header1} style={{zIndex:'1323'}}>
       <h1 className={scratch.idi1} id='id1' style={{fontSize:'50px'}}>Scratchning afzalliklar va qo`shimcha imkoniyatlari</h1>
        </header> */}
    <Button style={{position:'fixed',zIndex:'100',opacity:'0.6'}} onClick={this.Ru}>Rus</Button>
<div style={{position:'fixed',right:'0px',top:'300px',zIndex:'21312'}}>
<div style={{display:'flex',position:'fixed',right:'0px',top:'300px',zIndex:'21312' }}>
  <a className={scratch.scratch1} style={{padding:'20px',backgroundColor:'white',paddingTop:'0px',paddingBottom:'0px'}} href="#s1" id='sc1'>Scratch nima?</a><Button onClick={this.Sc1}> </Button></div>
<div style={{display:'flex',position:'fixed',right:'0px',top:'340px',zIndex:'21312' }}>
  <a className={scratch.scratch2} style={{padding:'20px',backgroundColor:'white',paddingTop:'0px',paddingBottom:'0px'}} href="#s2" id='sc2'>Foydalanish</a><Button onClick={this.Sc2}> </Button></div>
<div style={{display:'flex',position:'fixed',right:'0px',top:'380px',zIndex:'21312' }}>
  <a className={scratch.scratch3} style={{padding:'20px',backgroundColor:'white',paddingTop:'0px',paddingBottom:'0px'}} href="#s3" id='sc3'>Maqsadimiz</a><Button onClick={this.Sc3}> </Button></div>
<div style={{display:'flex',position:'fixed',right:'0px',top:'420px',zIndex:'21312' }}>
  <a className={scratch.scratch4} style={{padding:'20px',backgroundColor:'white',paddingTop:'0px',paddingBottom:'0px'}} href="#s4" id='sc4'>Scratchda yaratilgan o`yinlar</a><Button onClick={this.Sc4}> </Button></div>
<div style={{display:'flex',position:'fixed',right:'0px',top:'460px',zIndex:'21312' }}>
  <a className={scratch.scratch5} style={{padding:'20px',backgroundColor:'white',paddingTop:'0px',paddingBottom:'0px'}} href="#s5" id='sc5'>Savollar</a><Button onClick={this.Sc5}> </Button></div>
</div>

    <div class="section-container">
  <section id='s1'>
    <h1 style={{padding:'50px',fontFamily:'fanatic',fontSize:'60px',color:'orange'}}>Scratch  bloklarga asoslangan dasturlash yordamida interaktiv hikoyalar, o'yinlar , badiiy , simulyatsiya va boshqalarni yaratish uchun vositalar mavjud .</h1>
  </section>
  <section id='s2'>
    <div style={{display:'flex'}}><img style={{width:'50%',padding:'80px'}} src='https://www.kangaroopert.com/wp-content/uploads/2018/01/scratch-project-1-vid.gif'/>
    <h1 style={{width:'50%',padding:'80px',fontFamily:'fanatic',fontSize:'35px',color:'orange'}}  >Scratch - bu asosan kodni o'rganishda yordam beradigan 8-16 yoshdagi bolalarga mo'ljallangan blokli vizual dasturlash tili va veb-sayti. Sayt foydalanuvchilari Internetda blokga o'xshash interfeys yordamida loyihalar yaratishlari mumkin. Xizmat MIT Media Lab tomonidan ishlab chiqilgan , 70 dan ortiq tillarga tarjima qilingan va dunyoning aksariyat qismlarida qo'llaniladi. Scratch maktabdan keyingi markazlarda, maktablarda va kollejlarda, shuningdek boshqa jamoat bilimlari muassasalarida o'qitiladi va qo'llaniladi.
      </h1></div>
  </section>
  <section id='s3'>
    <h1><Row>
      <Col><img style={{width:'100%',padding:'20px'}} className={scratch.rasmm}  src='https://lh5.googleusercontent.com/WXipiV4kl0MbFIaypdfl5wPY2CBPuC8YUlJTH_vHzRW5-bZX2CPwMm0dKF2-pnloA7ipFGobciUT5FEp9GJLgfHgYCtOKbaYlGpdTYNRIAq9QqICXia-9GZzr7mY2C7FJjqM51lE'/></Col>
      <Col><img  style={{width:'100%',padding:'20px'}} className={scratch.rasmm} src='https://i.ytimg.com/vi/r56Tmwr6PAA/maxresdefault.jpg'/></Col>
      <Col><img  style={{width:'100%',padding:'20px'}} className={scratch.rasmm} src='http://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/08/Django-Tutorial.png'/></Col>
      </Row></h1>
  </section>
  <section id='s4'>
  <iframe width="100%" height="100%"
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

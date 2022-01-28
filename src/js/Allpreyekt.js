import React,{Component} from 'react'
import { Col,Row } from 'react-bootstrap';
import style7 from '../css/allpreyekt.module.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Loyiha from './Loyiha';
import Loyiham from './Loyiham';
import codecraft1 from '../img/codecraft1.png';
import codecraft2 from '../img/codecraft2.png';
import codecraft3 from '../img/codecraft3.png';
import codecraft4 from '../img/codecraft4.png';
import codecraft5 from '../img/codecraft5.png'
import irrigatsiya1 from '../img/irrigatsiya1.png'
import irrigatsiya2 from '../img/irrigatsiya2.png'
import irrigatsiya3 from '../img/irrigatsiya3.png'
import irrigatsiya4 from '../img/irrigatsiya4.png'
import irrigatsiya5 from '../img/irrigatsiya5.png'
import bogcha1 from '../img/bogcha1.png'
import bogcha2 from '../img/bogcha2.png'
import bogcha3 from '../img/bogcha3.png'
import bogcha4 from '../img/bogcha4.png'
import bogcha5 from '../img/bogcha5.png'
import shashka from '../img/shashka.png';
import shashka0 from '../img/shashka0.png';
import shashka3 from '../img/shashka3.png';
import dore from '../img/dore.png';
import dore0 from '../img/dore0.png';
import dore1 from '../img/dore1.png';
import raketa from '../img/raketa.png';
import raketa2 from '../img/raketa2.png';
import raketa3 from '../img/raketa3.png';





const items = [
  <div className={style7.item19} data-value="1"><img className={style7.img15} alt=" " src={codecraft1} /></div>,
  <div className={style7.item19} data-value="2"><img className={style7.img15} alt=" " src={codecraft2} /></div>,
  <div className={style7.item19} data-value="3"><img className={style7.img15} alt=" " src={codecraft3} /></div>,
  <div className={style7.item19} data-value="4"><img className={style7.img15} alt=" " src={codecraft4} /></div>,
  <div className={style7.item19} data-value="5"><img className={style7.img15} alt=" " src={codecraft5} /></div>,
];

const items1 = [
  <div className={style7.item19} data-value="1"><img className={style7.img15} alt=" " src={irrigatsiya1} /></div>,
  <div className={style7.item19} data-value="2"><img className={style7.img15} alt=" " src={irrigatsiya2} /></div>,
  <div className={style7.item19} data-value="3"><img className={style7.img15} alt=" " src={irrigatsiya3} /></div>,
  <div className={style7.item19} data-value="4"><img className={style7.img15} alt=" " src={irrigatsiya4} /></div>,
  <div className={style7.item19} data-value="5"><img className={style7.img15} alt=" " src={irrigatsiya5} /></div>,
];

const items2 = [
  <div className={style7.item19} data-value="1"><img className={style7.img15} alt=" " src={bogcha1} /></div>,
  <div className={style7.item19} data-value="2"><img className={style7.img15} alt=" " src={bogcha2} /></div>,
  <div className={style7.item19} data-value="3"><img className={style7.img15} alt=" " src={bogcha3} /></div>,
  <div className={style7.item19} data-value="4"><img className={style7.img15} alt=" " src={bogcha4} /></div>,
  <div className={style7.item19} data-value="5"><img className={style7.img15} alt=" " src={bogcha5} /></div>,
];

const items3 = [
    <div className={style7.item19} data-value="1"><img className={style7.img15} alt=" " src={shashka} /></div>,
    <div className={style7.item19} data-value="2"><img className={style7.img15} alt=" " src={shashka0} /></div>,
    <div className={style7.item19} data-value="3"><img className={style7.img15} alt=" " src={shashka3} /></div>,
  ];

  const items4 = [
    <div className={style7.item19} data-value="1"><img className={style7.img15} alt=" " src={dore} /></div>,
    <div className={style7.item19} data-value="2"><img className={style7.img15} alt=" " src={dore0} /></div>,
    <div className={style7.item19} data-value="3"><img className={style7.img15} alt=" " src={dore1} /></div>,
  ];

  const items5 = [
    <div className={style7.item19} data-value="1"><img className={style7.img15} alt=" " src={raketa} /></div>,
    <div className={style7.item19} data-value="2"><img className={style7.img15} alt=" " src={raketa2} /></div>,
    <div className={style7.item19} data-value="3"><img className={style7.img15} alt=" " src={raketa3} /></div>,
  ];
export default class Allpreyekt extends Component {
  render() {
    return <div>
    <Loyiha/>
    <div style={{overflowX:'hidden',backgroundColor:'black'}} >
      
      <div className={style7.web}>
      <h1 className={style7.title11}><span>Haши</span> веб-проекты</h1>


<Row>
<Col xxl={4} xl={4} lg={6} md={12}><div className={style7.corusell}> 
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

    <h3>Сайт CodeCraft</h3>
    <a className={style7.aHref} href="http://codecraft.uz">CodeCraft.uz</a>
    <p className={style7.loremText}>Сайт для учебного центра: <br/>
*Презинтабельный вид<br/>
*Регистрирация учеников<br/>
*Администроционное поле</p>
    </div></Col>
    <Col xxl={4} xl={4} lg={6} md={12}><div className={style7.corusell}> 
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
        items={items1}
        mouseTracking
    />

    <h3>Образовательный сайт</h3>
    <a className={style7.aHref} href="http://credence.uz/">Credence.uz</a>
    <p className={style7.loremText}>Сайт для университета: <br/>
*Видиоуроки/Статьи для студентов и профессоров<br/>
*Онлайн библиотека для скачивания всех необходимых учебников</p>
    </div></Col>
    <Col xxl={4} xl={4} lg={6} md={12}><div className={style7.corusell}> 
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
        items={items2}
        mouseTracking
    />

    <h3>Caдoвый вeб-caйт</h3>
    <a className={style7.aHref} href="http://kg.codecraft.uz">Credence.uz</a>
    <p className={style7.loremText}>Сайт для Часных садов<br/> 
*Захватывающие анимации<br/> 
*Новости и расписание ивентов<br/>  
*Информации о воспитателей и дневной отчёт про ребенка</p>
    </div></Col>
</Row>


</div>
    </div>









    <div style={{overflowX:'hidden',backgroundColor:' rgba(0, 0, 0, 0.445)'}} >
     
      <div className={style7.web2}>
      <h1 className={style7.title11}><span>Hаши</span> Scratch-проекты</h1>


<Row>
<Col xxl={4} xl={4} lg={6} md={12}><div className={style7.corusell2}> 
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
        items={items3}
        mouseTracking
    />

    <h3>шашки</h3>
    <a className={style7.aHref} href="http://scratch03.codecraft.uz/">scratch03.codecraft.uz</a>
    <p className={style7.loremText}>open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.</p>
    </div></Col>
    <Col xxl={4} xl={4} lg={6} md={12}><div className={style7.corusell2}> 
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
        items={items4}
        mouseTracking
    />

    <h3>Фортепиано</h3>
    <a className={style7.aHref} href="http://scratch01.codecraft.uz/">scratch01.codecraft.uz</a>
    <p className={style7.loremText}> клавишный струнный инструмент с горизонтальным (рояль) или вертикальным (пианино) расположением струн</p>
    </div></Col>
    <Col xxl={4} xl={4} lg={6} md={12}><div className={style7.corusell2}> 
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
        items={items5}
        mouseTracking
    />

    <h3>ракета</h3>
    <a className={style7.aHref} href="http://scratch02.codecraft.uz/">scratch02.codecraft.uz</a>
    <p className={style7.loremText}>open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.</p>
    </div></Col>
</Row>

</div><Loyiham/>
    </div>
    </div>
  }
}


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

const items = [
  <div className={style7.item19} data-value="1"><img className={style7.img15} alt=" " src={codecraft1} /></div>,
  <div className={style7.item19} data-value="2"><img className={style7.img15} alt=" " src={codecraft2} /></div>,
  <div className={style7.item19} data-value="3"><img className={style7.img15} alt=" " src={codecraft3} /></div>,
  <div className={style7.item19} data-value="4"><img className={style7.img15} alt=" " src={codecraft4} /></div>,
  <div className={style7.item19} data-value="5"><img className={style7.img15} alt=" " src={codecraft5} /></div>,
];

export default class Allpreyekt extends Component {
  render() {
    return <div style={{overflowX:'hidden'}} >
      <Loyiha/>
      <h1 className={style7.title11}><span>наши</span> веб-проекты</h1>
<div className={style7.web}>

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
    <a className={style7.aHref} href="https://codecraft.uz">CodeCraft.uz</a>
    <p className={style7.loremText}>open it from the local filesystem in your browser. It does a slow runtime code transformation, so we’d only recommend using this for simple demos.</p>
    </div></Col>
<Col lg={4} md={12}></Col>
<Col lg={4} md={12}></Col>
</Row>


</div><Loyiham/>
    </div>;
  }
}


import React from 'react'
import { Accordion } from 'react-bootstrap'
import accordionstyle from '../css/accordion.module.css'
export default function accordion() {
    return (
        <div>


            <div className={accordionstyle.accordions}>
           
            <h1 className={accordionstyle.title}>Часто задаваемые <span> вопросы</span></h1>
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header ><h5 className={accordionstyle.accordionHeader}>На каком языке ведутся занятия?</h5>
</Accordion.Header>
    <Accordion.Body>
   <p className={accordionstyle.textaccordion}> В данное время занятия ведутся на русском языке, с изучением технической терминологии на английском</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h5 className={accordionstyle.accordionHeader}> Есть ли возрастные ограничения?</h5>
</Accordion.Header>
    <Accordion.Body>
  <p className={accordionstyle.textaccordion}>  Да, наша программа курсов рассчитана на детей от 9 до 16 лет</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header> <h5 className={accordionstyle.accordionHeader}>В какое время и сколько раз в неделю проходят занятия?</h5>
</Accordion.Header>
    <Accordion.Body>
   <p className={accordionstyle.textaccordion}> 3 раза в неделю по 120 минут. Подробнее время занятий вы можете посмотреть в разделе Курсы</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header><h5 className={accordionstyle.accordionHeader}> Где проходят занятия?</h5>
</Accordion.Header>
    <Accordion.Body>
   <p className={accordionstyle.textaccordion}> Занятия проходят в Ташкенте по адресу Мирзо-Улугбекский район, ул.Салом1, 241 школа</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header><h5 className={accordionstyle.accordionHeader}>Какова продолжительность курсов?</h5>
</Accordion.Header>
    <Accordion.Body>
   <p className={accordionstyle.textaccordion}> Продолжительность курсов 1-3 месяца</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header><h5 className={accordionstyle.accordionHeader}>Сколько детей занимается в группе?</h5>
</Accordion.Header>
    <Accordion.Body>
  <p className={accordionstyle.textaccordion}>  В наших группах одновременно занимаются от 6 до 15 человек</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header><h5 className={accordionstyle.accordionHeader}> Где мы можем получить более подробную информацию о каждом курсе?</h5></Accordion.Header>
    <Accordion.Body>
<p className={accordionstyle.textaccordion}>Для подробной информации вы можете перейти в раздел Курсы, либо связаться с нами по номерам +998 99 300-55-00, +998 93 537-66-77 или отправив электронное письмо на адрес hello@codecraft.uz</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
        </div>
    )
}

import React from 'react'
import { Accordion } from 'react-bootstrap'
import accordionstyle from '../css/accordion.module.css'
export default function accordion() {
    return (
        <div>
    
    <main class="main">

<section class="sec1">
    <div class="containe">
        <div class="text">
            <h1 class="h1">ЗАПИШИТЕСЬ НА</h1>
            <h2 class="h2">БЕСПЛАТНЫЙ МАСТЕР-КЛАСС</h2>
        </div>
    </div>
</section>

<section class="sec2">
    <div class="containe">
        <div class="text3">

            <div class="cart1">
                <img src="img/koz.png" alt="" class="mini_logo"/>
                <p class="cart_text">Мы поможем вам определиться и подобрать подходящее направление для вашего ребенка</p>
            </div>
            
            <div class="cart2">
                <img src="img/section-6-emoji-2.webp" alt="" class="mini_logo2"/>
                <p class="cart_text2">Вы познакомитесь с преподавателем и посмотрите как проходят наши занятия</p>
            </div>
            <div class="cart3">
                <img src="img/section-6-emoji-3.webp" alt="" class="mini_logo3"/>
                <p class="cart_text3">Ребенок проведет свое время с пользой, узнает что-то новое и создаст первый проект</p>
            </div>

        </div>
    </div>
</section>

<section class="sec3">
    <div class="container">
        <img src="img/robort-removebg-preview.png" alt="" class="robort"/>
        <div class="sec3_cart">
            <p class="p_sec3"><b>Заявка на мастер-класс</b></p>

            <div class="inputlar">

                <div class="input1">
                    <p class="imya" for="firstname">Имя</p>
                    <input name="name" class="input_imya" type="text" id="firstname" minlength="2" placeholder="Введите имя..." required=""/>
                </div>

                <div class="input2">
                    <p class="imya" for="lastname">Фамилия</p>
                    <input name="lastname" class="input_familya" type="text" id="lastname" minlength="2" placeholder="Введите фамилию..." required="" />
                </div>

                
                
            </div>
            <div class="input3">
                <p class="imya" for="lastname">Номер телефона</p>
                <input name="lastname" class="input_nomer" type="text" id="lastname1" minlength="2" placeholder="+998" required="" />
            </div>
            

            <div class="row" id="messengers">
                <p class="udobniy">Удобный способ связи</p>

                <div class="end">
                    <div class="col-4 d-flex justify-content-start">
                        <div class="form-check">
                            <input class="tel" type="checkbox" id="whatsapp" value="whatsapp" />
                            <label class="form-check-label" for="whatsapp">телефон</label>
                        </div>
                    </div>
                    <div class="col-4 d-flex justify-content-end">
                        <div class="form-check">
                            <input class="telegram" type="checkbox" id="telegram" value="telegram"/>
                            <label class="form-check-label" for="telegram">Telegram</label>
                        </div>
                    </div>
                </div>
                <button id="submit" name="sendMailBtn" class="saxranit" type="submit">
                    <i class="fas fa-paw hvr-icon me-2" aria-hidden="true"></i> Записаться
                </button>
            </div>

        </div>
    </div>
</section>
</main>









            <div className={accordionstyle.accordions}>
           
            <h1 className={accordionstyle.title}>Часто задаваемые <span> вопросы</span></h1>
            <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header data-aos="flip-up" ><h5 className={accordionstyle.accordionHeader}>На каком языке ведутся занятия?</h5>
</Accordion.Header>
    <Accordion.Body>
   <p className={accordionstyle.textaccordion}> В данное время занятия ведутся на русском языке, с изучением технической терминологии на английском</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header data-aos="flip-up"><h5 className={accordionstyle.accordionHeader}> Есть ли возрастные ограничения?</h5>
</Accordion.Header>
    <Accordion.Body>
  <p className={accordionstyle.textaccordion}>  Да, наша программа курсов рассчитана на детей от 9 до 16 лет</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header data-aos="flip-up"> <h5 className={accordionstyle.accordionHeader}>В какое время и сколько раз в неделю проходят занятия?</h5>
</Accordion.Header>
    <Accordion.Body>
   <p className={accordionstyle.textaccordion}> 3 раза в неделю по 120 минут. Подробнее время занятий вы можете посмотреть в разделе Курсы</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header data-aos="flip-up"><h5 className={accordionstyle.accordionHeader}> Где проходят занятия?</h5>
</Accordion.Header>
    <Accordion.Body>
   <p className={accordionstyle.textaccordion}> Занятия проходят в Ташкенте по адресу Мирзо-Улугбекский район, ул.Салом1, 241 школа</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header data-aos="flip-up"><h5 className={accordionstyle.accordionHeader}>Какова продолжительность курсов?</h5>
</Accordion.Header>
    <Accordion.Body>
   <p className={accordionstyle.textaccordion}> Продолжительность курсов 1-3 месяца</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header data-aos="flip-up"><h5 className={accordionstyle.accordionHeader}>Сколько детей занимается в группе?</h5>
</Accordion.Header>
    <Accordion.Body>
  <p className={accordionstyle.textaccordion}>  В наших группах одновременно занимаются от 6 до 15 человек</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="6">
    <Accordion.Header data-aos="flip-up"><h5 className={accordionstyle.accordionHeader}> Где мы можем получить более подробную информацию о каждом курсе?</h5></Accordion.Header>
    <Accordion.Body>
<p className={accordionstyle.textaccordion}>Для подробной информации вы можете перейти в раздел Курсы, либо связаться с нами по номерам +998 99 300-55-00, +998 93 537-66-77 или отправив электронное письмо на адрес hello@codecraft.uz</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
        </div>
    )
}

import React from 'react';
import skript from '../css/Javaskript.module.css'
import imgTogle from '../img/list.svg';
import InfoIcon from '@mui/icons-material/Info';



const Javaskript = () => {
    return (
        <div>
            <header className={skript.header1}>
               <h1 className={skript.idi1} id='id1'> Введение в JavaScript</h1>
                </header>
                
                   <div className='container-fluid' id={skript.fluid}>
                       <div className='row'>
                           <div className='col-md-9' id={skript.colMd9}>
                           <div className={skript.drop}>
                {/* hghfghfghfghfghfgh */}
                <div className={skript.dropdown}>
                    <button className={skript.dropbtn}>   <img className={skript.dropbtnImg} alt=" " src={imgTogle} />  </button>
                    <div className={skript.dropdownContent}>
                    <li className={skript.hrefLi}><a href='#id1' > Введение в JavaScript </a></li>
                    <li className={skript.hrefLi}><a href='#id2' > Что такое JavaScript? </a></li>
                    <li className={skript.hrefLi}><a href='#id3' > Почему JavaScript? </a></li>
                    <li className={skript.hrefLi}><a href='#id4' > Как работают движки? </a></li> 
                    <li className={skript.hrefLi}><a href='#id5' > Что может JavaScript в браузере? </a></li> 
                    <li className={skript.hrefLi}><a href='#id6' > Чего НЕ может JavaScript в браузере? </a></li> 
                    <li className={skript.hrefLi}><a href='#id7' > Что делает JavaScript особенным? </a></li> 
                    <li className={skript.hrefLi}><a href='#id8' > Языки «над» JavaScript </a></li>
                    </div>
                </div>
                {/* hjghjghjgjhggjhgj */}
                </div>




                                <div className={skript.textCol}>
                                    <p className={skript.text}>Давайте посмотрим, что такого особенного в JavaScript, чего можно достичь с его помощью и какие другие технологии хорошо с ним работают. </p>
                                </div>
                                <div className={skript.textDiv}>
                                    <p id='id2' className={skript.text1Span}>Что такое JavaScript?</p>
                                    <p  className={skript.text1}>
                                        Изначально JavaScript был создан, чтобы «сделать веб-страницы живыми».
                                        Программы на этом языке называются скриптами. Они могут встраиваться в HTML и выполняться автоматически при загрузке веб-страницы.
                                        Скрипты распространяются и выполняются, как простой текст. Им не нужна специальная подготовка или компиляция для запуска.
                                        Это отличает JavaScript от другого языка – Java.
                                    </p>
                                </div>
                                <div className={skript.textBorderDiv}>
                                    <p id='id3' className={skript.textBorderTitle}><InfoIcon color='primary' sx={{margin: 2}}/>Почему JavaScript?</p>
                                    <p className={skript.textBorderBody}>
                                        Когда JavaScript создавался, у него было другое имя – «LiveScript». Однако, язык Java был очень популярен в то время, и было решено, что позиционирование JavaScript как «младшего брата» Java будет полезно.<br />
                                        Со временем JavaScript стал полностью независимым языком со своей собственной спецификацией, называющейся ECMAScript, и сейчас не имеет никакого отношения к Java.
                                    </p>
                                </div>
                            <div className={skript.ulliBox}>
                                <p  className={skript.ulliTitle}></p>
                                <p className={skript.title1}> 
                                    Сегодня JavaScript может выполняться не только в браузере, но и на сервере или на любом другом устройстве, которое имеет специальную программу, называющуюся «движком» JavaScript.
                                    У браузера есть собственный движок, который иногда называют «виртуальная машина JavaScript».
                                    Разные движки имеют разные «кодовые имена». Например:
                                    <ul>
                                        <li>V8 – в Chrome и Opera.</li>
                                        <li>SpiderMonkey – в Firefox.</li>
                                        <li>…Ещё есть «Trident» и «Chakra» для разных версий IE, «ChakraCore» для Microsoft Edge, «Nitro» и «SquirrelFish» для Safari и т.д.</li>
                                    </ul>
                                    Эти названия полезно знать, так как они часто используются в статьях для разработчиков. Мы тоже будем их использовать. Например, если «функциональность X поддерживается V8», тогда «Х», скорее всего, работает в Chrome и Opera.
                                </p>
                            </div>
                            <div className={skript.textBorderDiv}>
                                <p id='id4' className={skript.textBorderTitle}><InfoIcon color='primary' sx={{margin: 2}}/>Как работают движки?</p>
                                <p className={skript.textBorderBody}>
                                    Движки сложны. Но основы понять легко.
                                    <ol>
                                        <li>Движок (встроенный, если это браузер) читает («парсит») текст скрипта.</li>
                                        <li>Затем он преобразует («компилирует») скрипт в машинный язык.</li>
                                        <li>После этого машинный код запускается и работает достаточно быстро.</li>
                                    </ol>
                                    Движок применяет оптимизации на каждом этапе. Он даже просматривает скомпилированный скрипт во время его работы, анализируя проходящие через него данные, и применяет оптимизации к машинному коду, полагаясь на полученные знания. В результате скрипты работают очень быстро.
                                </p>
                            </div>





                            <div className={skript.ulliBox}>
                                <p id='id5' className={skript.ulliTitle}>Что может JavaScript в браузере?</p>  
                                <p className={skript.title1}>
                                    Современный JavaScript – это «безопасный» язык программирования. Он не предоставляет низкоуровневый доступ к памяти или процессору, потому что изначально был создан для браузеров, не требующих этого.
                                    Возможности JavaScript сильно зависят от окружения, в котором он работает. Например, Node.JS поддерживает функции чтения/записи произвольных файлов, выполнения сетевых запросов и т.д.
                                    В браузере для JavaScript доступно всё, что связано с манипулированием веб-страницами, взаимодействием с пользователем и веб-сервером.<br/>
                                    Например, в браузере JavaScript может: 
                                    <ul>
                                        <li>Добавлять новый HTML-код на страницу, изменять существующее содержимое, модифицировать стили.</li>
                                        <li>Реагировать на действия пользователя, щелчки мыши, перемещения указателя, нажатия клавиш.</li>    
                                        <li>Отправлять сетевые запросы на удалённые сервера, скачивать и загружать файлы (технологии AJAX и COMET).</li>    
                                        <li>Получать и устанавливать куки, задавать вопросы посетителю, показывать сообщения.</li>    
                                        <li>Запоминать данные на стороне клиента («local storage»).</li>    
                                    </ul> 
                                </p>                              
                            </div>

                            <div className={skript.ulliBox}>
                                <p id='id6' className={skript.ulliTitle}>Чего НЕ может JavaScript в браузере?</p>
                                <p className={skript.title1}>Возможности JavaScript в браузере ограничены ради безопасности пользователя. Цель заключается в предотвращении доступа недобросовестной веб-страницы к личной информации или нанесения ущерба данным пользователя.
                                <br />Примеры таких ограничений включают в себя:</p>
                                <ul className={skript.ulli}>
                                    <li>JavaScript на веб-странице не может читать/записывать произвольные файлы на жёстком диске, копировать их или запускать программы. Он не имеет прямого доступа к системным функциям ОС.
                                    Современные браузеры позволяют ему работать с файлами, но с ограниченным доступом, и предоставляют его, только если пользователь выполняет определённые действия, такие как «перетаскивание» файла в окно браузера или его выбор с помощью тега
                                    Существуют способы взаимодействия с камерой/микрофоном и другими устройствами, но они требуют явного разрешения пользователя. Таким образом, страница с поддержкой JavaScript не может незаметно включить веб-камеру, наблюдать за происходящим и отправлять информацию в ФСБ.
                                    </li>
                                    <li>
                                        Различные окна/вкладки не знают друг о друге. Иногда одно окно, используя JavaScript, открывает другое окно. Но даже в этом случае JavaScript с одной страницы не имеет доступа к другой, если они пришли с разных сайтов (с другого домена, протокола или порта).
                                        Это называется «Политика одинакового источника» (Same Origin Policy). Чтобы обойти это ограничение, обе страницы должны согласиться с этим и содержать JavaScript-код, который специальным образом обменивается данными.
                                        Это ограничение необходимо, опять же, для безопасности пользователя. Страница <code>https://anysite.com</code>, которую открыл пользователь, не должна иметь доступ к другой вкладке браузера с URL <code>https://gmail.com</code>  и воровать информацию оттуда.
                                    </li>
                                    <li>
                                    JavaScript может легко взаимодействовать с сервером, с которого пришла текущая страница. Но его способность получать данные с других сайтов/доменов ограничена. Хотя это возможно в принципе, для чего требуется явное согласие (выраженное в заголовках HTTP) с удалённой стороной. Опять же, это ограничение безопасности.
                                    </li>
                                </ul>
                                <div className={skript.imgBox}> 
                                <img className={skript.imgScript} alt='rasm' src='https://learn.javascript.ru/article/intro/limitations.svg' />
                                </div>
                                <p className={skript.title1}>Подобные ограничения не действуют, если JavaScript используется вне браузера, например — на сервере. Современные браузеры предоставляют плагины/расширения, с помощью которых можно запрашивать дополнительные разрешения.</p>

                            </div>

                            <div className={skript.ulliBox}>
                                <p id='id7' className={skript.ulliTitle}>Что делает JavaScript особенным?</p>
                                <p className={skript.paragrf}>Как минимум, три сильные стороны JavaScript:</p>
                                <div className={skript.textBorderDiv}>
                                    <p className={skript.textBorderBody}>
                                        <ul>
                                            <li>Полная интеграция с HTML/CSS.</li>
                                            <li>Простые вещи делаются просто.</li>
                                            <li>Поддерживается всеми основными браузерами и включён по умолчанию.</li>
                                        </ul>
                                    </p>
                                </div>
                                <p className={skript.paragrf}>JavaScript – это единственная браузерная технология, сочетающая в себе все эти три вещи.
                                    Вот что делает JavaScript особенным. Вот почему это самый распространённый инструмент для создания интерфейсов в браузере.
                                    Хотя, конечно, JavaScript позволяет делать приложения не только в браузерах, но и на сервере, на мобильных устройствах и т.п.</p>
                            </div>

                            <p id='id8' className={skript.ulliTitle}>Языки «над» JavaScript</p>
                            <p className={skript.paragrf}>Синтаксис JavaScript подходит не под все нужды. Разные люди хотят иметь разные возможности.
                                Это естественно, потому что проекты разные и требования к ним тоже разные.
                                Так, в последнее время появилось много новых языков, которые транспилируются (конвертируются) в JavaScript, прежде чем запустятся в браузере.
                                Современные инструменты делают транспиляцию очень быстрой и прозрачной, фактически позволяя разработчикам писать код на другом языке, автоматически преобразуя его в JavaScript «под капотом».
                                Примеры таких языков:</p>
                            <ul className={skript.ulli}>
                                <li>CoffeeScript добавляет «синтаксический сахар» для JavaScript. Он вводит более короткий синтаксис, который позволяет писать чистый и лаконичный код. Обычно такое нравится Ruby-программистам.</li>
                                <li>TypeScript концентрируется на добавлении «строгой типизации» для упрощения разработки и поддержки больших и сложных систем. Разработан Microsoft.</li>
                                <li>Flow тоже добавляет типизацию, но иначе. Разработан Facebook.</li>
                                <li>Dart стоит особняком, потому что имеет собственный движок, работающий вне браузера (например, в мобильных приложениях). Первоначально был предложен Google, как замена JavaScript, но на данный момент необходима его транспиляция для запуска так же, как для вышеперечисленных языков.</li>
                                <li>Brython транспилирует Python в JavaScript, что позволяет писать приложения на чистом Python без JavaScript.</li>
                            </ul>
                            <p className={skript.paragrf}>Есть и другие. Но даже если мы используем один из этих языков, мы должны знать JavaScript, чтобы действительно понимать, что мы делаем.</p>
                            
                           </div>

                           <div className='col-3' id={skript.colMd3}>
                                <div className={skript.position} >
                                    <ul className={skript.hrefUl}>
                                        <li className={skript.hrefLi}><a href='#id1' > Введение в JavaScript </a></li>
                                        <li className={skript.hrefLi}><a href='#id2' > Что такое JavaScript? </a></li>
                                        <li className={skript.hrefLi}><a href='#id3' > Почему JavaScript? </a></li>
                                        <li className={skript.hrefLi}><a href='#id4' > Как работают движки? </a></li> 
                                        <li className={skript.hrefLi}><a href='#id5' > Что может JavaScript в браузере? </a></li> 
                                        <li className={skript.hrefLi}><a href='#id6' > Чего НЕ может JavaScript в браузере? </a></li> 
                                        <li className={skript.hrefLi}><a href='#id7' > Что делает JavaScript особенным? </a></li> 
                                        <li className={skript.hrefLi}><a href='#id8' > Языки «над» JavaScript </a></li> 
                                    </ul>
                                </div>
                           </div>
                       </div>
                   </div>
        </div>
    );
};


export default Javaskript;
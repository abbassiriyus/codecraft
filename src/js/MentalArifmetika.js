import React from 'react';
import arr from '../css/Arifmetika.module.css';
import imgTogle from '../img/list.svg';
import InfoIcon from '@mui/icons-material/Info';




const MentalArifmetika = () => {

    return (
        <div>
            <header className={arr.header1}>
               <h1 className={arr.idi1} id='id1'> Что такое ментальная арифметика?</h1>
                </header>
                
                   <div className='container-fluid' id={arr.fluid}>
                       <div className='row'>
                           <div className='col-md-9' id={arr.colMd9}>
                           <div className={arr.drop}>
                {/* hghfghfghfghfghfgh */}
                <div className={arr.dropdown}>
                    <button className={arr.dropbtn}>   <img className={arr.dropbtnImg} alt=" " src={imgTogle} />  </button>
                    <div className={arr.dropdownContent}>
                        <a href='#id1' > Aрифметика  </a>
                        <a href='#id2' > Что такое</a>
                        <a href='#id3' > История возникновения  </a>
                        <a href='#id4' > Зачем ребенку осваивать </a>
                        <a href='#id5' > Кому подходит эта методика обучения?  </a>
                        <a href='#id6' > Чем полезна </a>
                        <a href='#id7' > Плюсы методики </a>
                        <a href='#id8' > Можно ли научиться ментальной арифметике дома? </a>
                    </div>
                </div>
                {/* hjghjghjgjhggjhgj */}
                </div>
                    <img className={arr.imgPython} alt=' ' src='https://iq007.ru/imgproxy/insecure/fit/790/445/ce/0/plain/local:///blog-images/61de8d2a52f71080441102.jpg' />
                                <div id='id2'  className={arr.textCol}>
                                    <div className={arr.textBorderDiv}>
                                        <p className={arr.textBorderTitle}><InfoIcon color='primary' sx={{margin: 2}}/>Что такое ментальная арифметика?</p>
                                        <p className={arr.textBorderBody}>
                                        Ментальная арифметика — система развития детского интеллекта, построенная на обучении быстрому счету в уме по необычной методике. Попробуйте быстро сложить числа 57, 89, 342, 511, 478 и 54 устно и без калькулятора. Вероятнее всего, вы потратите на это гораздо больше времени, чем ребенок, владеющий навыком ментальной арифметики. Сначала этому учатся на специальных счетах — абакус (или соробан), одновременно тренируя мелкую моторику рук. Затем манипуляции на счетах уже воспроизводят в уме, и моментально складывают, вычитают, делят и умножают числа.
                                        </p>
                                    </div>
                                </div>
                                <div  className={arr.textDiv}>
                                    <p id='id3' className={arr.text1Span}>История возникновения ментальной арифметики</p>
                                    <p  className={arr.text1}>
                                    Это одновременно и очень молодая, и очень древняя методика. Ее возникновение можно отсчитывать с момента изобретения счетной доски в Китае около 5 тысяч лет назад. Она представляла собой дощечку со специальными обозначениями и песком, разделенным на строки. Этой методикой подсчета пользовались в Древней Греции, Египте, Индии и Риме, там счет уже больше походили на современный вариант, поскольку подсчет велся уже не с помощью песка, а с использованием камней и косточек.<br /><br />
                                    Со временем в разных странах счеты дорабатывали и видоизменяли, а к понятию «ментальная арифметика» пришли в 1993 году. Способ производить вычисления с помощью счетов настолько значим, что его внесли в список устного и нематериального наследия ЮНЕСКО.
                                    </p>
                                </div>
                                <div className={arr.textDiv}>
                                    <p id='id4' className={arr.text1Span}>Зачем ребенку осваивать ментальную арифметику?</p>
                                    <p className={arr.text1}>
                                    Осваивая эту технику, ребенок развивает воображение и логику, тренирует память и учится быстро и легко справляться со сложными примерами по математике.<br />
                                    Чтобы вам было легче решить, стоит ли ребенку обучаться ментальной арифметике, мы расскажем, насколько это умение полезно для успеваемости в школе и как необычная методика вычислений отражается на мышлении ребенка.
                                    </p>
                                </div>
                            <img className={arr.imgPython} alt='rasm' src='https://iq007.ru/media/upload/P35A4430.jpg' />
                                <div className={arr.textDiv}>
                                    <p id='id5' className={arr.text1Span}>Кому подходит эта методика обучения?</p>
                                    <p className={arr.text1}>
                                    Обучение ментальной арифметике — мыслительный процесс, предполагающий интенсивное наращивание нейронных связей. Поэтому обучаться данной технике рекомендуется детям от 4 до 16 лет, то есть в период активного формирования клеток мозга. После 16 лет процесс освоения займет больше времени.<br />
Дети, которые не интересуются точными науками или неуверенно чувствуют себя, решая примеры по математике, найдут в занятиях ментальной арифметикой творческое начало, которое поможет им заинтересоваться учебой и проявить себя. Специфическое умение считать в уме необычным способом придает уверенности и смелости, чтобы справляться с трудностями в учебе.<br />
А еще активное развитие мышления поможет ребенку повысить успеваемость в школе и стать усидчивее.
                                    </p>
                                </div>
                            
                            <div className={arr.ulliBox}>
                                <p id='id6' className={arr.ulliTitle}>Чем полезна ментальная арифметика?</p>
                                <p className={arr.title1}> </p>
                                <ul className={arr.ulli}>
                                    <li>Развивает воображение и логику <br /> Дети начинают обучение, пользуясь специальными счетами (в Китае их называют «абакус», в Японии — «соробан»). Постепенно они закрепляют образ этого инструмента в уме и работают, подключая воображение. На многочисленных видеозаписях процесса обучения можно заметить, что ребенок делает движения пальцами, передвигая воображаемые кости.</li>
                                    <li>Развивает оба полушария мозга <br /> Вычисления — это логичные, рациональные действия, то есть задача левого полушария мозга. А воображение и креативное мышление — это уже правое полушарие. Совмещая рациональное и творческое, ментальная арифметика помогает развить оба полушария и за счет этого добиться больших успехов в решении математических задач.</li>
                                    <li>Улучшает память  <br /> Ребенок запоминает новую технику, образ счетов, множество определенных манипуляций. Все это активно тренирует память. Если интенсивно работать в этом направлении с детства, то в будущем запоминать большие объемы информации для него не составит труда.</li>
                                    <li>Тренирует концентрацию внимания и упорство <br /> Такая необычная и сложная техника вычисления требует полной сосредоточенности, поэтому ребенок с самого первого занятия тренирует выдержку и силу воли для достижения результата. Он учится терпению и упорству.</li>
                                    <li>Развивает математические способности  <br /> Мы отнесли этот пункт в конец списка, поскольку ментальная арифметика — это комплекс навыков и умений, предполагающий общее развитие интеллекта. Но все же курс сосредоточен именно на математических вычислениях и существенно облегчит ребенку процесс обучения математике в школе.</li>
                                </ul>
                            </div>
                            <img className={arr.imgPython} alt='rasm' src='https://iq007.ru/media/upload/P35A4425.jpg' />
                            <div className={arr.ulliBox}>
                                <p id='id7' className={arr.ulliTitle}>Плюсы методики</p>                                
                                <ul className={arr.ulli}>
                                    <li>Развитие мышления и мелкой моторики <br /> Работа со счетами — это еще и тренировка движений пальцев, которая развивает их ловкость и цепкость.</li>
                                    <li>Умение быстро считать в уме <br /> Практическую пользу это умение приносит и в учебе, и в жизни.</li>
                                    <li>Улучшение памяти <br /> Ребенку, осваивающему ментальную арифметику, будет значительно легче запоминать большие объемы информации по всем предметам.</li>
                                    <li>Повышение интереса к учебе <br /> Незаурядный метод вычислений и множество интересных фактов помогут ребенку понять, как много полезного и увлекательного можно найти на уроках в школе.</li>
                                    <li>Высокая концентрация внимания <br />Занятия ментальной арифметикой требуют особого сосредоточения, и это умение остается с ребенком и на уроках в школе, и в момент выполнения домашних заданий.</li>
                                </ul>
                            </div>
                            <div className={arr.textBorderDiv} style={{marginTop:'50px'}}>
                                    <p id='id8' className={arr.textBorderTitle}><InfoIcon color='primary' sx={{margin: 2}}/>Можно ли научиться ментальной арифметике дома?</p>
                                    <p className={arr.textBorderBody}>
                                    Можно, но это непростой процесс, и для обучения ребенка родителю самому сначала придется пройти курс обучения методике. Ментальная арифметика — специфический навык, в котором при сугубо самостоятельном изучении можно допустить ряд ошибок.
                                    </p>
                            </div>

                           </div>

                           <div className='col-3' id={arr.colMd3}>
                                <div className={arr.position} >
                                    <ul className={arr.hrefUl}>
                                        <li className={arr.hrefLi}><a href='#id1' > Aрифметика </a></li>
                                        <li className={arr.hrefLi}><a href='#id2' > Что такое</a></li>
                                        <li className={arr.hrefLi}><a href='#id3' > История возникновения </a></li>
                                        <li className={arr.hrefLi}><a href='#id4' > Зачем ребенку осваивать</a></li> 
                                        <li className={arr.hrefLi}><a href='#id5' > Кому подходит эта методика обучения? </a></li> 
                                        <li className={arr.hrefLi}><a href='#id6' > Чем полезна </a></li> 
                                        <li className={arr.hrefLi}><a href='#id7' > Плюсы методики </a></li> 
                                        <li className={arr.hrefLi}><a href='#id8' > Можно ли научиться ментальной арифметике дома? </a></li> 
                                    </ul>
                                </div>
                           </div>
                       </div>
                   </div>
        </div>
    );
};



export default MentalArifmetika;
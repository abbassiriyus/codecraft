import React, { Component } from 'react';
import style from '../css/Allpreyekt2.module.css';
import Button from '@mui/material/Button';
import NextWeekIcon from '@mui/icons-material/NextWeek';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
import 'antd/dist/antd.css';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const myStyle = {
// margin: "0px 10px",
fontSize: "25px",
// color: "white"
};
const save = {
  position: "absolute",
  right: "15px"
}

export default class Allpreyekt2 extends Component {
  state = {
    theme: 'dark',
    current: '1',
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return <div>
<header className={style.header1}>
               <h1> Все проекты отдела</h1>
                </header>
<div className={style.barcha13}>

<div className={style.toggle1}>
<Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
          style={{width:'100%',height:'100%'}} 
        >
          <SubMenu key="sub1"  title="Web">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="scratch">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            
          </SubMenu>
          <SubMenu key="sub4"  title="graph">
            <Menu.Item key="9">No content</Menu.Item>
            <Menu.Item key="10">No content</Menu.Item>
            <Menu.Item key="11">No content</Menu.Item>
          </SubMenu>
        </Menu>
</div>

{/* 12 */}
  <div className={style.asos1}>
    <div className={style.asos2}>
        <div className="card">
          <img src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" className="card-img-top" alt="..." />
          <div className="card-body" id={style.cardBody}>
            <div className='container-fluid'>
              <div className='row' >
                <div className='col-7' id={style.cardContainer} >
                    <p className={style.bodyIsim}>Mega-Strike</p>
                    <p className={style.bodyIsim1}>John Uick</p>
                </div>
                <div className='col-5' id={style.cardContainer}>
                <Button id={style.btnNext} variant="outlined" size='large' endIcon={<NextWeekIcon />}>
                  next
                </Button>
                </div>
              </div>
            </div>
            
            <div className={style.sharhBox}>
                <div className={style.sharhContainer}>
                  <p className={style.sharhTitle}>Mega-Strike</p>
                  <p className={style.sharhBody}>MUI precedence over your custom styles. To remove the need for !important, you need to change the CSS injection order. </p>
                </div>
                <div className={style.likeContainer}>
                <Checkbox className={style.chakbox1} {...label}  icon={<FavoriteBorder fontSize='large' sx={{color: "red"}} />} checkedIcon={<Favorite fontSize="large" sx={{color: "red"}}/>} />
                <span className={style.spanRaqam}>41215</span>
                
                
                <Checkbox
                  {...label}
                  icon={<StarOutlineIcon fontSize='large' />}
                  checkedIcon={<StarIcon fontSize='large' />}
                /> <span className={style.spanRaqam}>5215</span>

                <IconButton  aria-label="delete" size="large">
                 <label for="comentariya"><ForumIcon /></label>
                </IconButton>

                <Checkbox sx={save}
                            {...label}
                            icon={<BookmarkBorderIcon fontSize='large' />}
                            checkedIcon={<BookmarkIcon fontSize='large' />}
                          />
                
                </div>
             <div className={style.comentBox}>
               <div className='container-fluid'>
                 <div className='row'>
                   <div className='col-1'>
                     <div className={style.avatar}> <span className={style.avatarSpan}>J</span> </div>
                   </div>
                   <div className='col-11'>
                      <div className={style.comentContainer}>
                          <p className={style.comentName}>
                            John Uick
                          </p>
                          <p className={style.coment}>
                            MUI precedence over your custom styles. To remove the need for !important, you need to change the CSS injection order. 
                            To remove the need for !important, you need to change the CSS injection order.
                          </p>
                      </div>
                   </div>
                 </div>

                 <div className='row'>
                   <div className='col-1'>
                     <div className={style.avatar}> <span className={style.avatarSpan}>J</span> </div>
                   </div>
                   <div className='col-11'>
                      <div className={style.comentContainer}>
                          <p className={style.comentName}>
                            John Uick
                          </p>
                          <p className={style.coment}>
                            MUI precedence over your custom styles. To remove the need for !important, you need to change the CSS injection order. 
                            To remove the need for !important, you need to change the CSS injection order.
                          </p>
                      </div>
                   </div>
                 </div>

                 <div className='row'>
                   <div className='col-1'>
                     <div className={style.avatar}> <span className={style.avatarSpan}>J</span> </div>
                   </div>
                   <div className='col-11'>
                      <div className={style.comentContainer}>
                          <p className={style.comentName}>
                            John Uick
                          </p>
                          <p className={style.coment}>
                            MUI precedence over your custom styles. To remove the need for !important, you need to change the CSS injection order. 
                            To remove the need for !important, you need to change the CSS injection order.
                          </p>
                      </div>
                   </div>
                 </div>


               </div>
             </div>
             <a href='#' className={style.barchaComentariya}> barcha comentariya</a>


             <div className={style.inputBox}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{width:"100%"}}>
                <TextField multiline rows={1} fullWidth label="comentariya" id='comentariya'/>
                    <Button>
                        <SendIcon />
                    </Button>
                </ButtonGroup>
             </div>
                
            <div className={style.prosta}></div>
            </div>
              
            
          </div>
        </div>
    </div>
  </div>
</div>





    </div>;
  }
}

import React, { Component } from 'react';
import 'antd/dist/antd.css';
import Group1 from './Group1';
import { Layout, Menu,  } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import User from './User';
import Admin from './Teach/Admin'
import Instructor from './Teach/Instructor'
import Student from './Teach/Student'
import Addstudent from './Addstudent';
import Call from './Tahrir/Call';
import Course from './Course';
import Timeslot from './Timeslot';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Menu1 extends Component {
  state = {
    collapsed: false,
    oyna:6
  };

  tahrir=()=>{
    this.setState({oyna:1})
  }
user=()=>{
  this.setState({oyna:2})
}
student=()=>{
  this.setState({oyna:3})
}
Instruktr=()=>{
  this.setState({oyna:4})
}
admin=()=>{
  this.setState({oyna:5})
}
group=()=>{
  this.setState({oyna:6})
}
addStudent=()=>{
  this.setState({oyna:7})
}
course=()=>{
  this.setState({oyna:8})
}
time=()=>{
  this.setState({oyna:9})
}
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return <div>

<Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{height:'70px'}}/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />} onClick={this.tahrir}>
              Tahrir
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Teach">
            <Menu.Item key="2" onClick={this.user}>User</Menu.Item>
              <Menu.Item key="3" onClick={this.student}>Students</Menu.Item>
              <Menu.Item key="4" onClick={this.Instruktr}>Instructor</Menu.Item>
              <Menu.Item key="5" onClick={this.admin}>Admin</Menu.Item>

            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Groups">
            <Menu.Item key="8" onClick={this.course}>Course</Menu.Item>
              <Menu.Item key="6" onClick={this.group}>Group</Menu.Item>
              <Menu.Item key="7" onClick={this.addStudent}>Group student</Menu.Item>
              <Menu.Item key="9" onClick={this.time}>Timeslot</Menu.Item>
            </SubMenu>
            <Menu.Item key="10" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
{this.state.oyna==1?(<h1><Call/></h1>
):(
  this.state.oyna==2?(<h1><User/></h1>
):(
  this.state.oyna==3?(<h1><Student/></h1>
  ):(
    this.state.oyna==4?(<h1><Instructor/></h1>
    ):(
      this.state.oyna==5?(<h1><Admin/></h1>
      ):(
        this.state.oyna==8?(<h1><Course/></h1>
          ):(
            this.state.oyna==6?(<h1><Group1/></h1>
              ):(
                this.state.oyna==7?(<h1><Addstudent/></h1>
                  ):(
                  <h1><Timeslot/></h1>))))))))}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by Abbas</Footer>
        </Layout>
      </Layout>


    </div>;
  }
}

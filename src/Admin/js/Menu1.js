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

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class Menu1 extends Component {
  state = {
    collapsed: false,
  };

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
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Students</Menu.Item>
              <Menu.Item key="4">Instructor</Menu.Item>
              <Menu.Item key="5">Parents</Menu.Item>
              <Menu.Item key="6">Admin</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Groups">
              <Menu.Item key="7">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

              {/* asdasdfasfasdfasdfasdfas */}
              <User/>
              {/* <Group1 /> */}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by Abbas</Footer>
        </Layout>
      </Layout>


    </div>;
  }
}

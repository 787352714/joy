import React from "react";
import { Layout, Menu, Badge,Avatar } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined,BulbOutlined,SearchOutlined,QuestionCircleOutlined } from '@ant-design/icons';
import { routerAuthConfig } from "../../routerConfig/auth";


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const userName = 'pedeg'
const routerFilterList = routerAuthConfig.filter(item=>item.name);
let selectString:any = '/home';
// 处理侧边栏
const setSider = function(obj){
  if(!obj.children){
    return (<></>)
  }else{
    
  }
}
const LayoutPage = (ContentPage: typeof React.Component|any,hooks)=>(
  <Layout style={layoutStyle.viewPort}>
    <Header className="header">
      <div className="logo" />
      <div className="personalCenter" style={{float:"right",color:'#ffffff'}}>
        <SearchOutlined />
        <QuestionCircleOutlined />
        <Badge count={5}>
          <BulbOutlined />
        </Badge>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <div>{userName}</div>
      </div>
      <Menu theme="dark" mode="horizontal" onClick={
        ({key})=>{
          hooks.push(key)
          selectString = key
        }
      } defaultSelectedKeys={[selectString]}>
        {routerFilterList.map(item=>{
          return (<Menu.Item key={item.path}>{item.name}</Menu.Item>)
        })}
      </Menu>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
        {<ContentPage />}
        </Content>
      </Layout>
    </Layout>
    <Footer style={{padding: '10px 20px', textAlign: 'center',backgroundColor:'#ffffff' }}>reactTest ©2018 Created by Pedeg</Footer>
  </Layout>
)

const layoutStyle = {
  viewPort:{
    width:'100%',
    height:'100%'
  }
}
export default LayoutPage
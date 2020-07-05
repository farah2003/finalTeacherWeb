import React, { Component } from 'react';

import { NavLink} from "react-router-dom";
import { Menu,Layout,Dropdown } from 'antd';

import darkTheme from '@ant-design/dark-theme'


const { Header } = Layout;
const menu = (
  <Menu  theme={"dark"} style={{ lineHeight: '115px'}}>
    <Menu.Item>
    <NavLink to="/sign"  style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> sign as student  </NavLink>
     
    </Menu.Item>
    <Menu.Item>
    <NavLink to="/sign"  style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> sign as teacher </NavLink>

    </Menu.Item>
  
  </Menu>
);
const menulog = (
  <Menu  theme={"dark"} style={{ lineHeight: '115px'}}>
    <Menu.Item>
    <NavLink to="/login"  style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> log in as student  </NavLink>
     
    </Menu.Item>
    <Menu.Item>
    <NavLink to="/login"  style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> log in as teacher </NavLink>

    </Menu.Item>
  
  </Menu>
);



class Nav extends Component{


  
  render(){
    return(
  
      <div>
      <Layout className="layout">
        <Header style={{ background: darkTheme , width:'100%',height:115}}>
          <div style={{float:'left',marginTop:20}}>
            <label className="Label" style={{marginLeft:120 ,marginTop:40,color:'white',fontFamily: 'Satisfy',fontSize:50}}>Tutors PS</label>
          </div>
          <div style={{float:'right'}}>
          <Menu
            theme={"dark"}
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '115px'}}
          >
        
            <Menu.Item key="1"  style={{width:170}}><NavLink to="/" style={{fontSize:'25',textAlign:'center',fontWeight:'bold'}}>Home</NavLink></Menu.Item>
    
            <Menu.Item key="2"  style={{width:170}}><NavLink to="/contact"  style={{fontWeight:'bold',fontSize:'30',textAlign:'center'}}>contact us</NavLink></Menu.Item>
           
            <Menu.Item key="3"  style={{width:170}}><NavLink to="/about"  style={{fontWeight:'bold',fontSize:'25',textAlign:'center'}}>about us</NavLink></Menu.Item>
          
     {/*  <SubMenu  style={{width:170}} key="4" title="sign in">
          <Menu.Item key="5">fgh</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        
        </SubMenu>
              
        <SubMenu   style={{width:170}} key="5" title="log in">
          <Menu.Item key="5"> <NavLink to="/login"  style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> log in as student  </NavLink></Menu.Item>
          <Menu.Item key="6">  <Menu.Item key="5"> <NavLink to="/login"  style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> log in as student  </NavLink></Menu.Item></Menu.Item>
        
    </SubMenu>*/}
          
           <Menu.Item key="4"  style={{width:170}}>

            <Dropdown overlay={menu} placement="bottomCenter">
            <NavLink to="#"  style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> sign in </NavLink>
    </Dropdown>
    
            </Menu.Item>
            <Menu.Item key="5"  style={{width:170}}>

            <Dropdown overlay={ menulog } placement="bottomCenter">
            <NavLink to="#"  style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> log in </NavLink>
    </Dropdown>
    
              
    </Menu.Item>
         
          </Menu>
          </div>
        </Header>
     
        </Layout>
    
        </div>
    )
  }
}

export default Nav;
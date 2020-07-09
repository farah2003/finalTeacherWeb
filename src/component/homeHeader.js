import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { Menu, Layout, Dropdown } from "antd";

import darkTheme from "@ant-design/dark-theme";
import './Home.css'
const { Header } = Layout;
const menu = (
  <Menu className="customclass" style={{ lineHeight: "115px" }}>
    <Menu.Item>
      <NavLink
        to="/signteacher"
        style={{ fontWeight: "bold", fontSize: "35", textAlign: "center" }}
      >
     
        Sign up as teacher
      </NavLink>
    </Menu.Item >
    <Menu.Item   >
      <NavLink
        to="/sign"
        style={{ fontWeight: "bold", fontSize: "35", textAlign: "center" }}
      >
        {" "}
        Sign up as student{" "}
      </NavLink>
    </Menu.Item>
  </Menu>
);
const menulog = (
  <Menu theme={"dark"} style={{ lineHeight: "115px" }}>
    <Menu.Item>
      <NavLink
        to="/login"
        style={{ fontWeight: "bold", fontSize: "35", textAlign: "center" }}
      >
        {" "}
        Log in as teacher{" "}
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink
        to="/loginstudent"
        style={{ fontWeight: "bold", fontSize: "35", textAlign: "center" }}
      >
        {" "}
        Log in as student{" "}
      </NavLink>
    </Menu.Item>
  </Menu>
);

class Nav extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header style={{ background: 'white', width: "100%", height: 90 }}>
            <div style={{ float: "left" ,marginLeft:30}}>
            
              <img
                src={require("../component/logo.png")}
                style={{ width: 150, height: 130,marginBottom:20}}
                alt="img1"
              />
        
                
            </div>
            <div style={{ float: "right" ,marginRight:100}}>
              <Menu
              className="customclass"
             
                mode="horizontal"
        
                style={{ lineHeight: "90px" }}
              >
                <Menu.Item key="1" style={{ width: 130 }}>
                  <NavLink
                    to="/"
                    style={{
                      fontSize: "25",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    Home
                  </NavLink>
                </Menu.Item>

         

                <Menu.Item key="3" style={{ width: 170 }}>
                  <NavLink
                    to="/about"
                    style={{
                      fontWeight: "bold",
                      fontSize: "25",
                      textAlign: "center",
                    }}
                  >
                    About us
                  </NavLink>
                </Menu.Item>

                {/*  <SubMenu  style={{width:170}} key="4" title="sign in">
          <Menu.Item key="5">fgh</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
        
        </SubMenu>
              
        <SubMenu   style={{width:170}} key="5" title="log in">
          <Menu.Item key="5"> <NavLink to="/login"  style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> log in as student  </NavLink></Menu.Item>
          <Menu.Item key="6">  <Menu.Item key="5"> <NavLink to="/login"  style={{fontWeight:'bold',fontSize:'35',textAlign:'center'}}> log in as student  </NavLink></Menu.Item></Menu.Item>
        
    </SubMenu>*/}

                <Menu.Item key="4" style={{ width: 170 }}>
                  <Dropdown overlay={menu} placement="bottomCenter">
                    <NavLink
                      to="#"
                      style={{
                        fontWeight: "bold",
                        fontSize: "35",
                        textAlign: "center",
                      }}
                    >
                      {" "}
                      Sign up{" "}
                    </NavLink>
                  </Dropdown>
                </Menu.Item>
                <Menu.Item key="5" style={{ width: 170 }}>
                  <Dropdown overlay={menulog} placement="bottomCenter">
                    <NavLink
                      to="#"
                      style={{
                        fontWeight: "bold",
                        fontSize: "35",
                        textAlign: "center",
                      }}
                    >
                      {" "}
                      Log in{" "}
                    </NavLink>
                  </Dropdown>
                </Menu.Item>
              </Menu>
            </div>
          </Header>
        </Layout>
      </div>
    );
  }
}

export default Nav;

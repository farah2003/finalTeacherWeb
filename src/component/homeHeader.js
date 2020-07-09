import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { Menu, Layout, Dropdown, Icon } from "antd";

import darkTheme from "@ant-design/dark-theme";
import "./Home.css";
const { Header } = Layout;
const menu = (
  <Menu theme={"dark"} style={{ lineHeight: "115px" }}>
    <Menu.Item>
      <NavLink
        to="/sign"
        style={{
          fontWeight: "bold",
          fontSize: "35",
          textAlign: "center",
          color: "white",
        }}
      >
        {" "}
        Sign up as student{" "}
      </NavLink>
    </Menu.Item>
    <Menu.Item>
      <NavLink
        to="/signteacher"
        style={{
          fontWeight: "bold",
          fontSize: "35",
          textAlign: "center",
          color: "white",
        }}
      >
        {" "}
        Sign up as teacher{" "}
      </NavLink>
    </Menu.Item>
  </Menu>
);
// const menulog = (
//   <Menu style={{ lineHeight: "115px", background: "#12B7EB" }}>
//     <Menu.Item>
//       <NavLink
//         to="/login"
//         style={{
//           fontWeight: "bold",
//           fontSize: "35",
//           textAlign: "center",
//           color: "white",
//         }}
//       >
//         {" "}
//         Log in{" "}
//       </NavLink>
//     </Menu.Item>
//     <Menu.Item>
//       <NavLink
//         to="/signupall"
//         style={{
//           fontWeight: "bold",
//           fontSize: "35",
//           textAlign: "center",
//           color: "white",
//         }}
//       >
//         {" "}
//         sign up{" "}
//       </NavLink>
//     </Menu.Item>
//     <Menu.Item>
//       <NavLink
//         to="/about"
//         style={{
//           fontWeight: "bold",
//           fontSize: "35",
//           textAlign: "center",
//           color: "white",
//         }}
//       >
//         {" "}
//         Learn more about us{" "}
//       </NavLink>
//     </Menu.Item>
//   </Menu>
// );

class Nav extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header style={{ background: "white", width: "100%", height:"115px",marginBottom:3
         }}>
            <div style={{ float: "left", marginTop: 20 }}>
              {/* <label
                className="Label"
                style={{
                  marginLeft: 120,
                  marginTop: 40,
                  color: "white",
                  fontFamily: "Satisfy",
                  fontSize: 50,
                }}
              >
                Tutors PS
              </label> */}
              <NavLink to="/">
                {" "}
                <h1
                  style={{
                    marginLeft: 120,
                    marginTop: 13,
                    color: "white",
                    fontFamily: "Satisfy",
                    fontSize: 45,
                  }}
                >
                  {" "}
                  TutorsPS{" "}
                </h1>
              </NavLink>
            </div>
            <div style={{ float: "right" }}>
              <Menu
                className="customclass"
                defaultSelectedKeys={['2']}
                mode="horizontal"
                style={{ lineHeight: "115px" }}
              >
                <Menu.Item key="1" style={{ width: 100,marginRight:50 }}>
                  <NavLink
                    to="/"
                    style={{
                      fontSize: "25",
                      textAlign: "center",
                      fontWeight: "bold",
                      color:'#1890ff'
                    
                    }}
                  >
                    Home
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
                <Menu.Item key="2" style={{ width: 100,marginRight:50 }}>
                  <NavLink
                    to="/about"
                    style={{
                      fontWeight: "bold",
                      fontSize: "35",
                      textAlign: "center",
                      color:'#1890ff'
                    }}
                  >
                    about us
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="3" style={{ width: 100,marginRight:50 }}>
                  <NavLink
                    to="/signupall"
                    style={{
                      fontWeight: "bold",
                      fontSize: "35",
                      textAlign: "center",
                      color:'#1890ff'
                    }}
                  >
                    {" "}
                    Sign up{" "}
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="4" style={{ width: 100,marginRight:50 }}>
                  <NavLink
                    to="/login"
                    style={{
                      fontWeight: "bold",
                      fontSize: "35",
                      textAlign: "center",
                      color:'#1890ff'
                    }}
                  >
                    login
                    <NavLink
                      to="#"
                      style={{
                        fontWeight: "bold",
                        fontSize: "35",
                        textAlign: "center",
                      }}
                    ></NavLink>
                  </NavLink>
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
import React, { Component } from "react";
import { Icon, Button, Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { MessageOutlined, SettingFilled } from "@ant-design/icons";
const { Header } = Layout;
export default class HomeTeacher extends Component {
  state = {};

  render() {
    return (
      <div>
        <Layout className="layout">
          <Header
            style={{
              background: "white",
              width: "100%",
              height: "80px",
              marginBottom: 3,
            }}
          >
            <div style={{ float: "left" }}>
              <NavLink to="/">
                <img
                  style={{
                    marginLeft: "50%",
                    marginTop: 0,
                    width: 130,
                    height: 80,
                    opacity: "0,5",
                    filter: "alpha(opacity=50)",
                  }}
                  src={require("./logostudent.png")}
                  alt="img"
                />
              </NavLink>
            </div>
            <div style={{ float: "right" }}>
              <Menu
                className="customclass"
                defaultSelectedKeys={["2"]}
                mode="horizontal"
                style={{ lineHeight: "80px", marginRight: 70 }}
              >
                <Menu.Item key="1" style={{ width: 80, marginRight: 50 }}>
                  <NavLink
                    to="./HomeTeacher"
                    style={{
                      fontSize: "25",
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "#3676eb",
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
        
    </SubMenu>
                <Menu.Item key="2" style={{ width: 100,marginRight:50 }}>
                  <NavLink
                    to="/about"
                    style={{
                      fontWeight: "bold",
                      fontSize: "35",
                      textAlign: "center",
                      color:'#3676eb'
                    }}
                  >
                    about us
                  </NavLink>
                  </Menu.Item>*/}
                <Menu.Item key="3" style={{ width: 80, marginRight: 50 }}>
                  <NavLink
                    to=""
                    style={{
                      fontWeight: "bold",
                      fontSize: "35",
                      textAlign: "center",
                      color: "#3676eb",
                    }}
                  >
                    Profile
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="4" style={{ width: 80, marginRight: 50 }}>
                  <NavLink
                    to="/fillin"
                    style={{
                      fontWeight: "bold",
                      fontSize: "35",
                      textAlign: "center",
                      color: "#3676eb",
                    }}
                  >
                    Fill in
                  </NavLink>
                </Menu.Item>
                <SettingFilled
                  style={{ fontSize: "25px", paddingTop: 0, marginRight: 50 }}
                />
                <MessageOutlined
                  style={{ fontSize: "25px", paddingTop: 0, marginRight: 50 }}
                />
              </Menu>
            </div>
          </Header>
        </Layout>
        {/* <div
          style={{
            height: 70,
            width: "100%",
            marginTop: 0,
            backgroundColor: "wh",
            marginBottom: 2,
            borderBottom: "1px solid #f2f2f2",
          }}
        >
          <div style={{ paddingTop: 18, float: "right", marginRight: '13%' }}>
            <Icon
              type="home"
              onClick={this.move1}
              style={{ fontSize: "30px", paddingTop: 0, marginRight: 70,color:'#3676eb' }}
            />

            <Icon
              type="message"
              onClick={this.move1}
              style={{ fontSize: "30px", paddingTop: 0, marginRight: 70,color:'#3676eb' }}
            />
            <Icon
              type="user"
              onClick={this.move1}
              style={{ fontSize: "30px", paddingTop: 0, marginRight: 70,color:'#3676eb' }}
            />
            <Icon type="setting"  style={{ fontSize: "30px", paddingTop:0 ,color:'#3676eb' }} />
          </div>
          
          <div>
          <NavLink to="/">
              <img
            style={{
              marginLeft:'10%',
              marginTop:0,
              width: 100,
              height: 70,
              opacity: "0,5",
              filter: "alpha(opacity=50)",
            }}
            src={require("./logostudent.png")}
         
            alt="img"
          />
               
              </NavLink>
          </div>
        </div>*/}
        <div>
          <img
            style={{
              backgroundColor: "red",
              width: "100%",
              height: 500,
              opacity: 0.5,
            }}
            src={require("./homestudent.jpg")}
            onClick={this.pri}
            alt="img"
          />
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "35%",
            }}
          >
            <h1
              style={{
                fontSize: "100",
                fontFamily: "satisfy",
                color: "grey",
              }}
            >
              Teachers make the world a better place{" "}
            </h1>

            {/* <Button
              type="dashed"
              htmlType="submit"
              className="login-form-button"
              onClick={this.fire}
              style={{ width: 200, height: 50 }}
            >
              {" "}
              Learn more{" "}
            </Button> */}
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#ffffff",
            height: 200,
            justifyContent: "center",
          }}
        >
          <div style={{ marginLeft: 340, paddingTop: 30 }}>
            <h1 style={{ color: "#002266" }}>
              {" "}
              make your own teacher card by pressing the button below{" "}
            </h1>
          </div>

          <div style={{ paddingTop: 20, left: "32%" }}>
            <NavLink to="/fillin">
              {" "}
              <Button
                style={{ width: 200, height: 60, left: "45%" }}
                onClick={this.move}
                type="primary"
              >
                {" "}
                <h2 style={{ fontFamily: "AdventPro-Bold	", color: "white" }}>
                  {" "}
                  Fill In{" "}
                </h2>{" "}
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

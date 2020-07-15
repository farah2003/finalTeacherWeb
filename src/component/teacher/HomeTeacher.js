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
              height: "90px",
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
                    height:90,
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
                style={{ lineHeight: "90px", marginRight: 70 }}
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

              
                <Menu.Item key="3" style={{ width: 80, marginRight: 50 }}>
                  <NavLink
                    to="./HomeTeacher"
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
              
                <Menu.Item key="4" style={{ width: 80, marginRight: 10 }}>
                  <NavLink
                    to="/fillin"
                    style={{
                      fontWeight: "bold",
                      fontSize: "35",
                      textAlign: "center",
                      color: "#3676eb",
                    }}
                  >
                    Chat
                  </NavLink>
                </Menu.Item>
              
              </Menu>
            </div>
          </Header>
        </Layout>
        
      {/*  <div>
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
            
             <Button
              type="dashed"
              htmlType="submit"
              className="login-form-button"
              onClick={this.fire}
              style={{ width: 200, height: 50 }}
            >
              {" "}
              Learn more{" "}
            </Button> 
          </div>
        </div>  */}
        <div
          style={{
            backgroundColor: "#ffffff",
            height: 200,
            justifyContent: "center",
          }}
        >
        
       
          <div style={{ marginBottom: 100, height: 500 }}>
          <div style={{ float: "left", marginRight: 200, width: 500 }}>
            <img
              style={{
                height: "100",
                width:"100",
                opacity: "0,5",
                filter: "alpha(opacity=50)",
              }}
              src={require("./home2.png")}
              alt="img"
            />
          </div>
          <div
            style={{
              float: "right",
              height: 500,
              marginRight: 140,
              marginTop: 80,
            }}
          >
            <h1 style={{ fontSize: 60 }}> fill </h1>
            <h1 style={{ fontSize: 60, paddingBottom: 2 }}> your </h1>
            <h1 style={{ fontSize: 90 }}> info </h1>
            <div style={{ paddingTop: 20, left: "32%" }}>
            <NavLink to="/fillin">
              {" "}
              <Button
                style={{ width: 200, height: 60, left: "45%" }}
                onClick={this.move}
                type="primary"
              >
           
                <h2 style={{ fontFamily: "AdventPro-Bold	", color: "white" }}>
            
                  Fill In
                </h2>
              </Button>
            </NavLink>
          </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

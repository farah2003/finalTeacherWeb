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
                    to="/teacher/TeacherProfile"
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
                    fill in
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="5" style={{ width: 80, marginRight: 50 }}>
                  <NavLink
                    to="./Chat/aChat"
                    style={{
                      fontSize: "25",
                      textAlign: "center",
                      fontWeight: "bold",
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
        <div>
          <img
            style={{
              backgroundColor: "red",
              width: "90%",
              height: 450,
              opacity: 0.5,
              marginLeft:'5%'
            }}
            src={require("./homestudent.jpg")}
            onClick={this.pri}
            alt="img"
          />
          <div style={{ position: "absolute", top: "30%", right: "20%" }}>
            <h1 style={{ fontSize: "100", fontWeight: "bold" }}>
             Teacher make the world {" "}
            </h1>
            <h1 style={{ fontSize: "100", fontWeight: "bold" ,right:'2%',marginLeft:100}}>
             better place {" "}
            </h1>
     

          
          </div>
        </div>

     
          
       
        <div style={{ backgroundColor: "#ffffff", height: 200 }}>
          <div style={{ marginLeft:500, paddingTop: 30 }}>
            <h1 style={{ color: "#002266" }}>
              {" "}
            Make your own teaher card{" "}
            </h1>
          </div>

          <div style={{ marginLeft: 550, paddingTop: 20 }}>
            <NavLink to="/fillin">
              {" "}
              <Button
                style={{ width: 200, height: 60 }}
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

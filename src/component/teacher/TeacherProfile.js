import React, { Component } from "react";
import { Button, Card, Icon,Layout,Menu , Avatar } from "antd";

import { NavLink } from "react-router-dom";
import * as firebase from "firebase";
const { Header } = Layout;
const { Meta } = Card;
class ProfileTeahcer extends Component {
  state = {
    list: [],

    check: "",
    UserName: "",
    Phone: "",
    Name: "",
    Email: "",
    userid: "",
  };

 

  render() {
    const { list } = this.state;
    return (
      <div style={{ flex: 1 }}>
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
                    to="/Chat/aChat"
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
        <div
          style={{
            width: "900",
        
            height: 200,
            marginTop: 0,
            marginBottom: 50,
          }}
        >
          <div
            style={{ width: 900, display: "flex", paddingTop: 30 }}
          >
            <div style={{ height: 400, float: "left" }}>
              <img
                src={require("./profile.png")}
                style={{
                  position: "absolute",
                  border: "1px solid #f2f2f2",
                  width: "15%",
                  height: "27%",
                 
                  marginLeft: 70,
               
                
                }}
              />
            </div>

            <div
              style={{
                float: "right",
                height: 400,
              
                marginLeft: 350,
                width: 400,
              }}
            >

                    <Button
                  style={{
                    color: "#4d4dff",
                    width: 200,
                    backgroundColor: "#3676eb",
                    height: 40,
                  
                   
                    marginLeft: 750,
                   
                  }}
                >
                  <h4 style={{ color: "white" }}>EDIT</h4>
                </Button>
              <h2>Farah Shaqoura</h2>
              <h3 style={{color:"#3676eb"}}>Student at sadia school</h3>
              <h4 style={{color:"#3676eb"}}>North Gaza</h4>
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", backgroundColor: "#f4f7f8", height: 650 }}
        >
          {/*inf*/}
          <div
            style={{
              float: "left",
              width: '100%',
              marginLeft: 100,
            
            }}
          >
            <div style={{marginTop:30}}>

              {" "}
              <h3 style={{ marginLeft: 60, marginBottom:3}}>
                {" "}
                Profile details:
              </h3>
              <div style={{borderBottom: "2px solid #3676eb",width:180,marginLeft:20}}></div>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ float: "right", marginRight: 20 }}>
                <Icon
                  type="user"
                  style={{ fontSize: "25px", color: "#4d4dff", padding: 20 }}
                />
              </div>
              <div style={{ float: "left" }}>
                <h3>{this.state.Name}</h3>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ float: "right", marginRight: 20 }}>
                <Icon
                  type="mail"
                  style={{ color: "#4d4dff", fontSize: "25px", padding: 20 }}
                />
              </div>
              <div style={{ float: "left" }}>
                <h3> {this.state.Email}</h3>
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div style={{ float: "right", marginRight: 20 }}>
                <Icon
                  type="phone"
                  style={{ color: "#4d4dff", fontSize: "25px", padding: 20 }}
                />
              </div>
              <div style={{ float: "left" }}>
                <h3>{this.state.Phone}</h3>
              
              </div>
            </div>
          </div>

          {/*card*/}
          <div style={{borderLeft:"3px solid white"}} >
            <h2 style={{ marginLeft: 50, marginBottom: 30, marginTop: 30,width:900 }}>
              {" "}
              Selected teachers:
            </h2>
            <Card
                  bordered={false}
                    style={{ width: "65%", margin: "0 auto" ,boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}
                   
                  >
                    <Meta
                      avatar={
                        <Avatar
                          style={{ width: 140, height: 140 }}
                          src={require("./profile.png")}
                        />
                      }
                      title={<h4 style={{ marginTop: 20 }}> </h4>}
                      description={
                        <div>
                        <div style={{ textAlign: "right", display: "flex" }}>
                          <div style={{ float: "right" }}>
                            <h6 style={{ fontSize: 14 }}>
                              {" "}
                              <label style={{ fontSize: 14, marginRight: 10 }}>
                                {" "}
                                subject:{" "}
                              </label>
                            
                            </h6>
                            <h6 style={{ fontSize: 14 }}>
                              {" "}
                              <label style={{ fontSize: 14, marginRight: 10 }}>
                                {" "}
                                Grade:{" "}
                              </label>
                             
                            </h6>
                            <h6 style={{ fontSize: 14 }}>
                            Phone{" "}
                           
                              <label style={{ fontSize: 14, marginRight: 5 }}>
                              
                                </label> </h6>
                          </div>
                          <div style={{ float: "left", marginLeft: "40%" }}>
                            <h6 style={{ fontSize: 14, marginRight: 10  }}>
                            City:
                              <label style={{ fontSize: 14 }}>
                                {" "}
                            
                              </label>
                             
                            </h6>
                            <h6 style={{ fontSize: 14,marginRight: 10  }}>
                            Price:
                              <label style={{ fontSize: 14}}>
                                {" "}

                              </label>
                           
                            </h6>
                            <h6 style={{ fontSize: 14 , marginRight: 10 }}>
                            Age:
                              <label style={{ fontSize: 14 }}>
                                {" "}
                             
                              </label>
                              
                            </h6>
                            <h6 style={{ fontSize: 14 }}>
                              {" "}
                              <label style={{ fontSize: 14, marginRight: 10 }}>
                                {" "}
                                Rate:
                              </label>
                             
                            </h6>
                          {/*  <button onClick={() => this.unsave(item.id)}>
                              delete from booked
                            </button>
                      */}

                           

                          
                          </div>
                        </div>
                        <div >
                        <Button  disabled={this.state.disabled}   type="primary" style={{width:160,height:40,marginLeft:'50%'}}>Delete from booked</Button>

                        </div>
                        </div>
                      }
                    />
                  </Card>
       
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileTeahcer;

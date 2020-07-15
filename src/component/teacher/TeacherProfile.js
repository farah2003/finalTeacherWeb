import React, { Component } from "react";
import { Button, Card, Icon,Layout,Menu  } from "antd";

import { NavLink } from "react-router-dom";
import * as firebase from "firebase";
const { Header } = Layout;
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

  async componentWillMount() {
    const user = firebase.auth().currentUser;
    let userid = user.uid;
    await this.setState({
      userid,
    });
    console.log(userid);

    this.getUseInfo();
  }

  getUseInfo = async () => {
    const db = firebase.firestore();

    let user = await firebase.auth().currentUser;
    // const  id= await user.uid
    db.collection("Users")
      .doc(user.uid)
      .get()
      .then((userdoc) => {
        console.log(userdoc.data());

        var Phone = userdoc.data().phone;
        var Name = userdoc.data().Name;
        var Email = userdoc.data().Email;
        var card = userdoc.data().savecard;
        console.log("card", card);
        this.setState({
          list: card,
          Phone: Phone,
          Name: Name,
          Email: Email,
        });
      });
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
            backgroundColor: "#e6e6fa",
            height: 200,
            marginTop: 0,
            marginBottom: 130,
          }}
        >
          <div
            style={{ width: 500, height: 200, display: "flex", paddingTop: 50 }}
          >
            <div style={{ height: 300, float: "left" }}>
              <img
                src={require("./profile.png")}
                style={{
                  position: "absolute",
                  border: "6px solid #f2f2f2",
                  width: "10%",
                  height: "20%",
                  borderRadius: "50%",
                  marginLeft: 70,
                  marginTop: 60,
                  marginBottom: 50,
                }}
              />
            </div>

            <div
              style={{
                float: "right",
                height: 400,
                marginTop: 150,
                marginLeft: 30,
                width: 400,
              }}
            >
              <h2>{this.state.UserName}</h2>
            </div>
          </div>
        </div>

        <div
          style={{ display: "flex", backgroundColor: "#e6e6fa", height: 650 }}
        >
          {/*inf*/}
          <div
            style={{
              float: "left",
              width: 300,
              marginLeft: 100,
              marginTop: 50,
            }}
          >
            <div>
              {" "}
              <h3 style={{ marginLeft: 20, marginBottom: 30, marginTop: 30 }}>
                {" "}
                Profile details:
              </h3>
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
                {/* <Button
                  style={{
                    color: "#4d4dff",
                    width: 200,
                    backgroundColor: "#03a9f4",
                    height: 40,
                    width: 200,
                    borderRadius: 30,
                    marginRight: 100,
                    marginBottom: 20,
                  }}
                >
                  <h4 style={{ color: "white" }}>EDIT</h4>
                </Button> */}
              </div>
            </div>
          </div>

          {/*card*/}
          <div style={{ alignItems: "center" }}>
            <h2 style={{ marginLeft: 50, marginBottom: 30, marginTop: 30 }}>
              {" "}
              Selected teachers:
            </h2>
            {list.map((item, index) => {
              return (
                <div>
                  <Card
                    title={
                      <h4
                        style={{
                          height: 10,
                          marginTop: 3,
                          fontWeight: "bold",
                          marginRight: 30,
                        }}
                      >
                        {item.Name}
                      </h4>
                    }
                    style={{
                      width: 700,
                      height: 200,
                      marginLeft: 90,
                      marginBottom: 40,
                      marginTop: 10,
                    }}
                  >
                    <div
                      style={{
                        textAlign: "right",
                        display: "flex",
                        height: 200,
                      }}
                    >
                      <div
                        style={{ float: "left", height: 200, marginLeft: 50 }}
                      >
                        <h3 style={{ fontSize: 18 }}>
                          {" "}
                          <label style={{ fontSize: 18, marginRight: 7 }}>
                            {" "}
                            Name
                          </label>
                          {item.Name}
                        </h3>
                        <h3 style={{ fontSize: 18 }}>
                          {" "}
                          <label style={{ fontSize: 18, marginRight: 7 }}>
                            {" "}
                            Phone Number
                          </label>
                          {item.Phone}
                        </h3>

                        <h3 style={{ fontSize: 18 }}>
                          {" "}
                          <label style={{ fontSize: 18, marginRight: 7 }}>
                            {" "}
                            Email
                          </label>
                          {item.Email}{" "}
                        </h3>
                      </div>
                      <div
                        style={{ float: "right", height: 200, marginLeft: 180 }}
                      >
                        <h3 style={{ fontSize: 18 }}>
                          {" "}
                          <label style={{ fontSize: 18, marginRight: 7 }}>
                            Age
                          </label>
                          :{item.Age}
                        </h3>
                        <h6 style={{ fontSize: 14 }}>
                          {" "}
                          <label style={{ fontSize: 14, marginRight: 10 }}>
                            {" "}
                            Price:
                          </label>
                          {item.Price}{" "}
                        </h6>
                        <h3 style={{ fontSize: 18 }}>
                          {" "}
                          <label style={{ fontSize: 18, marginRight: 7 }}>
                            {" "}
                            sub
                          </label>
                          :{item.sub}{" "}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileTeahcer;

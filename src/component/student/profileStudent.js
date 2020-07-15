import React, { Component } from "react";
import { Button, Card, Icon } from "antd";
import "./studentHome";
import { NavLink } from "react-router-dom";
import * as firebase from "firebase";

class ProfileStudent extends Component {
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
  move1 = () => {
    console.log("hello");
    this.props.history.push("./studentHome");
  };
  render() {
    const { list } = this.state;
    return (
      <div style={{ flex: 1 }}>
        {/*header*/}
        <div
          style={{
            height: 60,
            width: "100%",
            marginTop: 0,
            marginBottom: 2,
            borderBottom: "1px solid #f2f2f2",
          }}
        >
          <div style={{ paddingTop: 18, float: "right", marginRight: 70 }}>
            <NavLink to="../student/studentHome">
              {" "}
              <Icon
                type="home"
                style={{ fontSize: "28px", paddingTop: 0, marginRight: 36 }}
              />
            </NavLink>

            {/* <Icon
            type="message"
            style={{ fontSize: "28px", paddingTop: 0, marginRight: 36 }}
          /> */}
            <NavLink to="../student/profileStudent">
              {" "}
              <Icon
                type="user"
                style={{ fontSize: "28px", paddingTop: 0, marginRight: 36 }}
              />
            </NavLink>

            {/*, color: '#1890ff' */}
            <Icon type="setting" style={{ fontSize: "27px" }} />
          </div>
          <div style={{ float: "left" }}>
            <NavLink to="/">
              <img
                style={{
                  marginLeft: 100,
                  marginTop: 0,
                  width: 80,
                  height: 60,
                  opacity: "0,5",
                  filter: "alpha(opacity=50)",
                }}
                src={require("./logo.png")}
                alt="img"
              />
            </NavLink>
          </div>
        </div>
        {/*profil*/}
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

export default ProfileStudent;

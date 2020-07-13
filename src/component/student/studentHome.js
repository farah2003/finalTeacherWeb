import React, { Component } from "react";
import { Menu, Icon, Typography, Button, Card } from "antd";
import { Select, Avatar, Modal } from "antd";
import * as firebase from "firebase";
import "./profileStudent";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";
import darkTheme from "@ant-design/dark-theme";

const { Text } = Typography;
const { Option } = Select;
const { Meta } = Card;
class SHome extends Component {
  state = {
    sub: "",
    grade: "",
    location: "",
    list: [],
    ListPost: [],
    rating: "",
    visible: false,
    id: "",
  };

  getlist = () => {
    const db = firebase.firestore();
    let user = firebase.auth().currentUser;
    console.log("useeer", user);
    db.collection("Users")
      .doc(user.uid)
      .get()
      .then((userdoc) => {
        let listfromData = userdoc.data().savecard;

        this.setState({
          ListPost: listfromData,
          id: user.uid,
        });

        console.log("list from dta", listfromData);
        console.log("this.listpost", this.state.ListPost);
      });
  };

  componentWillMount() {
    let newList = [];
    /*const db = firebase.firestore();

    const observer =db.collection('Cards').onSnapshot(querySnapshot => {
      querySnapshot.docs.map(doc =>{
    
        let x= doc.data()
    console.log('item',x)
        x.id=doc.id
        newList.push(x)    
           } );
    
  
    this.setState({
            list:newList
      })
  }, err => {
    console.log(`Encountered error: ${err}`);
  })
  return ()=>  observer();*/

    const db = firebase.firestore();

    db.collection("Cards")
      .get()
      .then((userSnapshot) => {
        userSnapshot.docs.map((doc) => {
          let x = doc.data();
          console.log("item", x);
          x.id = doc.id;
          newList.push(x);
        });
        console.log("list", newList);
        this.setState({
          list: newList,
        });
      });
    this.getlist();
  }

  saveCard = (i) => {
    const { ListPost } = this.state;
    console.log("iiiiii", i);
    ListPost.push(i);

    const db = firebase.firestore();
    let user = firebase.auth().currentUser;

    console.log("useerrrrr", user.uid);
    let washingtonRef = db.collection("Users").doc(user.uid);

    console.log("washingtonRef", washingtonRef);

    this.setState({
      ListPost,
    });

    console.log("LLLLLL", this.state.ListPost);
    return washingtonRef.update({
      savecard: this.state.ListPost,
    });
  };
  unsave = (id) => {
    console.log("iddddddddddd", id);
    const db = firebase.firestore();
    let user = firebase.auth().currentUser;
    let { ListPost } = this.state;
    let x = ListPost.filter((i) => i.id !== id);
    console.log("newlist", x);
    this.setState({
      ListPost: x,
    });
    let washingtonRef = db.collection("Users").doc(user.uid);

    console.log("washingtonRef", washingtonRef);

    return washingtonRef.update({
      savecard: x,
    });
  };
  onChange1 = (value) => {
    console.log(`selected ${value}`);

    this.setState({
      location: value,
    });
  };

  onSearch1 = (val) => {
    console.log("search:", val);
    console.log("search:", val);
  };
  onChange2 = (value) => {
    console.log(`selected ${value}`);
    this.setState({
      grade: value,
    });
  };

  onSearch2 = (val) => {
    console.log("search:", val);
  };
  onChange3 = (value) => {
    console.log(`selected ${value}`);
    this.setState({
      sub: value,
    });
  };

  onSearch3 = (val) => {
    console.log("search:", val);
  };
  filter = () => {
    console.log("filter");
    const { sub } = this.state;
    const { grade } = this.state;
    const { location } = this.state;
    console.log(sub, grade, location, "you can filtrr");
    const db = firebase.firestore();

    let newList = [];
    db.collection("Cards")
      .where("sub", "==", sub)
      .where("city", "==", location)
      .where("grade", "==", grade)
      .get()
      .then((userSnapshot) => {
        userSnapshot.docs.map((doc) => {
          console.log("map", doc);
          let x = doc.data();
          console.log("fliter list", x);
          x.id = doc.id;
          newList.push(x);
        });

        this.setState({
          list: newList,
        });
      });
  };
  rate = () => {
    console.log("rate me");
    this.props.history.push("./rating");
  };
  goToProfile = () => {
    console.log("goooo");
    this.props.history.push("./profileStudent");
  };
  move1 = () => {
    let user = firebase.auth().currentUser;
    console.log(user);
    this.props.history.push("/Chat/chat");
  };

  ratingvalue = (value) => {
    this.setState({
      rating: value,
    });
  };
  onOK = (id) => {
    const { rating } = this.state;
    console.log("rating", rating);
    console.log("value in ok", id);

    const db = firebase.firestore();
    this.setState({
      visible: false,
    });

    let washingtonRef = db.collection("Cards").doc(id);

    console.log("washingtonRef", washingtonRef);
    return washingtonRef.update({
      rating,
    });
  };
  changevisible = (id) => {
    console.log("idddddddddddd", id);
    this.setState({
      visible: true,
      id,
    });
  };

  render() {
    const { list, id } = this.state;
    console.log("list", list);
    return (
      <div>
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
            <NavLink to="./studentHome">
              {" "}
              <Icon
                type="home"
                style={{ fontSize: "28px", paddingTop: 0, marginRight: 36 }}
              />
            </NavLink>
            <NavLink to="../Chat/chat">
              {" "}
              <Icon
                type="message"
                style={{ fontSize: "28px", paddingTop: 0, marginRight: 36 }}
              />
            </NavLink>

            <NavLink to="./profileStudent">
              {" "}
              <Icon
                type="user"
                style={{ fontSize: "28px", paddingTop: 0, marginRight: 36 }}
              />
            </NavLink>
            {/*, color: '#1890ff' */}

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
                src={require("./LOGO.png")}
                alt="img"
              />
            </NavLink>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "",
          }}
        >
          <img
            style={{
              backgroundColor: "red",
              width: "70%",
              height: 450,
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            src={require("./homestudent.jpg")}
            onClick={this.pri}
            alt="img"
          />
          {/* <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>
              if one is searching for success, we shall help them find it
            </Text>
          </View> */}
        </div>
        <div>
          {
            /////////////filter here
          }
        </div>
        <div style={{ borderTop: "1px solid #f2f2f2" }}></div>

        <div>
          <Menu
            mode="horizontal"
            id="navbar"
            style={{
              lineHeight: "80px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text>filter by</Text>

            <Select
              size="large"
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={this.onChange1}
              onSearch={this.onSearch1}
            >
              <Option value="Gaza">Gaza</Option>
              <Option value="Rafah">Rafah</Option>
              <Option value="NorthGaza">NorthGaza</Option>
            </Select>
            <Select
              size="large"
              showSearch
              style={{ width: 200 }}
              placeholder="Select a grade"
              optionFilterProp="children"
              onChange={this.onChange2}
              onSearch={this.onSearch2}
            >
              <Option value="tenth">tenth</Option>
              <Option value="eleventh">eleventh</Option>
              <Option value="twelfth">twelfth</Option>
            </Select>
            <Select
              size="large"
              showSearch
              style={{ width: 200 }}
              placeholder="Select subject"
              optionFilterProp="children"
              onChange={this.onChange3}
              onSearch={this.onSearch3}
            >
              <Option value="Math">Math</Option>
              <Option value="Physics">physics</Option>
              <Option value="Biology">piology</Option>
              <Option value="Chemistry">chemistry</Option>
            </Select>
            <Button onClick={this.filter} style={{ width: 150, height: 45 }}>
              Apply
            </Button>
          </Menu>
        </div>

        <div style={{ backgroundColor: "#f4f7f8" }}>
          {list.map((item, index) => {
            return (
              <div style={{ paddingTop: 100 }}>
                <div style={{ backgroundColor: "#f4f7f8" }}>
                  <Card
                    style={{ width: "63%", margin: "0 auto" }}
                    actions={[
                      <Icon
                        type="message"
                        // onClick={()=>this.gotoChat(item)}
                        style={{
                          fontSize: "28px",
                          paddingTop: 0,
                          marginRight: 36,
                        }}
                      />,
                    ]}
                  >
                    <Meta
                      avatar={
                        <Avatar
                          style={{ width: 140, height: 140 }}
                          src={require("./profile.png")}
                        />
                      }
                      title={<h4 style={{ marginTop: 20 }}>{item.Name} </h4>}
                      description={
                        <div style={{ textAlign: "right", display: "flex" }}>
                          <div style={{ float: "right" }}>
                            <h6 style={{ fontSize: 14 }}>
                              {" "}
                              <label style={{ fontSize: 14, marginRight: 10 }}>
                                {" "}
                                subject:{" "}
                              </label>
                              {item.sub}{" "}
                            </h6>
                            <h6 style={{ fontSize: 14 }}>
                              {" "}
                              <label style={{ fontSize: 14, marginRight: 10 }}>
                                {" "}
                                Grade:{" "}
                              </label>
                              {item.grade}{" "}
                            </h6>
                            <h6 style={{ fontSize: 14 }}>
                              {" "}
                              <label style={{ fontSize: 14, marginRight: 10 }}>
                                {" "}
                                Phone{" "}
                              </label>
                              {item.Phone}{" "}
                            </h6>
                          </div>
                          <div style={{ float: "left", marginLeft: "30%" }}>
                            <h6 style={{ fontSize: 14 }}>
                              {" "}
                              <label style={{ fontSize: 14, marginRight: 10 }}>
                                {" "}
                                City:
                              </label>
                              {item.city}{" "}
                            </h6>
                            <h6 style={{ fontSize: 14 }}>
                              {" "}
                              <label style={{ fontSize: 14, marginRight: 10 }}>
                                {" "}
                                Price:
                              </label>
                              {item.Price}{" "}
                            </h6>
                            <h6 style={{ fontSize: 14 }}>
                              {" "}
                              <label style={{ fontSize: 14, marginRight: 10 }}>
                                {" "}
                                Age:
                              </label>
                              {item.Age}
                            </h6>
                            <h6 style={{ fontSize: 14 }}>
                              {" "}
                              <label style={{ fontSize: 14, marginRight: 10 }}>
                                {" "}
                                Rate:
                              </label>
                              {item.rating}
                            </h6>
                            <button onClick={() => this.unsave(item.id)}>
                              delete from booked
                            </button>
                            <button onClick={() => this.saveCard(item)}>
                              book
                            </button>

                            <label>
                              {" "}
                              rate{" "}
                              <Rate
                                allowHalf
                                defaultValue={0}
                                onChange={() => this.changevisible(item.id)}
                                readOnly
                              />{" "}
                            </label>

                            <Modal
                              title="Rating"
                              visible={this.state.visible}
                              onOk={() => this.onOK(id)}
                              onCancel={() => {
                                this.setState({
                                  visible: false,
                                });
                              }}
                            >
                              <Rate
                                allowHalf
                                defaultValue={0}
                                onChange={this.ratingvalue}
                              />
                            </Modal>
                          </div>
                        </div>
                      }
                    />
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SHome;

import React, { Component } from "react";
import { Input, Button, Card ,Layout, Menu} from "antd";
import { Icon } from "antd";
import { Radio } from "antd";
import { Rate } from "antd";
import { NavLink } from "react-router-dom";

import * as firebase from "firebase";
const { Header } = Layout;
class Fillin extends Component {
  state = {
    name: "",
    phone: "",
    age: "",
    email: "",
    Price: "",
    grade: "",
    sub: "",
    city: "",
  };

  addName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  addPhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  addAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };

  addEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  addNotes = (e) => {
    this.setState({
      notes: e.target.value,
    });
  };

  addDisease = (e) => {
    this.setState({
      disease: e.target.value,
    });
  };

  addPrice = (e) => {
    this.setState({
      Price: e.target.value,
    });
  };

  onChangeGrade = (e) => {
    this.setState({
      grade: e.target.value,
    });
  };

  onChangeSub = (e) => {
    console.log(e);
    this.setState({
      sub: e.target.value,
    });
  };
  onChangeCity = (e) => {
    console.log(e);
    this.setState({
      city: e.target.value,
    });
  };
  send =  async () => {


    let user = await firebase.auth().currentUser;
    const id = user.uid
    let name = this.state.name;
    let phone = this.state.phone;
    let age = this.state.age;
    let email = this.state.email;
    let Price = this.state.Price;
    let grade = this.state.grade;
    let sub = this.state.sub;
    let city = this.state.city;

    const db = firebase.firestore();

    db.collection("Cards").doc(user.uid).set({
    
        Name: name,
        Phone: phone,
        Age: age,
        Email: email,
        Price: Price,
        grade: grade,
        sub: sub,
        city: city,
        
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        /* this.setState({
          name:"",
          phone:"",
          age:"",
          email:"",
          Price:"",
          grade:"",
          sub:"",
          city:""
        })*/
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px",
    };
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
        <div style={{ backgroundColor: "red", width: "100%", height: "100%" }}>
        <div  style={{float: 'left' ,width:'40%',height:675,marginTop:0,backgroundColor:"#1761e8"}} >
          <div>
          
            <div style={{marginTop:100,marginLeft:60}}>
            <h1   style={{color:' white',marginLeft:50}}>fill in you information </h1>
              <div style={{marginLeft:0}}>
          
              <h1 style={{marginLeft:30,color:' white',marginTop:60}}>To :
             </h1>
              <h2 style={{marginLeft:80,color:' white'}}> finding your student</h2>
              <h2 style={{marginLeft:50,color:' white'}}> conect with your student esialy</h2>

              </div>
              </div>
            </div>
 
            
           </div>
          <div style={{ float: "right", width: "60%" }}>
            {" "}
            <Card
              className="card"
              style={{
                textAlign: "left",
              }}
            >
              <div style={{ marginLeft: 90 }}>
               

                <div style={{ marginRight: 60 }}>
                  <h3 className="h3" style={{marginBottom:20}}> Teacher name:
                  <Input onChange={this.addName} style={{ marginLeft:20,width: 400 }} /></h3>
                  <h3 className="h3" style={{marginBottom:20}} > Age:
                  <Input onChange={this.addAge} style={{ marginLeft:95, width: 400 }} /> </h3>
                  <h3 className="h3" style={{marginBottom:20}} > Phone number:
                  <Input onChange={this.addPhone} style={{ marginLeft:15, width: 400 }} /></h3>

                  <h3 className="h3" style={{marginBottom:20}} > Email address:
                  <Input onChange={this.addEmail} style={{marginLeft:20, width: 400 }} /> </h3>

                  <h3 className="h3" style={{marginBottom:20}}> Price:
                  <Input onChange={this.addPrice} style={{marginLeft:84, width: 400 }} /> </h3>

                  <div>
                    <h3 className="h3" >Grade</h3>
                    <Radio.Group
                      onChange={this.onChangeGrade}
                      value={this.state.grade}
                      size="large"
                      style={{marginBottom:20}}
                    >
                      <Radio value={"tenth"} style={radioStyle}>
                        {" "}
                        tenth
                      </Radio>
                      <Radio value={"eleventh"} style={radioStyle}>
                        eleventh
                      </Radio>
                      <Radio value={"twelfth"} style={radioStyle}>
                        twelfth
                      </Radio>
                    </Radio.Group>
                  </div>
                  <div style={{ marginBottom: 190 }}>
                    <div style={{ float: "right", width: "40%" }}>
                      <h3 className="h3">city</h3>
                      <Radio.Group
                        onChange={this.onChangeCity}
                        value={this.state.city}
                        size="large"
                      >
                        <Radio value={"Gaza"} style={radioStyle}>
                          {" "}
                          Gaza
                        </Radio>
                        <Radio value={"westGaza"} style={radioStyle}>
                          westGaza
                        </Radio>
                        <Radio value={"Rafah"} style={radioStyle}>
                          Rafah
                        
                          </Radio>
                        <Radio value={"Khan Younes"} style={radioStyle}>
                          North Gaza
                        </Radio>
                      </Radio.Group>
                    </div>
                    <div style={{ float: "left", width: "40%" }}>
                      <h3 className="h3">The subject you teach </h3>

                      <div style={{ alignItems: "flex_start" }}>
                        <Radio.Group
                          onChange={this.onChangeSub}
                          value={this.state.sub}
                          size="large"
                        >
                          <Radio value={"Biology"} style={radioStyle}>
                            {" "}
                            Biology
                          </Radio>
                          <Radio value={"Mathematics"} style={radioStyle}>
                            Mathematics
                          </Radio>
                          <Radio value={"Chemistry"} style={radioStyle}>
                            Chemistry
                          </Radio>
                          <Radio value={"Arabic"} style={radioStyle}>
                            Arabic
                          </Radio>
                          <Radio value={"Physics"} style={radioStyle}>
                            Physics
                          </Radio>
                        </Radio.Group>
                      </div>
                     
                    </div>
                  </div>

                  <div style={{ display: "flex" }}>
                    <Button
                      
                      style={{ width: 230,height:40, marginLeft: "70%",backgroundColor:'#1761e8' }}
                      onClick={this.send}
                    >
                      <h2
                        style={{  color: "white", paddingTop:5}}
                      >
                        send
                      </h2>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Fillin;

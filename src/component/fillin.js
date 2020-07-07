import React, { Component } from "react";
import { Input, Checkbox, Button, Card } from "antd";
import { Icon } from "antd";

import darkTheme from "@ant-design/dark-theme";

import * as firebase from "firebase";
import { Layout } from "antd";
const { Header } = Layout;
const { TextArea } = Input;

class Fillin extends Component {
  state = {
    name: "",
    phone: "",
    age: "",
    email: "",
    notes: "",
    disease: "",
    defaultChecked: "",
    idA: "",
    idB: "",
    idC: "",
    idD: "",
    idE: "",
    idF: "",
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
  checkA = (e) => {
    this.setState({
      idA: "",
    });
    console.log(e.target.checked);
    if (e.target.checked === true) {
      console.log("A");
      this.setState({
        idA: e.target.checked,
      });
    } else {
      this.setState({
        idA: "",
      });
    }
  };
  checkB = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      this.setState({
        idB: e.target.checked,
      });
    } else {
      this.setState({
        idB: "",
      });
    }
  };

  checkC = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      this.setState({
        idC: e.target.checked,
      });
    } else {
      this.setState({
        idC: "",
      });
    }
  };

  checkD = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      this.setState({
        idD: e.target.checked,
      });
    } else {
      this.setState({
        idD: "",
      });
    }
  };

  checkF = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      this.setState({
        idF: e.target.checked,
      });
    } else {
      this.setState({
        idF: "",
      });
    }
  };
  checkE = (e) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      this.setState({
        idF: e.target.checked,
      });
      this.setState({
        idF: "",
      });
    }
  };

  send = () => {
    console.log("bbb", this.state.idB);
    var name = this.state.name;
    var phone = this.state.phone;
    var age = this.state.age;
    var email = this.state.email;
    var notes = this.state.notes;
    var disease = this.state.disease;
    var idA = this.state.idA;
    var idB = this.state.idB;
    var idC = this.state.idC;
    var idD = this.state.idD;
    var idF = this.state.idF;
    var idE = this.state.idE;

    const db = firebase.firestore();

    db.collection("patients")
      .add({
        Name: name,
        Phone: phone,
        Age: age,
        Email: email,
        Notes: notes,
        Disease: disease,
        calssA: idA,
        classB: idB,
        classC: idC,
        classD: idD,
        classE: idE,
        classF: idF,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    return (
      <div>
        <div
          style={{
            height: 60,
            width: "100%",
            marginTop: 0,
            backgroundColor: "wh",
            marginBottom: 2,
            borderBottom: "1px solid #f2f2f2",
          }}
        >
          <div style={{ paddingTop: 18, float: "right", marginRight: 70 }}>
            <Icon
              type="home"
              onClick={this.move1}
              style={{ fontSize: "28px", paddingTop: 0, marginRight: 36 }}
            />

            <Icon
              type="message"
              onClick={this.move1}
              style={{ fontSize: "28px", paddingTop: 0, marginRight: 36 }}
            />
            <Icon
              type="user"
              onClick={this.move1}
              style={{ fontSize: "28px", paddingTop: 0, marginRight: 36 }}
            />
            {/*, color: '#1890ff' */}
            <Icon type="setting" style={{ fontSize: "27px" }} />
          </div>
          <div>
            <label
              className="Label"
              style={{
                marginLeft: 120,
                paddingTop: 60,
                fontFamily: "Satisfy",
                fontSize: 30,
              }}
            >
              Tutors PS
            </label>
          </div>
        </div>
        {/* <div style={{paddingBottom:20}}>
      <Layout className="layout">
        <Header style={{ backgroundColor: darkTheme , width:'100%',height:60}}  > 
          
         <h1 style={{color:'white'}}>Fill in</h1>
        </Header>
     
        </Layout>
    </div >*/}
        <div style={{ backgroundColor: "#e6e6fa" }}>
          <div
            style={{ marginBottom: 40, backgroundColor: "#e6e6fa", height: 70 }}
          ></div>

          <div style={{ width: 200, backgroundColor: "#e6e6fa" }}>
            <Card
              className="card"
              style={{
                textAlign: "left",
                width: 800,
                height: 900,
                marginLeft: "80%",
                marginBottom: 10,
                borderRadius: 5,
              }}
            >
              <div style={{ marginLeft: 70 }}>
                <h1 style={{ marginBottom: 50 }}>Please fill in</h1>

                <div style={{ marginRight: 60 }}>
                  <h3 className="h3"> Teacher name </h3>
                  <Input onChange={this.addName} style={{ width: 500 }} />
                  <h3 className="h3"> Phone number </h3>
                  <Input onChange={this.addPhone} style={{ width: 500 }} />
                  <h3 className="h3"> Age </h3>
                  <Input onChange={this.addAge} style={{ width: 500 }} />
                  <h3 className="h3"> Email address </h3>
                  <Input onChange={this.addEmail} style={{ width: 500 }} />

                  <h3 className="h3"> About you and your class </h3>
                  <TextArea
                    rows={4}
                    onChange={this.addNotes}
                    style={{ width: 500 }}
                  />

                  <h3 className="h3"> Other notes </h3>
                  <TextArea
                    rows={4}
                    onChange={this.addDisease}
                    style={{ width: 500 }}
                  />

                  <h3 className="h3">The subject you teach </h3>
                  <div style={{ alignItems: "flex_start" }}>
                    <div>
                      <Checkbox onChange={this.checkA} /> Biology
                    </div>

                    <div>
                      <Checkbox onChange={this.checkB} /> Mathematics
                    </div>
                    <div>
                      <Checkbox onChange={this.checkC} /> Chemistry
                    </div>
                    <div>
                      <Checkbox onChange={this.checkD} /> English
                    </div>
                    <div>
                      <Checkbox onChange={this.checkE} /> Arabic
                    </div>
                    <div>
                      <Checkbox onChange={this.checkF} /> Physics
                    </div>
                  </div>

                  <Button
                    type="primary"
                    style={{ color: " #466995", width: 230, marginTop: 20 }}
                    onClick={this.send}
                  >
                    <h2
                      style={{ fontFamily: "AdventPro-Bold	", color: "white" }}
                    >
                      send
                    </h2>
                  </Button>
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

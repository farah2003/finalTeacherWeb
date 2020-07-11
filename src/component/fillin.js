import React, { Component } from "react";
import { Input, Button, Card } from "antd";
import { Icon } from "antd";
import { Radio } from 'antd';
import { Rate } from 'antd';
import * as firebase from "firebase";
class Fillin extends Component {
  state = {
    name: "",
    phone: "",
    age: "",
    email: "",
    Price:"",
    grade:"",
    sub:"",
    city:"",

   
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

  onChangeGrade = e => {
   
    this.setState({
      grade: e.target.value,
    });
  };

  onChangeSub = e => {
   console.log(e)
    this.setState({
      sub: e.target.value,
    });
  };
  onChangeCity = e => {
    console.log(e)
     this.setState({
     city: e.target.value,
     });
   };
  send = () => {
  
    let  name = this.state.name;
    let phone = this.state.phone;
    let age = this.state.age;
    let email = this.state.email;
    let Price =this.state.Price
    let grade=this.state.grade
    let sub =this.state.sub
    let city =this.state.city

    const db = firebase.firestore();

    db.collection("Cards")
      .add({
        Name: name,
        Phone: phone,
        Age: age,
        Email: email,
        Price:Price,
        grade:grade,
        sub:sub,
        city:city
       
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
      })
  };


  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div>
        <div
          style={{
            height: 60,
            width: "100%",
            marginTop: 0,
            backgroundColor: "wh",
        
           
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
      
        

          <div style={{ backgroundColor:'red',width:'100%',height:'100%' }}>
          
<div style={{float:'left',backgroundColor:'green' ,width:'40%',height:'100%'}}> 
<div style={{backgroundColor:'green',height:860}}> hi</div></div>
<div style={{float:'right',width:'60%'}}>  <Card
              className="card"
              style={{
                textAlign: "left",
               

             
              }}
            >
              <div style={{ marginLeft: 70 }}>
                <h1 style={{ marginBottom: 50 }}>Please fill in</h1>

                <div style={{ marginRight: 60 }}>
                  
                  <h3 className="h3"> Teacher name </h3>
                  <Input onChange={this.addName} style={{ width: 500 }} />
                  <h3 className="h3"> Age </h3>
                  <Input onChange={this.addAge} style={{ width: 500 }} />
                  <h3 className="h3"> Phone number </h3>
                  <Input onChange={this.addPhone} style={{ width: 500 }} />
                
                  <h3 className="h3"> Email address </h3>
                  <Input onChange={this.addEmail} style={{ width: 500 }} />

                  <h3 className="h3"> Price </h3>
                  <Input onChange={this.addPrice} style={{ width: 500 }} />
               
                  <div >
                 <h3 className="h3">Grade</h3>
                  < Radio.Group onChange={this.onChangeGrade} value={this.state.grade} size='large'>
                 <Radio value={'tenth'}style={radioStyle}>  tenth</Radio>
                 <Radio value={'eleventh'} style={radioStyle} >eleventh</Radio>
                 <Radio value={'twelfth'}  style={radioStyle}>twelfth</Radio>

                 </Radio.Group>
                 </div>
                  <div style={{marginBottom:230}}> 



<div style={{float:'right' ,width:'40%'}}>
<h3 className="h3">city</h3>
< Radio.Group onChange={this.onChangeCity} value={this.state.city} size='large'>
   <Radio value={'Gaza'} style={radioStyle}>  Gaza</Radio>
   <Radio value={'westGaza'} style={radioStyle}>westGaza</Radio>
   <Radio value={'Rafah'} style={radioStyle}>Rafah</Radio>
   <Radio value={'Khan Younes'} style={radioStyle}>Khan Younes</Radio>

 </Radio.Group>

 </div>
<div  style={{float:'left' ,width:'40%'}}>
                  <h3 className="h3">The subject you teach </h3>
                  
                  <div style={{ alignItems: "flex_start" }}>
                  <Radio.Group onChange={this.onChangeSub} value={this.state.sub} size='large'>
        <Radio value={'Biology'} style={radioStyle}>  Biology</Radio>
        <Radio value={'Mathematics'} style={radioStyle}>Mathematics</Radio>
        <Radio value={'Chemistry'} style={radioStyle}>Chemistry</Radio>
        <Radio value={'Arabic'} style={radioStyle}>Arabic</Radio>
        <Radio value={'Physics'} style={radioStyle}>Physics</Radio>
      </Radio.Group>
 


      </div>
                    {/*
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
                    </div>*/}
                  </div>
                  </div >

                
                  <div style={{display:'flex'}}>
                  <Button
                    type="primary"
                    style={{ width: 230,marginLeft:'70%' }}
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
              </div>
            </Card></div>
          </div>
      </div>
    );
  }
}

export default Fillin;
import React, { Component } from "react";
import { Icon, Button } from "antd";
import { NavLink } from "react-router-dom";
export default class Signupall extends Component {
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
            <NavLink to="/">
            <Icon
              type="home"
              onClick={this.move1}
              style={{ fontSize: "28px", paddingTop: 0, marginRight: 36 }}

            />
            </NavLink>




          </div>
          <div style={{ float: "left" }}>
            <NavLink to="/">
              <img
                style={{
                  marginLeft: 100,
                  marginTop: 0,
                  width: 80,
                  height: 55,
                  opacity: "0,5",
                  filter: "alpha(opacity=50)",
                }}
                src={require("./LOGO.png")}
                alt="img"
              />
            </NavLink>
          </div>
        </div>

        <div style={{ backgroundColor: "#ffffff", height: 200 }}>
        
          <img
            style={{
              width: 1000,
              height:"220%",
              alignItems: "center",
              display: "flex",
              marginLeft:200,
              justifyContent: "center",
              
            }}
            src={require("./unsp.jpg")}
            
            alt="img"
          />
  <div style={{ marginLeft: 120, paddingTop: 20, }}>
            <h1 style={{ color: "#636e72",marginTop:-10 }}> join Tutors PS as: </h1>
          </div>
          <div
            style={{
              

              marginLeft: 500,
              marginBottom:-50,
              marginTop:-65,
              paddingTop: 10,
              justifyContent: "space-between",
              flex: "column",
            }}
            
          >
            <NavLink to="/sign">
              {" "}
              <Button
                style={{ width: 200, height: 70, flex: "row-reverse",marginRight:100 }}
                onClick={this.move}
                type="dashed"
              >
                {" "}
                <h2 style={{ fontFamily: "AdventPro-Bold	", color: "#0984e3" }}>
                  {" "}
                  Student{" "}
                </h2>{" "}
              </Button>
            </NavLink>

            <NavLink to="/signteacher">
              {" "}
              <Button
                style={{ width: 200, height: 70, flex:"row-reverse" }}
                onClick={this.move}
                type="dashed"
              >
                {" "}
                <h2 style={{ fontFamily: "AdventPro-Bold	", color: "#0984e3" }}>
                  {" "}
                  Teacher{" "}
                </h2>{" "}
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

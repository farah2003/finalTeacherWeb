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
        {/* <div>
            <img
              style={{
                backgroundColor: "red",
                width: "100%",
                height: 500,
                opacity: 0.5,
              }}
              onClick={this.pri}
              alt="img"
            />
          </div> */}
        <div style={{ backgroundColor: "#ffffff", height: 200 }}>
          <div style={{ marginLeft: 340, paddingTop: 30 }}>
            <h1 style={{ color: "#002266" }}> join Tutors PS as: </h1>
          </div>

          <div
            style={{
              marginLeft: 550,
              paddingTop: 20,
              justifyContent: "space-between",
              flex: "column",
            }}
          >
            <NavLink to="/sign">
              {" "}
              <Button
                style={{ width: 200, height: 60, flex: "row-reverse" }}
                onClick={this.move}
                type="primary"
              >
                {" "}
                <h2 style={{ fontFamily: "AdventPro-Bold	", color: "white" }}>
                  {" "}
                  Student{" "}
                </h2>{" "}
              </Button>
            </NavLink>

            <NavLink to="/signteacher">
              {" "}
              <Button
                style={{ width: 200, height: 60, margin: 60 }}
                onClick={this.move}
                type="primary"
              >
                {" "}
                <h2 style={{ fontFamily: "AdventPro-Bold	", color: "white" }}>
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

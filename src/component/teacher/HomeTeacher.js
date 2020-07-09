import React, { Component } from "react";
import { Icon, Button } from "antd";
import { NavLink } from "react-router-dom";
export default class HomeTeacher extends Component {
  state = {};

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
        <div>
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
          <div style={{ position: "absolute", top: "30%", right: "45%" }}>
            <h1 style={{ fontSize: "100", fontWeight: "bold" }}>
              we help you{" "}
            </h1>
            <h1>we help you</h1>

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
        </div>
        <div style={{ backgroundColor: "#ffffff", height: 200 }}>
          <div style={{ marginLeft: 340, paddingTop: 30 }}>
            <h1 style={{ color: "#002266" }}>
              {" "}
              YOU CAN SEND YOUR STATE FROM HERE{" "}
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

        <h4 id="test">SOME TEXT</h4>
      </div>
    );
  }
}
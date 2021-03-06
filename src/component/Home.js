import React, { Component } from "react";

import { Button, Card, Layout, Icon, Carousel } from "antd";
import darkTheme from "@ant-design/dark-theme";
import { NavLink } from "react-router-dom";

import "./fillin";
import Nav from "./homeHeader";
const { Footer, Content } = Layout;
class Home extends Component {
  move = () => {
    this.props.history.push("./fillin");
  };

  render() {
    return (
      <div>
        <Nav style={{ position: "fixed" }}></Nav>

        <div style={{ marginBottom: 100, height: 500 }}>
          <div style={{ float: "left", marginRight: 200, width: 500 }}>
            <img
              style={{
                height: "50%",
                opacity: "0,5",
                filter: "alpha(opacity=50)",
              }}
              src={require("./home2.png")}
              alt="img"
            />
          </div>
          <div
            style={{
              float: "right",
              height: 500,
              marginRight: 140,
              marginTop: 80,
            }}
          >
            <h1 style={{ fontSize: 60 }}> Start </h1>
            <h1 style={{ fontSize: 60, paddingBottom: 2 }}> Learning </h1>
            <h1 style={{ fontSize: 90 }}> Now ! </h1>
          </div>
        </div>

        <Footer
          style={{
            backgroundColor: "#133f91",
            height: "350px",
            paddingBottom: 0,
          }}
        >
          <div style={{ padding: 20 }}>
            <h2 style={{ color: "#ffd633" }}>Contact us</h2>
            <a href="https://mail.google.com/mail/u/1/#inbox">
              <Icon type="mail" style={{ fontSize: 25, color: "#ffd633" }} />
              <label style={{ color: "white", fontSize: 18 }}>
                {" "}
                tutorsps@gmail.com
              </label>
            </a>
          </div>
          <div style={{ paddingLeft: 17 }}>
            <a>
              {" "}
              <Icon type="phone" style={{ fontSize: 25, color: "#ffd633" }} />
              <label style={{ color: "white", fontSize: 18 }}>
                {" "}
                0321312000000
              </label>
            </a>
          </div>

          <div style={{ paddingLeft: 17, padding: 15 }}>
            <a href="https://www.facebook.com/karam.hillis">
              {" "}
              <Icon type="facebook" style={{ fontSize: 25, color: "#ffd633" }} />
              <label style={{ color: "white", fontSize:18}}>
                {" "}
                Farah Shaquora{" "}
              </label>
            </a>
          </div>
          <div style={{ paddingLeft: 17, padding: 15 }}>
            <a href="https://www.facebook.com/karam.hillis">
              {" "}
              <Icon type="facebook" style={{ fontSize: 25, color: "#ffd633" }} />
              <label style={{ color: "white", fontSize:18}}>
                {" "}
                sufyan serdah{" "}
              </label>
            </a>
          </div>
          <div style={{ paddingLeft: 30, padding: 15 }}>
            <a href="http://facebook.com/profile.php?id=100025261596847">
              {" "}
              <Icon type="facebook" style={{ fontSize: 25, color: "#ffd633" }} />
              <label style={{ color: "white", fontSize: 18 }}>
                {" "}
                Karam Hillis
              </label>
            </a>

            <label
              style={{
                color: "white",
                fontSize: 18,
                paddingLeft: 200,
                paddingTop: 400,
              }}
            >
              {" "}
              Gaza Strip{" "}
            </label>

            <label
              style={{
                color: "white",
                fontSize: 18,
                paddingLeft: 200,
                paddingBottom: 0,
              }}
            >
              {" "}
              Gaza Strip 901 Boxnorth west
            </label>
          </div>
        </Footer>
      </div>
    );
  }
}

export default Home;

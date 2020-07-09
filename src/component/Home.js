
 



import React, { Component } from "react";

import { Button, Card, Layout, Icon, Carousel } from "antd";
import darkTheme from "@ant-design/dark-theme";
import { NavLink } from "react-router-dom";

import "./fillin";
import Nav from "./homeHeader";
const { Footer } = Layout;
class Home extends Component {
  move = () => {
    this.props.history.push("./fillin");
  };

  render() {
    return (
      <div>
        <Nav style={{ position: "fixed" }}></Nav>

        <Carousel autoplay style={{ flexWrap: "wrap" ,marginLeft:'3%'}}>
          <div>
            <div>
              
              <img
                src={require("../component/tutoring.jpg")}
                style={{ width: "95%", height: 500, marginTop: 0 }}
                alt="img1"
              />
              
            </div>
          </div>
          <div>
            <img
              src={require("../component/algebra.jpg")}
              style={{ width: "90%", height: 500, marginTop: 0 }}
              alt="img2"
            />
          </div>

          <div>
            <img
              src={require("../component/peer-tutoring.jpg")}
              style={{ width: "90%", height: 500, marginTop: 0 }}
              alt="img3"
            />
            
          </div>
          
        </Carousel>
        {/* <div style={{ backgroundColor: "#ffffff", height: 200 }}>
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
                <h2 style={{ fontFamily: "AdventPro-Bold	", color: "navy" }}>
                  {" "}
                  Fill In{" "}
                </h2>{" "}
              </Button>
            </NavLink>
          </div>
        </div> */}

        <Footer
          style={{
            backgroundColor: "#133f91",
            height: "300px",
            paddingBottom: 0,
          }}
        >
          <div style={{ padding: 20 }}>
            <h2 style={{ color: "navy" }}>Contact us</h2>
            <a href="https://mail.google.com/mail/u/1/#inbox">
              <Icon type="mail" style={{ fontSize: 30, color: "navy" }} />
              <label style={{ color: "white", fontSize: 22 }}>
                {" "}
                tutorsps@gmail.com
              </label>
            </a>
          </div>
          <div style={{ paddingLeft: 17 }}>
            <a>
              {" "}
              <Icon type="phone" style={{ fontSize: 30, color: "navy" }} />
              <label style={{ color: "white", fontSize: 22 }}>
                {" "}
                0321312000000
              </label>
            </a>
          </div>

          <div style={{ paddingLeft: 17, padding: 15 }}>
            <a href="https://www.facebook.com/karam.hillis">
              {" "}
              <Icon type="facebook" style={{ fontSize: 30, color: "navy" }} />
              <label style={{ color: "white", fontSize: 22 }}>
                {" "}
                Farah Shaquora{" "}
              </label>
            </a>
          </div>
          <div style={{ paddingLeft: 30, padding: 15 }}>
            <a href="http://facebook.com/profile.php?id=100025261596847">
              {" "}
              <Icon type="facebook" style={{ fontSize: 30, color: "navy" }} />
              <label style={{ color: "white", fontSize: 22 }}>
                {" "}
                Karam Hillis
              </label>
            </a>

            <label
              style={{
                color: "white",
                fontSize: 22,
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
                fontSize: 22,
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
import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import SendIcon from "@material-ui/icons/Send";
import Input from "@material-ui/core/Input";
import CardActions from "@material-ui/core/CardActions";
import { NavLink } from "react-router-dom";
import moment from 'moment'
import {Layout,Menu } from "antd";
import * as firebase from "firebase";
const { Header } = Layout;
const useStyles = makeStyles((theme) => ({
  root1: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    maxWidth: 360,
    minWidth: 350,
    float: "left",
    marginLeft: "9%",
  },
  pos: {
    marginBottom: 12,
    marginLeft: 130,
  },
  root3: {
    minWidth: 750,
    maxHeight:900,
  
    minHeight: 480,
    float: "right",
    marginRight: "9%",
  },
  container: {
    bottom: 0
    // position: "fixed" // remove this so we can apply flex design
  },
  bubbleContainer: {
    width: "100%",
    display: "flex" ,
    justifyContent:'center'
   
    //new added flex so we can put div at left and right side
    //check style.css for left and right classnaeme based on your data
  },
oseInput: {
    padding: '16px'
  },
   composeInput: {
    padding: '16px'
  },
  composeInputPaper: {
    marginTop: '16px',
    minWidth:'80%',

    margin:'0 auto'
  },
}));

export default function AotherChat() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [Text, setText] = useState("");
  const [MassageList, setMassageList] = useState([]);
  const [Sender, setSender] = useState("");
  const [reciver, setreciver] = useState("");


  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  function getData() {
    
 
  }
  useEffect (() => {
      const ListMassge=[]

      const reciverid = "5iVRbFTumggMmQdayk17TeHpj0U2" 
  
    const senderid="7Byqa6tYrDV3B6vonF0QEsycgYX2"
    let user1="fghsfgh"
    let user2 ="fgh"
    if (senderid < reciverid ){
     
      user1= senderid;
      user2= reciverid;

    }else{
      user1=reciverid;
      user2=senderid;
     
    }
 

    getData()
    
     console.log('uuuuuuu1',user1)
     console.log('uuuuuuu2',user2)
  
    const db=firebase.firestore()
    
   db.collection("Chat")
    .doc(user1+ "_"+ user2)
    .collection("massage")
    .onSnapshot(
      snapshot => {
        snapshot.docChanges().forEach(change => {
            ListMassge.push(change.doc.data())
            console.log('lisssst',ListMassge)
           console.log(' user1')
            
        })
        setMassageList(ListMassge)
    })
   
  }, [Text]);
const handelChange=(e)=>{
console.log('eee',e.target.value)

setText(e.target.value)
} 


const timestamp = moment()
.valueOf()
.toString()


const getText=()=>{
    const reciverid = "5iVRbFTumggMmQdayk17TeHpj0U2" 
  
    const senderid="7Byqa6tYrDV3B6vonF0QEsycgYX2"
    let user1="fghsfgh"
    let user2 ="fgh"
    if (senderid < reciverid ){
     
      user1= senderid;
      user2= reciverid;

    }else{
      user1=reciverid;
      user2=senderid;
     
    }
    let date = new Date()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()
let time= hours+':'+ minutes+':'+seconds
console.log('ttttt',time)

   
    const db=firebase.firestore()
    db.collection("Chat").doc(user1+ "_"+user2).collection("massage").doc(timestamp).set({
        senderid:senderid,
        reciverid:reciverid,
        contant:Text,
        time:time

    })
    setText("")
    
    }
    
    const getBubbleStyle = (userid) => {
      return {
          backgroundColor: (userid === "7Byqa6tYrDV3B6vonF0QEsycgYX2" ?"#f4f7f8" : "#54c5eb"),
      
          borderRadius: "10px",
          margin: "5px",
          padding: "10px",
          display: "inline-block",
          boxShadow:'0 1px 3px 0 rgba(0, 0, 0, 0.2)'
        
        
          
         
      }
  }
   
  const getBubbleContainer = (userid) => {
    return {
       
        width: "100%",
        display: "flex" ,
     
      
       justifyContent: (userid === "7Byqa6tYrDV3B6vonF0QEsycgYX2" ? "flex-start" : "flex-end"),
       
    }
}
  const chatBubbles = MassageList.map((obj) => (
     

    <div style={getBubbleContainer(obj.senderid)} >
                                  {/*defualt useris*/  }
     
        
     
       
    

      <div style={getBubbleStyle(obj.senderid)}>
    
     
      <div > {obj.contant}</div>
      <div> {obj.time}</div>
      
      </div>
   
    </div>

  ));
  return (
    <div style={{ height: 900, backgroundColor: "#f5f5f0" }}>
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
      <div style={{ marginTop: 30 }}>
        <Card className={classes.root} variant="outlined">
          <scroll>
            <CardContent>
              <Typography className={classes.pos} color="textSecondary">
                Chat
              </Typography>
              <List className={classes.root1}>
                <Divider />
                <ListItem
                  button
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Farah Shaqoura"
                    secondary="okay  12 July 2020"
                  />
                </ListItem>
                <Divider />
                <ListItem
                  button
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    primary="Karam Hillis"
                    secondary="okay  12 July 2020"
                  />
                </ListItem>
                <Divider />

                <Divider />
              </List>
            </CardContent>
          </scroll>
        </Card>

        <Card className={classes.root3} variant="outlined">
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
            }
            title="Farah Shaqoura"
          />
          <Divider />

          <CardContent style={{ marginTop: "60%" }}>
          <div className={classes.container}>{chatBubbles}</div>
          </CardContent>
          <CardActions>
          <Card className={classes.composeInputPaper}  >
             
             <Input
             value={Text}
              classes={{ root: classes.composeInput }} 
               multiline={true}
               fullWidth={true}
               disableUnderline={true}
               placeholder={"Send a message!"}
               onChange={handelChange}
               endAdornment={<SendIcon onClick={getText}  button className={classes.searchIcon} />}
             />
             </Card>
          </CardActions>
          
        </Card>
      </div>

    </div>
  );
}

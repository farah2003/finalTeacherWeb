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
import moment from 'moment'
import * as firebase from "firebase";
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

    minHeight: 400,
    float: "right",
    marginRight: "9%",
  },
  container: {
    bottom: 0
    // position: "fixed" // remove this so we can apply flex design
  },
  bubbleContainer: {
    width: "100%",
    display: "flex" //new added flex so we can put div at left and right side
    //check style.css for left and right classnaeme based on your data
  },
  bubble: {
    border: "0.5px solid black",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
    display: "inline-block"
  },
  composeInput: {
    padding: '16px'
  },
   composeInput: {
    padding: '16px'
  },
  composeInputPaper: {
    marginTop: '16px',
    minWidth:'90%',
    margin:'0 auto'
  },
}));

export default function Chat() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [Text, setText] = useState("");
  const [MassageList, setMassageList] = useState([]);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
      const ListMassge=[]
    const senderid="5iVRbFTumggMmQdayk17TeHpj0U2"
    const reciverid="7Byqa6tYrDV3B6vonF0QEsycgYX2"
    const db=firebase.firestore()
    const read =db.collection("Chat")
    .doc(senderid+ "_"+reciverid)
    .collection("massage")
    .onSnapshot(
      snapshot => {
        snapshot.docChanges().forEach(change => {
            ListMassge.push(change.doc.data())
            console.log('lisssst',ListMassge)
            setMassageList(ListMassge)
        })
    })
    return()=>read();
  }, []);
const handelChange=(e)=>{
console.log('eee',e.target.value)

setText(e.target.value)
} 


const timestamp = moment()
.valueOf()
.toString()
const getText=()=>{
    const senderid="5iVRbFTumggMmQdayk17TeHpj0U2"
    const reciverid="7Byqa6tYrDV3B6vonF0QEsycgYX2"
    const db=firebase.firestore()
    db.collection("Chat").doc(senderid+ "_"+reciverid).collection("massage").add({
        senderid:senderid,
        reciverid:reciverid,
        contant:Text,
        time:timestamp

    })
    
    }
 
  const chatBubbles = MassageList.map((obj) => (
    <div style={  {display: 'flex'}}>
         <Avatar alt='farh' />

      <div className={classes.bubble}>
        
     
        <div>{obj.contant}</div>
        <div> {obj.time}</div>
      </div>
    </div>
  ));
  return (
    <div style={{ height: 900, backgroundColor: "#f5f5f0" }}>
      <div style={{ height: 60, backgroundColor: "#001a33" }}>
        <div style={{ paddingTop: 18, float: "right", marginRight: 70 }}></div>
        <div>
          <label
            className="Label"
            style={{
              marginLeft: 120,
              paddingTop: 60,
              color: "white",
              fontFamily: "Satisfy",
              fontSize: 30,
            }}
          ></label>
        </div>
      </div>
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

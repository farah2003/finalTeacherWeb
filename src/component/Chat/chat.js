import React from "react";
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
import Paper from '@material-ui/core/Paper';
import CardActions from "@material-ui/core/CardActions";
import Moment from 'moment';
import * as firebase from 'firebase'
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
  root4: {
    margin:'0 auto',
    minWidth: '90%',

   
  },
  
  container: {
    bottom: 0
  
  },
 
  bubble: {
    border: "0.5px solid black",
    borderRadius: "10px",
    margin: "5px",
    padding: "10px",
    display: "inline-block"
  },
  composeInput: {
    padding: '8px',

  },
  
}));


export default function Chat() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [Text, setText] = React.useState("");
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  
  
  const dummyData = [
    {
      message: " This should be in left",
      direction: "left"
    },
    {
      message: " This should be in right",
      direction: "right"
    },
    {
      message: " This should be in left again",
      direction: "left"
    },
    {
      message: " This should be in right again",
      direction: "right"
    }
  ];

  const chatBubbles = dummyData.map((obj, i = 0) => (
    <div style={{ display: 'flex'}}>
       <Avatar alt='Remy Sharp'  />
      <div className={classes.bubble} >{obj.message}</div>
    </div>
  ));
  const handleChange= (event) => {
  
    

   
  
    
    setText(event.target.value)
    console.log('event',event.target.value)
 
  };
  const timestamp = Moment().valueOf().toString()
  const gitText=()=>{
    /////defult uid 
    const reciverid='3LzS2IyLP2dq4xwr013jiXgPKli1'
    const senderid="1q4mSLp8ogR7bWSCw1SYi53z7xo2"
    const db = firebase.firestore();
    db.collection("finatChat")
    .doc(reciverid +"_"+ senderid).collection('massage').add ({
      senderid:senderid,
      reciverid:reciverid,
      contant:"hello",
      time: timestamp
    })
   /*to get data
   db.collection("finatChat")
   .doc(reciverid +"_"+ senderid)
   .collection(massage)
   .onSnapshot(
      snapshot => {
        snapshot.docChanges().forEach(change => */
  }




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
          <Card   className={classes.root4}>
           
            <Input
            className={classes.composeInput}
              multiline={true}
              fullWidth={true}
              disableUnderline={true}
              onChange ={handleChange}
              placeholder={"Send a message!"}
              endAdornment={<SendIcon  className={classes.searchIcon} 
              onClick={gitText}
             />}
            />

            </Card>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

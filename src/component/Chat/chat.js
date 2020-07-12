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
import CardHeader from '@material-ui/core/CardHeader';
import SendIcon from '@material-ui/icons/Send';
import Input from '@material-ui/core/Input';
import CardActions from '@material-ui/core/CardActions';
const useStyles = makeStyles(theme => ({
  root1: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  root: {
    maxWidth: 360,
    minWidth:350,
    float:'left',
    marginLeft:"9%"
  },
  pos: {
    marginBottom: 12,
    marginLeft:130
  },
  root3: 
    {
    minWidth:750,
  
    minHeight:400,
    float:'right',
    marginRight:'9%'
  },

}));

export default function Chat() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
      <div style={{height:900,backgroundColor:"#f5f5f0"}}>
        <div style={{height:60,backgroundColor:"#001a33"}}>
        <div style={{paddingTop:18,float:"right",marginRight:70}}>
      
          </div>
          <div>
          <label className="Label" style={{marginLeft:120 ,paddingTop:60,color:'white',fontFamily: 'Satisfy',fontSize:30}}></label>
          </div>
        
        </div>
        <div style={{marginTop:30}}>
    <Card className={classes.root} variant="outlined">
    
        <scroll>
    <CardContent>
    <Typography
          className={classes.pos}
          color="textSecondary"
        
        >
         Chat
        </Typography>
    <List className={classes.root1}>
         <Divider />
      <ListItem
      button
      selected={selectedIndex === 0}
      onClick={event => handleListItemClick(event, 0)}
      >
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary="Farah Shaqoura" secondary="okay  12 July 2020" />
      </ListItem>
      <Divider />
      <ListItem 
        button
        selected={selectedIndex === 1}
        onClick={event => handleListItemClick(event, 1)}>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary="Karam Hillis" secondary="okay  12 July 2020"  />
      </ListItem>
      <Divider />
      <ListItem 
        button
        selected={selectedIndex === 2}
        onClick={event => handleListItemClick(event, 2)}>
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary="Sufyan Serdah" secondary="okay  12 July 2020"  />
      </ListItem>
      <Divider />
      <ListItem
      button
      selected={selectedIndex === 3}
      onClick={event => handleListItemClick(event, 3)}
      >
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary="Farah Shaqoura" secondary="okay  12 July 2020" />
      </ListItem>
      <Divider />
      <ListItem
      button
      selected={selectedIndex === 4}
      onClick={event => handleListItemClick(event, 4)}
      >
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary="Farah Shaqoura" secondary="okay  12 July 2020" />
      </ListItem>
      <Divider />
      <ListItem
      button
      selected={selectedIndex === 5}
      onClick={event => handleListItemClick(event, 5)}
      >
        <ListItemAvatar>
          <Avatar />
        </ListItemAvatar>
        <ListItemText primary="Farah Shaqoura" secondary="okay  12 July 2020" />
      </ListItem>
      <Divider />
      
      
    </List>
    </CardContent>
    </scroll>
    </Card>
 

    <Card className={classes.root3} variant="outlined">
    <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
       
          </Avatar>
        }
       
        title="Farah Shaqoura"
        
      />
         <Divider />
 
 <CardContent style={{marginTop:'60%'}}>   
      
 </CardContent >
 <CardActions>
 
 <Input 
 multiline={true} fullWidth={true} disableUnderline={true} placeholder={"Send a message!"} 
            endAdornment={<SendIcon className={classes.searchIcon} />}
          />
               </CardActions>
    </Card>
    
    
    
    </div>


    




    
    </div>
  );
}

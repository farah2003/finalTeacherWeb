import React, { Component } from 'react';
import { Menu,Icon, Typography,Button,Card } from 'antd';
import { Select,Avatar,Modal } from 'antd';


import { Rate } from 'antd';

const { Meta } = Card;
export default class Try extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <div style={{backgroundColor:'#ececec',marginTop:0,height:400}}>
          <Card
           bordered={false}
    style={{ width:'63%',margin:'auto',marginTop:100,top:50,boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}
   
  
  >
    <Meta
      avatar={<Avatar style={{width:140, height:140}}/>}
      title={<h4 style ={{marginTop:20}}>item.Name </h4>}
      description={
     <div style={{textAlign:"right",display:"flex"}}>
               <div style={{float:"right"}}> 
              
                <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:10}}> subject: </label >item.sub </h6>
                <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:10}}> Grade: </label >item.grade </h6>
                <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:10}}> Phone </label >item.Phone </h6>
                <Button type="primary" style={{marginLeft:50}}>
          massage
        </Button>
        
                </div> 
                <div style={{float:"left",marginLeft:'30%'}}>
                <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:10}}> City:</label >item.city </h6>
                <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:10}}> Price:</label >item.Price </h6>
          <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:10}}> Age:</label >item.Age</h6>
          <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:10}}> Rate:</label >item.rating</h6>
        
              
        <Button  >
          see profile
        </Button>
               
        <Button style={{backgroundColor:"green",marginLeft:50}} >
        booked
        </Button>
        
                

                </div>
      </div>}
    />
  </Card>
     </div>
    );
  }
}

import React, { Component } from 'react';
import { Menu,Icon, Typography,Button,Card } from 'antd';
import { Select,Avatar } from 'antd';
import * as firebase from 'firebase'
import './profileStudent'

import { SaveOutlined , MessageOutlined, CodeSandboxCircleFilled} from '@ant-design/icons';



const { Text, } = Typography;
const { Option } = Select;
const { Meta } = Card;
class SHome extends Component{

   state={
       sub:"",
       grade:"",
       location:'',
       list:[],
       ListPost:[]

   }

   getlist=()=>{
    let  user = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection("Student").doc(user.uid).get().then((userdoc) =>{
  
      
   
      
      let listfromData= userdoc.data().savepost
  
      this.setState({
        ListPost: listfromData,
        id:user.uid
      })
      
      console.log(listfromData)
      
    })}
  componentWillMount(){
  
  const db = firebase.firestore();
   
  let newList =[]
  db.collection("teacher").get().then((userSnapshot) => {


    
    userSnapshot.docs.map(doc =>{
    
    let x= doc.data()
console.log('item',x)
    x.id=doc.id
    newList.push(x)    
       } );
  console.log('list',newList)
    this.setState({
      list:newList
    })
    
})
this.getlist()
  
  }


  saveCard=(i)=>{
    const{ListPost}=this.state
  console.log('iiiiii',i)
  ListPost.push(i)
 
   
    const db = firebase.firestore()
    let  user = firebase.auth().currentUser;
   
  
    console.log('useerrrrr',user.uid)
   let  washingtonRef = db.collection("Student").doc(user.uid)
 
 console.log('washingtonRef',washingtonRef)

 this.setState({
  ListPost
})

console.log('LLLLLL',this.state.ListPost)
  return washingtonRef.update({
    savecard :this.state.ListPost
  })

  }
  unsave = (index)=>{
    const db = firebase.firestore()
    let  user = firebase.auth().currentUser;
    let { ListPost} = this.state;
   let x =  ListPost.filter((item,i)=>i!=index)

    this.setState({
      ListPost :x
    })
    let  washingtonRef = db.collection("Student").doc(user.uid)
 
    console.log('washingtonRef',washingtonRef)
  
   
   console.log('LLLLLL',this.state.ListPost)
     return washingtonRef.update({
      savecard :this.state.ListPost
     })
   

}
  onChange1=(value)=> {
    console.log(`selected ${value}`);
 
    this.setState({
        location:value
    })
  }
  
  
onSearch1=(val)=> {
    console.log('search:', val);
      console.log('search:', val);
    
  }
  onChange2=(value)=> {
    console.log(`selected ${value}`);
    this.setState({
        grade:value
    })
  }
  
  
onSearch2=(val)=> {
    console.log('search:', val);
  }
 onChange3=(value)=> {
    console.log(`selected ${value}`);
    this.setState({
        sub:value
    })
    }
  
onSearch3=(val)=> {
    console.log('search:', val);

  }
  filter=()=>{
      const {sub}=this.state
      const {grade}=this.state
      const {location}=this.state
   
      const db = firebase.firestore();
   
      let newList =[]
      db.collection("teacher").where('sub','==',sub).where('city','==',location).where('grade','==',grade).get().then((userSnapshot) => {
  
    
        
        userSnapshot.docs.map(doc =>{
       console.log("map",doc)
        let x= doc.data()
    console.log(x)
        x.id=doc.id
        newList.push(x)    
           } );
      
        this.setState({
          list:newList
        })
        
    })

  }
  goToProfile=()=>{
    console.log('goooo')
    this.props.history.push('./profileStudent')
 
     }
    move1=()=>{
      let  user = firebase.auth().currentUser;
      console.log(user)
       
       }
  render(){
    const {list}=this.state
    console.log('list',list)
    return( 
     <div >
           <div style={{height:60,width:"100%",marginTop:0,backgroundColor:"wh",marginBottom:2,borderBottom:"1px solid #f2f2f2"}}>
        <div style={{paddingTop:18,float:"right",marginRight:70}}>
        <Icon  type="home" 
         onClick={this.move1}
         style={{ fontSize: '28px',paddingTop:0,marginRight:36 }} />
         
         <Icon  type="message" 
         onClick={this.move1}
         style={{fontSize: '28px',paddingTop:0,marginRight:36 }} />
         <Icon  type="user" 
         onClick={this.goToProfile}
         style={{fontSize: '28px',paddingTop:0,marginRight:36 }} />
{/*, color: '#1890ff' */}
         <Icon  type="setting" style={{fontSize: '27px'}} />
          </div>
          <div>
          <label className="Label" style={{marginLeft:120 ,paddingTop:60,fontFamily: 'Satisfy',fontSize:30}}>Dent Guide</label>
          </div>
        
        </div>
        <div>
        <img style={{backgroundColor:'red', width:'100%',height:250}}  src={require("./homestudent.jpg")} onClick={this.pri} alt="img"/>
        </div>
<div>
{/////////////filter here
}
</div>
   <div style={{borderTop:"1px solid #f2f2f2"}}></div>

          <div>
          <Menu
           
            mode="horizontal"
            id="navbar"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '80px',backgroundColor:"#e6e6fa" ,display:'flex',justifyContent:'space-around',alignItems:'center'}}
          >
           
          <Text >filter by</Text>
       
         
                  <Select
               
   size="large"
    showSearch
    style={{ width: 200 }}
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={this.onChange1}
 
    onSearch={this.onSearch1}
    
  >
    <Option value="Gaza">Gaza</Option>
    <Option value="Rafah">Rafah</Option>
    <Option value="NorthGaza">NorthGaza</Option>
  </Select>
  <Select
   size="large"
    showSearch
    style={{ width: 200 }}
    placeholder="Select a grade"
    optionFilterProp="children"
    onChange={this.onChange2}
 
    onSearch={this.onSearch2}
   
  >
    <Option value="tenth">tenth</Option>
    <Option value="eleventh">eleventh</Option>
    <Option value="twelfth">twelfth</Option>
  </Select>
  <Select
   size="large"
    showSearch
    style={{ width: 200 }}
    placeholder="Select subject"
    optionFilterProp="children"
    onChange={this.onChange3}
 
    onSearch={this.onSearch3}
  
  >
    <Option value="Math">Math</Option>
    <Option value="physics">physics</Option>
    <Option value="piology">piology</Option>
    <Option value="chemistry">chemistry</Option>
  </Select>
  <Button type="primary" onClick={this.filter} style={{width:150,height:45}}>
          Apply
        </Button>
  </Menu>
                 
      
          </div>

   
          <div style={{backgroundColor:"white"}}>
              {list.map((item,index)=>{
  
       
        return(

          <div style={{paddingTop:100}}> 
       
       <div  style={{backgroundColor:"white"}}>
       <Card
    style={{ width:'63%',margin:'0 auto'}}
   
    actions={[
      <Icon  type="message" 
     // onClick={()=>this.gotoChat(item)}
      style={{fontSize: '28px',paddingTop:0,marginRight:36 }} />,
      <Icon  type="save" 
     // onClick={()=>this.saveCard(item)}
      style={{fontSize: '28px',paddingTop:0,marginRight:36 }} />
   
    ]}
  >
    <Meta
      avatar={<Avatar style={{width:140, height:140}}src={require("./profile.png")}/>}
      title={<h4 style ={{marginTop:20}}> farah shaqoura</h4>}
      description={
     <div style={{textAlign:"right",display:"flex"}}>
               <div style={{float:"right"}}> 
              
                <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:40}}> subject </label >{item.sub} </h6>
                <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:40}}> subject </label >{item.sub} </h6>
                <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:40}}> subject </label >{item.sub} </h6>
            
        
                </div> 
                <div style={{float:"left",marginLeft:'30%'}}>
                <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:40}}> subject </label >{item.sub} </h6>
                <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:40}}> subject </label >{item.sub} </h6>
          <h6 style={{fontSize:14 }}> <label style={{fontSize:14,marginRight:40}}> subject </label >{item.sub} </h6>
                <button onClick={()=>this.unsave(index)}>unsave</button>
                </div>
      </div>}
    />
  </Card>
        
    {/* <Card 
      
 style={{ width: 800,height:300 ,marginLeft:220,marginBottom:0, paddingTop:0}}>
          <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" style={{width:100,height:100}} />}
      title={<h4 style={{height:10,marginTop:3,fontWeight:'bold' ,marginRight:30,textAlign:"right"}}>farah shaqoura</h4>}
      description="This is the description"
    />
         {/*  <div style={{textAlign:"right",display:"flex",height: 200}}>
               <div style={{float:"right",height: 200,marginLeft:50}}> 
                <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> Name</label>:{item.name} </h3>
                <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> subject</label>:{item.sub} </h3>
            
                <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}>grade</label>:{item.grade}</h3>
            
                <div style={{marginTop:0}}>
      
    </div>
                </div> 
                <div style={{float:"left",height: 200,marginLeft:160}}>
             
                <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}> city  :</label> {item.city}</h3>
                <h3 style={{fontSize:18}}> <label style={{fontSize:18,marginRight:7}}>Notes :</label>{item.Notes}</h3>
             
               
                
  
      </div>
      
    
      </div>
                
    
                </Card>
    */}
                 
             
    
              </div>
                  </div>
                    )}

                )}   
</div>



  </div>




      
      
  
    )
  }
}

export default SHome;

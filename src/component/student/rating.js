import React, { useState } from 'react';
import { Rate, Modal } from 'antd';
import * as firebase from 'firebase'
const  Rating =()=>{
const [rating,setrating]=useState();
const [visible ,setvisible]=useState(false);
return(

    <div>
        <Rate allowHalf defaultValue={2.5} onChange={(value)=>{
           
              setvisible(true)

        
        }} />

<Modal
          title="Rating"
          visible={visible}
          onOk={()=>{
                       
    const db = firebase.firestore();
 
    db.collection("Rating")
    .add({
     
     rating
    })
            setvisible(false)
          }}
          onCancel={()=>{
            setvisible(false)  
          }}
        >
         <Rate allowHalf defaultValue={2.5} onChange={(value)=>{
             setrating(value)
             console.log(value)
         }}/>

        </Modal>
       
    </div>
)

}
export default Rating ;
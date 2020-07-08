import React, { Component } from 'react';
import {  Button } from 'antd';

export default class Choose extends Component {
    gotostudent=()=>{
        this.props.history.push( './student/studentHome')}
    gototeacher=()=>{
        this.props.history.push( './teacher/HomeTeacher')  
    }
  render() {
    return (
      <div>
          <div style={{ marginBottom:100 }}>
    <Button type="primary" htmlType="submit"
  onClick={this.gotostudent} > 
 student 
</Button>
</div>
<Button type="primary" htmlType="submit"
  onClick={this.gototeacher} > 
teacher
</Button>
      </div>
    );
  }
}

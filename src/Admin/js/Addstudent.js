import React, { Component } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteSG1, getCourseS, getGroup } from '../../host/config';
import { host } from '../../host/host';

export default class Addstudent extends Component {
state={
  data:[],
  student:[]
}


  getGroupName=()=>{
    getGroup().then(res=>{
this.setState({data:res.data})
    })
  }

getId=(id)=>{
  getCourseS(id).then(res=>{
    this.setState({student:res.data}) })
}
deleteSG=(id)=>{
deleteSG1(id).then(res=>{alert("o`chib ketdi")}).catch(err=>{alert('o`chmadi')})
}

  componentDidMount(){
    this.getGroupName()
  }
  render() {
    return (
<div>
<Form.Select aria-label="Default select example">
 {this.state.data.map(item=>{ return <option value="1" onClick={()=>this.getId(item.id)}>{item.course.title} {item.id}</option>})}
</Form.Select>
<Table style={{marginTop:'100px'}} striped bordered hover size="sm">
  <thead style={{fontSize:'20px'}}>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Patronymic</th>
      <th>Delete</th>
      <th>Shartnoma</th>
    </tr>
  </thead>
  <tbody  style={{fontSize:'20px'}}>
   {this.state.student.map(item=>{
     return(
     <tr>
      <td>{item.id}</td>
      <td>{item.student.first_name}</td>
      <td>{item.student.last_name}</td>
      <td>{item.student.patronymic}</td>
      <td><Button variant="danger" onClick={()=>this.deleteSG(item.id)} >Delete</Button></td>
      <td><Button variant="success" href={item.contract} target="_blank">Shartnoma</Button></td>
    </tr>)})}
  </tbody>
</Table>


</div>
        )
  }
}

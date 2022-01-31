import React, { Component } from 'react';
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { Pagination } from 'antd';
import { getStudents } from '../../host/config'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class User extends Component {
    state={
        show:false,
        show1:false,
        data:[],
        count:0,
    }
    getStudent=()=>{ 
      getStudents()
    .then(res => {
this.setState({data:res.data.results, count:res.data.count})
    }).catch(err => {
      console.log(err);
    })
  }
    handleClose=()=>{
        this.setState({show:false})
    }
    handleShow=()=>{
        this.setState({show:true})
    }
    handleClose1=()=>{
        this.setState({show1:false})
    }
    handleShow1=()=>{
        this.setState({show1:true})
    }

componentDidMount(){
this.getStudent()

    
}

  render() {
    

  
    return <div>
       <Button style={{marginBottom:'40px'}} variant="primary" onClick={this.handleShow}>Create Students</Button>  <h3>All:{this.state.count}</h3><br/>
       <Pagination
    total={this.state.count}
    showSizeChanger
    showQuickJumper
    showTotal={total => `Total ${total} items`}
  />
        <Table stipred bordered hover variant="dark">
  <thead>
    <tr>
      <th>id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Pateronimic</th>
      <th>Delete</th>
      <th>Edit</th>
    </tr>
  </thead>
  <tbody>
    {this.state.data.map(item=>{
      return(
    <tr>
      <td>{item.id}</td>
      <td>{item.first_name}</td>
      <td>{item.last_name}</td>
      <td>{item.patronymic}</td>
      <td><Button variant='danger'>Delete</Button></td>
      <td><Button variant="success" onClick={this.handleShow1}>Edit</Button></td>
    </tr>)
  })}
  </tbody>


      <Modal fullscreen={true} show={this.state.show} onHide={this.handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex'}}><Form style={{display:'block',width:'50%',padding:'30px'}}>
  
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>First name</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter first name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter last name<" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Patronimic</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter patronimic" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Birthdate</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter birthdate" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Telefon number</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter telefon number" />
  </Form.Group> 
   <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Extra telefon number</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter email" />
  </Form.Group>
</Form>
<Form style={{display:'block',width:'50%',padding:'30px'}}>
<Form.Group className="mb-3" controlId="formBasicUser">
  <Form.Label>Position</Form.Label>
  <Form.Select aria-label="Default select example">
     <option value="1">Student</option>
  <option value="2">Ota-ona</option>
  <option value="3">Instructor</option>
  <option value="4">Admin</option>
</Form.Select></Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Profil foto</Form.Label>
    <Form.Control type="images" className="mb-3" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Notes</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Course</Form.Label>
  <Form.Select aria-label="Default select example">
     <option value="1">Scratch</option>
  <option value="2">Web front-end</option>
  <option value="3">Backent</option>
  <option value="4">graph</option>
</Form.Select>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Block" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Deleted" />
  </Form.Group>

<Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Individual type" />
  </Form.Group></Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>



<Modal fullscreen={true} show={this.state.show1} onHide={this.handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal header</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex'}}><Form style={{display:'block',width:'50%',padding:'30px'}}>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Id</Form.Label>
    <Form.Control type="email"   aria-label="Disabled input example"
    readOnly className="mb-3" placeholder="1213121" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>First name</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter first name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter last name<" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Patronimic</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter patronimic" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Birthdate</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter birthdate" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Telefon number</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter telefon number" />
  </Form.Group> 
   <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Extra telefon number</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter email" />
  </Form.Group>
</Form>
<Form style={{display:'block',width:'50%',padding:'30px'}}>
<Form.Group className="mb-3" controlId="formBasicUser">
  <Form.Label>Position</Form.Label>
  <Form.Select aria-label="Default select example">
     <option value="1">Student</option>
  <option value="2">Ota-ona</option>
  <option value="3">Instructor</option>
  <option value="4">Admin</option>
</Form.Select></Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Profil foto</Form.Label>
    <Form.Control type="images" className="mb-3" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Notes</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Course</Form.Label>
  <Form.Select aria-label="Default select example">
     <option value="1">Scratch</option>
  <option value="2">Web front-end</option>
  <option value="3">Backent</option>
  <option value="4">graph</option>
</Form.Select>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Create date</Form.Label>
    <Form.Control type="email"   aria-label="Disabled input example"
    readOnly className="mb-3" placeholder="1213121" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Block" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Deleted" />
  </Form.Group>

<Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Individual type" />
  </Form.Group></Form>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose1}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose1}>
            Create document
          </Button>
          <Button variant="primary" onClick={this.handleClose1}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


</Table>
    </div>;
  }
}

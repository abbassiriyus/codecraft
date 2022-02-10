import React, { Component } from 'react';
import { deleteUser, getStudents } from '../../host/config'
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Input, Button, Space, Popconfirm,} from 'antd';
import { Form , Modal } from 'react-bootstrap';
import axios from 'axios';
export default class Student extends Component {
    state={
        show:false,
        show1:false,
        count:0,
         searchText: '',
      searchedColumn: '', 
      data:[],
    }
     handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});
    handleClose1 = () => this.setState({show1:false});
    handleShow1 = () => this.setState({show1:true});
    
    getStudent=()=>{
      getStudents().then(res=>{this.setState({data:res.data}) 
      console.log("ok") }).then(err=>{console.log('error')}) 
    }
  
    getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            ref={node => {
              this.searchInput = node;
            }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                this.setState({
                  searchText: selectedKeys[0],
                  searchedColumn: dataIndex,
                });
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex]
          ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
          : '',
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => this.searchInput.select(), 100);
        }
      },
      render: text =>
        this.state.searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[this.state.searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });
  
    handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
      this.setState({
        searchText: selectedKeys[0],
        searchedColumn: dataIndex,
      });
    };
  
    handleReset = clearFilters => {
      clearFilters();
      this.setState({ searchText: '' });
    };
    handleDelete = (key) => {
      deleteUser(key).then(res=>{alert("o`chirib tashladik")})
    }
    PostUser=()=>{
      document.querySelector('#formBasicFirst').value=""
      document.querySelector('#formBasicLast').value=""
      document.querySelector('#formBasicPat').value=""
      document.querySelector('#formBasicBirth').value=""
      document.querySelector('#formBasicTel').value=""
      document.querySelector('#formBasicTel1').value=""
      document.querySelector('#formBasicImages').value=""
      document.querySelector('#formBasicNote').value=""
      const user={
        'first_name':document.querySelector('#formBasicFirst').value,
        'last_name':document.querySelector('#formBasicLast').value,
        'patronymic':document.querySelector('#formBasicPat').value,
        'birthdate':document.querySelector('#formBasicBirth').value,
        'phone_number':document.querySelector('#formBasicTel').value,
        'extra_phone_numbers':document.querySelector('#formBasicTel1').value,
        'profile_photo':document.querySelector('#formBasicImages').value,
        'notes':document.querySelector('#formBasicNote').value,
        
      }
      console.log(user)
      this.handleClose()
    }



    componentDidMount(){
      this.getStudent()
    }
  
  render() {
    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
        width: '30%',
        ...this.getColumnSearchProps('id'),
      },
      {
        title: 'last_name',
        dataIndex: 'last_name',
        key: 'last_name',
        width: '30%',
        ...this.getColumnSearchProps('last_name'),
      },
      {
        title: 'first_name',
        dataIndex: 'first_name',
        key: 'first_name',
        width: '20%',
        ...this.getColumnSearchProps('first_name'),
      },
      {
        title: 'patronymic',
        dataIndex: 'patronymic',
        key: 'patronymic',
        ...this.getColumnSearchProps('patronymic'),
        sorter: (a, b) => a.patronymic.length - b.patronymic.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'id',
        render: (_, record) =>
          this.state.data.length >= 1? (
            <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
              <a>Delete</a>
            </Popconfirm>
          ) : null,
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'id',
        render: (_, record) => <a onClick={()=>this.handleShow1()}>Edit</a>,
      },
    ];

  
    return <div>
       <Button style={{marginBottom:'40px'}} variant="primary" 
       onClick={this.handleShow}>Create Students</Button> 
       
       
      <Table columns={columns} dataSource={this.state.data} />

      <Modal
      fullscreen={true}
        show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Yangi talaba qo`shish</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex'}}><Form style={{display:'block',width:'50%',padding:'30px'}}>
  
  <Form.Group className="mb-3" >
    <Form.Label>First name<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicFirst" placeholder="Enter first name" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Last name<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicLast" placeholder="Enter last name<" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Patronimic</Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicPat" placeholder="Enter patronimic" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Birthdate<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="date" className="mb-3" id="formBasicBirth" placeholder="Enter birthdate" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Telefon number <sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicTel" placeholder="Enter telefon number" />
  </Form.Group> 
   <Form.Group className="mb-3" >
    <Form.Label>Extra telefon number</Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicTel1" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3">
  <Form.Label>Position<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
  <Form.Select aria-label="Default select example"  id="formBasicPos">
     <option value="s">Student</option>
  <option value="p">Ota-ona</option>
  <option value="i">Instructor</option>
  <option value="a">Admin</option>
</Form.Select></Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Profil foto</Form.Label>
    <Form.Control type="file" className="mb-3" id="formBasicImages" placeholder="Images" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Notes</Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" id="formBasicBlock" label="Block" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" label="Deleted" />
  </Form.Group>

<Form.Group className="mb-3" >
    <Form.Check type="checkbox" label="Individual type" />
  </Form.Group>
</Form>
<Form style={{display:'block',width:'50%',padding:'30px'}}>

  <Form.Group className="mb-3" >
    <Form.Label>Passport Address<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport number<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport serial<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport who give<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport when give<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport file<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="file" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport file1<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="file" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Office address</Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Office bank account</Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Office bank code</Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Office inn</Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Office licence file</Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Course</Form.Label>
  <Form.Select aria-label="Default select example">
     <option value="1">Scratch</option>
  <option value="2">Web front-end</option>
  <option value="3">Backent</option>
  <option value="4">graph</option>
</Form.Select>
  </Form.Group> */}
</Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary"   onClick={this.PostUser}>
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
    

    </div>;
  }
}

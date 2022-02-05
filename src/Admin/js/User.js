import React, { Component } from 'react';
import { deleteUser, getStudents } from '../../host/config'
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Input, Button, Space, Popconfirm,} from 'antd';
import { Form , Modal } from 'react-bootstrap';
import axios from 'axios';
export default class User extends Component {
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
      const user={
        first_name:document.querySelector('#formBasicFirst').text,
      }
      console.log(user)
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
<Button onClick={this.PostUser}>testbutton</Button>
      <Modal
      fullscreen={true}
        show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex'}}><Form style={{display:'block',width:'50%',padding:'30px'}}>
  
  <Form.Group className="mb-3" controlId="formBasicFirst">
    <Form.Label>First name</Form.Label>
    <Form.Control type="email" className="mb-3" placeholder="Enter first name" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicLast">
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
    

    </div>;
  }
}

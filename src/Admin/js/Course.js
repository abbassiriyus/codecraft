import React from 'react';
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { getCourse,getGroupS,deleteGroup, deleteCourse, postCourse,} from '../../host/config';
import { Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { access_token } from '../../host/host';

export default class Course extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    show:false,
    show1:false,
    data:[],
    dataCourse:[],
  };


  handleClose = () => this.setState({show:false});
  handleShow = () => this.setState({show:true});
  handleClose1 = () => this.setState({show1:false});
  handleShow1 = () => this.setState({show1:true});

  getStudent=()=>{
    getCourse().then(res=>{this.setState({data:res.data}) 
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
    deleteCourse(key).then(res=>{alert("o`chirib tashladik")})
  }

  PostUser=()=>{
   
      
    var user={
      "short_title":document.querySelector('#formBasicFirst').value,
      "title":document.querySelector('#formBasicLast').value,
      "price":document.querySelector('#formBasicPat').value,
      "subtitle":document.querySelector('#formBasicBirth').value,
      "lessons":document.querySelector('#formBasicTel').value,
      "lesson_duration":document.querySelector('#formBasicTel1').value,
      "min_students":document.querySelector('#formBasicNote1').value,
      "max_students":document.querySelector('#formBasicNote2').value,
      // "description_file":document.querySelector('#passport_address').files,
      // "title_image":document.querySelector('#passport_number').files,
      // "cover_image":document.querySelector('#passport_serial').files,
      "deleted":document.querySelector('#passport_who_give').value,
      "notes":document.querySelector('#passport_when_give').value,
      "course_section_id": document.querySelector('#passport_file').value,
      "publicized": document.querySelector('#publicized').checked,
      "curriculum": document.querySelector('#curriculum').value,
      "required_course_id": document.querySelector('#required_course_id').value,
}


postCourse(user).then((response)=>{
console.log("Post bajarildi", response);
console.log("user info ketdi:", user);
})
.catch((error)=> {
console.log("Post error: ", error);
});
    this.handleClose()
  }
  openmodal=(id)=>{
getGroupS(id).then(res=>{
  this.setState({dataCourse:res.data})
  console.log(res.data)
})
  this.handleShow1()
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
        ...this.getColumnSearchProps('id'),
      },
      {
        title: 'short_title',
        dataIndex: 'short_title',
        sorter: (a, b) => a.course.short_title.length - b.course.short_title.length,
        sortDirections: ['descend', 'ascend'],
        ...this.getColumnSearchProps('short_title'),
      },
      {
        title: 'price',
        dataIndex: 'price',
        sorter: (a, b) => a.price - b.price,
        sortDirections: ['descend', 'ascend'],
        ...this.getColumnSearchProps('price'),
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
    return<div>
         <Button onChange={this.Byvalue} style={{marginBottom:'40px'}} variant="primary" 
       onClick={this.handleShow}>Create course</Button>
     <Table columns={columns} dataSource={this.state.data} />
     <Modal 
      fullscreen={true}
        show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new course</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex'}}><Form style={{display:'block',width:'50%',padding:'30px'}}>
  
  <Form.Group className="mb-3" >
    <Form.Label>short_title<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicFirst" placeholder="short_title" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>title<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicLast" placeholder="title" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>price</Form.Label>
    <Form.Control type="number" className="mb-3" id="formBasicPat" placeholder="price" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>subtitle<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="text" className="mb-3" id="formBasicBirth" placeholder="subtitle" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>lessons <sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="number" className="mb-3" id="formBasicTel" placeholder="lessons" />
  </Form.Group> 
   <Form.Group className="mb-3" >
    <Form.Label>lesson_duration</Form.Label>
    <Form.Control type="number" className="mb-3" id="formBasicTel1" placeholder="lesson_duration" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>min_students</Form.Label>
    <Form.Control type="number" id="formBasicNote1" className="mb-3" placeholder="min_students" />
  </Form.Group>
 <Form.Group className="mb-3" >
    <Form.Label>max_students</Form.Label>
    <Form.Control type="number" id="formBasicNote2" className="mb-3" placeholder="max_students" />
  </Form.Group>
</Form>
<Form style={{display:'block',width:'50%',padding:'30px'}}>
  <Form.Group className="mb-3" >
    <Form.Label>description_file<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="file" id="passport_address" className="mb-3" placeholder="description_file" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>title_image<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="file" id="passport_number" className="mb-3" placeholder="title_image" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>cover_image<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="file" id="passport_serial" className="mb-3" placeholder="cover_image" />
  </Form.Group>
  <Form.Group className="mb-3" >
  <Form.Label>Delete<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="number"  id="passport_who_give" className="mb-3" placeholder="deleted" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>notes<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="text" id="passport_when_give" className="mb-3" placeholder="notes" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>course section id<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="number" id="passport_file" className="mb-3" placeholder="course_section_id" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" id="publicized" className="mb-3" label="Publicized" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>curriculum<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="textarea" id="curriculum" className="mb-3" placeholder="course_section_id" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>required_course_id<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="number" id="required_course_id" className="mb-3" placeholder="course_section_id" />
  </Form.Group>
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
      </div>
  }
}

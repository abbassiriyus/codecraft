import React from 'react';
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { getGroup,getGroupS,deleteGroup,getStudent1, postGroup1, getCourse, getTimeslots} from '../../host/config';
import { Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { access_token } from '../../host/host';

export default class Group1 extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    show:false,
    show1:false,
    data:[],
    dataCourse:[],
    dataStudent:[],
    studentId:0,
    dataC:[],
    dataT:[],
    idC:0,
    idT:0
  };


  handleClose = () => this.setState({show:false});
  handleShow = () => this.setState({show:true});
  handleClose1 = () => this.setState({show1:false});
  handleShow1 = () => this.setState({show1:true});

  getStudent=()=>{
    getGroup().then(res=>{this.setState({data:res.data}) 
    console.log("ok") }).then(err=>{console.log('error')}) 
  }
  getId1=(key)=>{
this.setState({idC:key})
  }
  getId2=(key)=>{
    this.setState({idT:key})
      }
  getStudent=()=>{
    getGroup().then(res=>{this.setState({data:res.data}) 
    console.log("ok") }).then(err=>{console.log('error')}) 
  }
  getData=()=>{
    getCourse().then(res=>{this.setState({dataC:res.data}) 
    }) 
    getTimeslots().then(res=>{this.setState({dataT:res.data}) 
  }) }
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
    deleteGroup(key).then(res=>{alert("o`chirib tashladik")})
  }

  PostUser=()=>{
   
      
    var user={
      "course":this.state.idC,
      "timeslot":this.state.idT,
"start_date": document.querySelector('#date1').value,
"end_date":document.querySelector('#date2').value,
"classroom_building":document.querySelector('#school').value,
"classroom_room": document.querySelector('#room').value,
}
postGroup1(user).then((response)=>{
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

  postStudent=(id1)=>{
    this.setState({studentId:id1})
    console.log(id1)
  }
  postObject=()=>{ 
  const  user={
      "student":this.state.studentId,
      "points":this.state.dataCourse.points,
      "certificate":this.state.dataCourse.certificate,
      "discount":this.state.dataCourse.discount,
      "confirmed":this.state.dataCourse.confirmed,
      "group":this.state.dataCourse.group
  } 
postGroup1(user).then((response)=>{
    console.log("Post bajarildi", response);
    console.log("user info ketdi:", user);
    })
    .catch((error)=> {
    console.log("Post error: ", error);
    });
        this.handleClose1()
      } 

  
  openStudent=()=>{
    getStudent1().then(res=>{
 this.setState({dataStudent:res.data})
    }) 
  }
  componentDidMount(){
      this.getStudent()
      this.openStudent()
      this.getData()
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
        title: 'classroom_building',
        dataIndex: 'classroom_building',
        key: 'classroom_building',
        width: '30%',
        ...this.getColumnSearchProps('classroom_building'),
      },
      {
        title: 'classroom_room',
        dataIndex: 'classroom_room',
        key: 'classroom_room',
        width: '20%',
        ...this.getColumnSearchProps('classroom_room'),
      },
      {
        title: 'short_title',
        render: (record) => record.course.short_title,
        sorter: (a, b) => a.course.short_title.length - b.course.short_title.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'price',
        render: (record) => record.course.price,
        sorter: (a, b) => a.price - b.price,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'start_date',
        dataIndex: 'start_date',
        key: 'start_date',
        ...this.getColumnSearchProps('start_date'),
        sorter: (a, b) => a.start_date.length - b.start_date.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'end_date',
        dataIndex: 'end_date',
        key: 'end_date',
        ...this.getColumnSearchProps('end_date'),
        sorter: (a, b) => a.end_date.length - b.end_date.length,
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
      {
        title: 'Add student',
        dataIndex: '',
        key: 'id',
        render: (_, record) => <a onClick={()=>this.openmodal(record.id)}>Add</a>,
      },
    ];
    return<div>
         <Button onChange={this.Byvalue} style={{marginBottom:'40px'}} variant="primary" 
       onClick={this.handleShow}>Create Group</Button>
     <Table columns={columns} dataSource={this.state.data} />
     <Modal 
     
        show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new group</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form style={{padding:'30px'}}>
  <Form.Group className="mb-3" >
    <Form.Label>start_date<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="date" id="date1" className="mb-3" placeholder="course_section_id" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>end_date<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="date" id="date2" className="mb-3" placeholder="course_section_id" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>classroom_building<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="text" id="school" className="mb-3" placeholder="course_section_id" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>classroom_room<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="text" id="room" className="mb-3" placeholder="course_section_id" />
  </Form.Group>
  <Form.Select aria-label="Default select example">
 {this.state.dataC.map(item=>{ return <option value="1" onClick={()=>this.getId1(item.id)}>{item.short_title} {item.id}</option>})}
</Form.Select>
<Form.Select aria-label="Default select example">
 {this.state.dataT.map(item=>{ return <option value="1" onClick={()=>this.getId2(item.id)}>{item.timeslot_name} {item.id}</option>})}
</Form.Select>


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
      
      
      <Modal show={this.state.show1} onHide={this.handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal header</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex'}}>
          <Form style={{display:'block',padding:'30px'}}>
  <Form.Group className="mb-3">
  <Form.Label>Position<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
  <Form.Select aria-label="Default select example"  id="formBasicPos">
    {this.state.dataStudent.map(item=>{return <option onClick={()=>this.postStudent(item.id)} value="s">{item.first_name} {item.last_name} {item.patronymic} {item.id}</option>})}
</Form.Select></Form.Group>
  </Form>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose1}>
            Close
          </Button>
         
          <Button variant="primary" onClick={()=>this.postObject()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
      
      
      
      
      
      </div>
  }
}

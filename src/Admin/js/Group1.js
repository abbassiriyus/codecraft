import React from 'react';
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { getGroup,getGroupS,deleteGroup,getStudent1} from '../../host/config';
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
    studentId:0
  };


  handleClose = () => this.setState({show:false});
  handleShow = () => this.setState({show:true});
  handleClose1 = () => this.setState({show1:false});
  handleShow1 = () => this.setState({show1:true});

  getStudent=()=>{
    getGroup().then(res=>{this.setState({data:res.data}) 
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
    deleteGroup(key).then(res=>{alert("o`chirib tashladik")})
  }

  PostUser=()=>{
   
      
    var user={

"course":{

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
      "course_section_id": null,
      "publicized": true,
      "curriculum": " ",
      "required_course_id": null,
      "video_link": null,
},
"start_date": document.querySelector('#date1').value,
"end_date":document.querySelector('#date2').value,
"classroom_building":document.querySelector('#school').value,
"classroom_room": document.querySelector('#room').value,
"finished": "2018-11-28 08:37:35",

"timeslot": {
  
  "timeslot_name":document.querySelector('#timeslot_name').value,
    "start_time": document.querySelector('#start_time').value,
    "end_time":document.querySelector('#end_time').value,
    "duration": document.querySelector('#duration').value,
    "mon":  document.querySelector('#mon').checked,
    "tue": document.querySelector('#tue').checked,
    "wed": document.querySelector('#wed').checked,
    "thu": document.querySelector('#thu').checked,
    "fri": document.querySelector('#fri').checked,
    "sat": document.querySelector('#sat').checked,
    "sun": document.querySelector('#sun').checked,
    "school_name": "Codecraft.uz",
    "branch_name": "Main branch"
}
}
axios.post('http://62.209.129.38:8000/api/groups/', user , {
headers: {
  'Authorization': `Token ${access_token}` 
}
}).then((response)=>{
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
      //{
          // "first_name": this.state.studentId.first_name,
          // "last_name": this.state.studentId.last_name,
          // "patronymic":this.state.studentId.patronymic,
          // "position": "s",
        //   "id": this.state.studentId.id
        // },
      "points":this.state.dataCourse.points,
      "certificate":this.state.dataCourse.certificate,
      "discount":this.state.dataCourse.discount,
      "confirmed":this.state.dataCourse.confirmed,
      "group":this.state.dataCourse.group
  } 
  console.log(user)
  axios.post('http://62.209.129.38:8000/api/group-students/', user , {
    headers: {
      'Authorization': `Token ${access_token}` 
    }
    }).then((response)=>{
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
    <Form.Label>course_section_id<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="number" id="passport_file" className="mb-3" placeholder="course_section_id" />
  </Form.Group>
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
  <Form.Group className="mb-3" >
    <Form.Label>timeslot_name<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="text" id="timeslot_name" className="mb-3" placeholder="timeslot_name" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>start_time<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="time" id="start_time" className="mb-3" placeholder="start_time" />
  </Form.Group>  <Form.Group className="mb-3" >
    <Form.Label>end_time<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="time" id="end_time" className="mb-3" placeholder="end_time" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>duration<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="number" id="duration" className="mb-3" placeholder="duration" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" label="mon" id="mon" className="mb-3"  />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" label="tue" id="tue" className="mb-3"  />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" label="wed" id="wed" className="mb-3"  />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" label="thu" id="thu" className="mb-3"  />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" label="fri" id="fri" className="mb-3"  />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" label="sat" id="sat" className="mb-3"  />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" label="sun" id="sun" className="mb-3"  />
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

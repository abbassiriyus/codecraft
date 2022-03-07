import React, { Component } from 'react'
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { getTimeslots,getGroupS,deleteTimeslots, postTimeslot,} from '../../host/config';
import { Form, Modal } from 'react-bootstrap';
import axios from 'axios';
import { access_token } from '../../host/host';

export default class Timeslot extends Component {
    state = {
        searchText: '',
        searchedColumn: '',
        show:false,
        data:[],
        dataCourse:[],
      };
    
      postObject=()=>{ 
        const  user={
          "timeslot_name":document.querySelector('#timeslot_name').value,
          "start_time":document.querySelector('#start_time').value,
          "end_time":document.querySelector('#end_time').value,
          "duration":document.querySelector('#duration').value,
          "mon":document.querySelector('#mon').checked,
          "tue":document.querySelector('#tue').checked,
          "wed":document.querySelector('#wed').checked,
          "thu":document.querySelector('#thu').checked,
          "fri":document.querySelector('#fri').checked,
          "sat":document.querySelector('#sat').checked,
          "sun":document.querySelector('#sun').checked,
        } 
      postTimeslot(user).then((response)=>{
          console.log("Post bajarildi", response);
          console.log("user info ketdi:", user);
          })
          .catch((error)=> {
          console.log("Post error: ", error);
          });
              this.handleClose1()
            } 


      handleClose = () => this.setState({show:false});
      handleShow = () => this.setState({show:true});
      handleClose1 = () => this.setState({show1:false});
      handleShow1 = () => this.setState({show1:true});
     
    
      getTimeslot=()=>{
        getTimeslots().then(res=>{this.setState({data:res.data}) 
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
        deleteTimeslots(key).then(res=>{alert("o`chirib tashladik")})
      }
    
   

    
      componentDidMount(){
          this.getTimeslot()
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
              title: 'timeslot_name',
              dataIndex: 'timeslot_name',
              sorter: (a, b) => a.course.timeslot_name.length - b.course.timeslot_name.length,
              sortDirections: ['descend', 'ascend'],
              ...this.getColumnSearchProps('timeslot_name'),
            },
            {
              title: 'start_time',
              dataIndex: 'start_time',
              sorter: (a, b) => a.start_time - b.start_time,
              sortDirections: ['descend', 'ascend'],
              ...this.getColumnSearchProps('start_time'),
            },
            {
              title: 'end_time',
              dataIndex: 'end_time',
              sorter: (a, b) => a.end_time - b.end_time,
              sortDirections: ['descend', 'ascend'],
              ...this.getColumnSearchProps('end_time'),
            },
            {
              title: 'duration',
              dataIndex: 'duration',
              sorter: (a, b) => a.duration - b.duration,
              sortDirections: ['descend', 'ascend'],
              ...this.getColumnSearchProps('duration'),
            },
            {
              title: 'mon',
              dataIndex: 'mon',
              sorter: (a, b) => a.mon - b.mon,
              sortDirections: ['descend', 'ascend'],
              ...this.getColumnSearchProps('mon'),
            },
            {
              title: 'tue',
              dataIndex: 'tue',
              sorter: (a, b) => a.tue - b.tue,
              sortDirections: ['descend', 'ascend'],
              ...this.getColumnSearchProps('tue'),
            },
            {
              title: 'wed',
              dataIndex: 'wed',
              sorter: (a, b) => a.wed - b.wed,
              sortDirections: ['descend', 'ascend'],
              ...this.getColumnSearchProps('wed'),
            },
            {
              title: 'thu',
              dataIndex: 'thu',
              sorter: (a, b) => a.thu - b.thu,
              sortDirections: ['descend', 'ascend'],
              ...this.getColumnSearchProps('thu'),
            },
            {
              title: 'fri',
              dataIndex: 'fri',
              sorter: (a, b) => a.fri - b.fri,
              sortDirections: ['descend', 'ascend'],
              ...this.getColumnSearchProps('fri'),
            },
            {
              title: 'sat',
              dataIndex: 'sat',
              Boolean:'sat',
              sorter: (a, b) => a.sat - b.sat,
              sortDirections: ['descend', 'ascend'],
              ...this.getColumnSearchProps('sat'),
            },
            {
              title: 'sun',
              dataIndex: 'sun',
              sorter: (a, b) => a.sun - b.sun,
              sortDirections: ['descend', 'ascend'],
              ...this.getColumnSearchProps('sun'),
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
    return (
      <div>




<Button onChange={this.Byvalue} style={{marginBottom:'40px'}} variant="primary" 
       onClick={this.handleShow}>Create Timeslot</Button>
     <Table columns={columns} dataSource={this.state.data} />
     <Modal 
      fullscreen={true}
        show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new Timeslot</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex'}}><Form style={{display:'block',width:'50%',padding:'30px'}}>
  
  <Form.Group className="mb-3" >
    <Form.Label>timeslot_name<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="text" className="mb-3" id="timeslot_name" placeholder="short_title" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>start_time<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="time" className="mb-3" id="start_time" placeholder="title" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>end_time</Form.Label>
    <Form.Control type="time" className="mb-3" id="end_time" placeholder="price" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>duration<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="number" className="mb-3" id="duration" placeholder="subtitle" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" id="mon" className="mb-3" label="Dushanba" />
  </Form.Group> 
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" id="tue" className="mb-3" label="Seshanba" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" id="wed" className="mb-3" label="Chorshanba" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" id="thu" className="mb-3" label="Payshanba" />
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" id="fri" className="mb-3" label="Juma" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" id="sat" className="mb-3" label="Shanba" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Check type="checkbox" id="sun" className="mb-3" label="Yakshanba" />
  </Form.Group>
</Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary"   onClick={this.postObject}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      </div>
    )
  }
}

import React, { Component } from 'react';
import { deleteStudent, getStudents, postUsers } from '../../../host/config'
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Input, Button, Space, Popconfirm,} from 'antd';
import { Form , Modal } from 'react-bootstrap';
import axios from 'axios';
import { access_token } from '../../../host/host';

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
      getStudents().then(res=>{
          this.setState({data:res.data})  
       })
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
      deleteStudent(key).then(res=>{alert("o`chirib tashladik")})
    }
    PostUser=()=>{
   
      
      var user={

"parent":{

        "first_name":document.querySelector('#formBasicFirst').value,
        "last_name":document.querySelector('#formBasicLast').value,
        "patronymic":document.querySelector('#formBasicPat').value,
        "birthdate":document.querySelector('#formBasicBirth').value,
        "phone_number":document.querySelector('#formBasicTel').value,
        "extra_phone_numbers":document.querySelector('#formBasicTel1').value,
        "profile_photo":null,
        "notes":document.querySelector('#formBasicNote').value,
        "passport_address":document.querySelector('#passport_address').value,
        "passport_number":document.querySelector('#passport_number').value,
        "passport_serial":document.querySelector('#passport_serial').value,
        "passport_who_give":document.querySelector('#passport_who_give').value,
        "passport_when_give":document.querySelector('#passport_when_give').value,
        "individual_type": false,
        "passport_file": null,
        "passport_file1": null,
        "office_address": "",
        "office_bank_account": "",
        "office_bank_code": "",
        "office_inn": "",
        "office_licence_file": null
},
"student":{
  "first_name":document.querySelector('#formBasicFirstO').value,
  "last_name":document.querySelector('#formBasicLastO').value,
  "patronymic":document.querySelector('#formBasicPatO').value,
  "birthdate":document.querySelector('#formBasicBirthO').value,
  "phone_number":document.querySelector('#formBasicTelO').value,
  "extra_phone_numbers":document.querySelector('#formBasicTel1O').value,
  "profile_photo":null,
  "notes":document.querySelector('#formBasicNoteO').value,
  "passport_address":document.querySelector('#passport_addressO').value,
  "passport_number":document.querySelector('#passport_numberO').value,
  "passport_serial":document.querySelector('#passport_serialO').value,
  "passport_who_give":document.querySelector('#passport_who_giveO').value,
  "passport_when_give":document.querySelector('#passport_when_giveO').value,
  "individual_type": false,
  "passport_file": null,
  "passport_file1": null,
  "office_address": "",
  "office_bank_account": "",
  "office_bank_code": "",
  "office_inn": "",
  "office_licence_file": null
}


      }
      console.log(user)
axios.post('http://62.209.129.38:8000/api/students/', user , {
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
    Byvalue=()=>{
      document.querySelector('#formBasicImages').value=null
      document.querySelector('#formBasicNote').value=""
      document.querySelector('#formBasicPat').value=""
      document.querySelector('#formBasicTel1').value=""
      document.querySelector('#passport_file').value=null
    }



    componentDidMount(){

      this.getStudent()


    }
  
  render() {
    const columns= [
      {
        title: 'id',
        render: (record) => record.student.id,
        sorter: (a, b) => a.student.id - b.student.id,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'last_name',
        render: (record) => record.student.last_name,
        sorter: (a, b) => a.student.last_name.length - b.student.last_name.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'first_name',
        render: (record) => record.student.first_name,
        sorter: (a, b) => a.student.first_name.length - b.student.first_name.length,
        sortDirections: ['descend', 'ascend'],
      },
      {
        title: 'patronymic',
        render: (record) => record.student.patronymic,
      },
      {
        title: 'Delete',
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
        title: 'Action',
        dataIndex: '',
        key: 'id',
        render: (_, record) => <a onClick={()=>this.handleShow2()}>More</a>,
      },
    ];

  
    return <div>
       <Button onChange={this.Byvalue} style={{marginBottom:'40px'}} variant="primary" 
       onClick={this.handleShow}>Create Student</Button> 
       
       
      <Table  columns={columns} dataSource={this.state.data} />

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
      <Modal 
      fullscreen={true}
        show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Talaba malumotlari</Modal.Title>
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
 <Form.Group className="mb-3" >
    <Form.Label>Notes</Form.Label>
    <Form.Control type="email" id="formBasicNote" className="mb-3" placeholder="text" />
  </Form.Group>
 
</Form>
<Form style={{display:'block',width:'50%',padding:'30px'}}>
<Form.Group className="mb-3" >
    <Form.Label>Profil foto</Form.Label>
    <Form.Control type="file" className="mb-3" id="formBasicImages" placeholder="Images" />
  </Form.Group>
 
  <Form.Group className="mb-3" >
    <Form.Label>Passport Address<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="passport_address" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport number<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="passport_number" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport serial<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="passport_serial" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport who give<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="passport_who_give" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport when give<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="passport_when_give" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport file<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="file" id="passport_file" className="mb-3" placeholder="text" />
  </Form.Group>

</Form></Modal.Body>
<Modal.Header>
          <Modal.Title>Talaba ota onasi</Modal.Title>
        </Modal.Header>
        
        <Modal.Body style={{display:'flex'}}><Form style={{display:'block',width:'50%',padding:'30px'}}>
  
  <Form.Group className="mb-3" >
    <Form.Label>First nameO<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicFirstO" placeholder="Enter first name" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Last nameO<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicLastO" placeholder="Enter last name<" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>PatronimicO</Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicPatO" placeholder="Enter patronimic" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>BirthdateO<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="date" className="mb-3" id="formBasicBirthO" placeholder="Enter birthdate" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Telefon numberO <sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicTelO" placeholder="Enter telefon number" />
  </Form.Group> 
   <Form.Group className="mb-3" >
    <Form.Label>Extra telefon numberO</Form.Label>
    <Form.Control type="email" className="mb-3" id="formBasicTel1O" placeholder="Enter email" />
  </Form.Group>
 <Form.Group className="mb-3" >
    <Form.Label>NotesO</Form.Label>
    <Form.Control type="email" id="formBasicNoteO" className="mb-3" placeholder="text" />
  </Form.Group>
 
</Form>
<Form style={{display:'block',width:'50%',padding:'30px'}}>
<Form.Group className="mb-3" >
    <Form.Label>Profil fotoO</Form.Label>
    <Form.Control type="file" className="mb-3" id="formBasicImagesO" placeholder="Images" />
  </Form.Group>
 
  <Form.Group className="mb-3" >
    <Form.Label>Passport AddressO<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="passport_addressO" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport numberO<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="passport_numberO" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport serialO<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="passport_serialO" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport who giveO<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="passport_who_giveO" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport when giveO<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="email" id="passport_when_giveO" className="mb-3" placeholder="text" />
  </Form.Group>
  <Form.Group className="mb-3" >
    <Form.Label>Passport fileO<sup style={{color:'red',fontSize:'18px',position:'relative',top:'3px'}}>*</sup></Form.Label>
    <Form.Control type="file" id="passport_fileO" className="mb-3" placeholder="text" />
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


















      



{/* <Modal fullscreen={true} show={this.state.show1} onHide={this.handleClose1} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal header</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{display:'flex'}}><Form style={{display:'block',width:'50%',padding:'30px'}}>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Id</Form.Label>
    <Form.Control type="email"   aria-label="Disabled input example"
    readOnly className="mb-3" placeholder="1213121" />
  </Form.Group>
  
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
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>Create date</Form.Label>
    <Form.Control type="email"   aria-label="Disabled input example"
    readOnly className="mb-3" placeholder="1213121" />
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
      </Modal> */}
    

    </div>;
  }
}

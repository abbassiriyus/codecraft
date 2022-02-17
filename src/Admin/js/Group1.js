import React from 'react';
import { Table, Input, Button, Space, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { getGroup } from '../../host/config';


export default class Group1 extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    data:[]
  };
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
  componentDidMount(){
      this.getStudent()
  }

  render() {
    const columns = [
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
        render: (_, record) => <a onClick={()=>this.handleShow1()}>Add</a>,
      },
    ];
    return <Table columns={columns} dataSource={this.state.data} />;
  }
}

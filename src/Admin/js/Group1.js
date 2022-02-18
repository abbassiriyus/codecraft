import React from 'react';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { getStudents } from '../../host/config';


export default class Group1 extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
    data:[]
  };
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
  componentDidMount(){
      this.getStudent()
  }

  render() {
    const columns = [
      {
        title: 'username',
        dataIndex: 'username',
        key: 'username',
        width: '30%',
        ...this.getColumnSearchProps('username'),
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
    ];
    return <Table columns={columns} dataSource={this.state.data} />;
  }
}

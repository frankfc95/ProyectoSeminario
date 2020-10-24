import React from 'react'
import axios from 'axios';
import { Table, Input, Button } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined} from '@ant-design/icons';


var data=[];
export default class ListarAlumnos extends React.Component {
 constructor(props) {
    super(props);

    this.state = {
      datagrid:[],
      tables:[],
        searchText: '',
    searchedColumn: '',
    selectedRowKeys:[],
    longData:null
    };

    this.llenargrid=this.llenargrid.bind(this);
      this.onSelectChange=this.onSelectChange.bind(this);
 
  }






llenargrid()
{

  try{

    

  axios.get('http://myinfancia.australiaeast.cloudapp.azure.com:1012/alumnos')
      .then(res => {
        this.setState({
           datagrid: res.data,
           longData: res.data.length
         });

//console.log(this.state.datagrid);

const {longData ,datagrid}=this.state;
data=[];

for (var i = 0; i < longData; i++) {

data.push(
{
  key: datagrid[i].id,
  id: datagrid[i].id,
  nombre: datagrid[i].nombre,
  apellido: datagrid[i].apellido,
  telefono: datagrid[i].telefono,
  dpi: datagrid[i].dpi,
});

}
console.log(data);

//console.log(datagrid);

      });
}
catch(err)
{
  console.error(err);
}
         
}


 onSelectChange(selectedRowKeys) {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };


componentDidMount() {
  try{

    for (var i = 0; i < 2; i++) {
this.llenargrid();
    }


    
  }catch(err){
    console.error('#ERROR Error en willMount de la pagina de formularios: ' + err);
  }
}


 getColumnSearchProps = dataIndex => ({




    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div className="container" style={{ padding: 20 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
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





		render(){


const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };





    const columns = [
       {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
        width: '10%',
        ...this.getColumnSearchProps('id'),
      },
      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
        width: '35%',
        ...this.getColumnSearchProps('nombre'),
      },
      {
        title: 'Apellido',
        dataIndex: 'apellido',
        key: 'apellido',
        width: '35%',
        ...this.getColumnSearchProps('apellido'),
      },
      {
        title: 'DPI',
        dataIndex: 'dpi',
        key: 'dpi',
        width: '15%',
   
      },
           {
        title: 'Telefono',
        dataIndex: 'telefono',
        key: 'telefono',
        width: '5%',
   
      },
          
          
   
    ];



			return( 
				<div className="container">
<Table rowSelection={rowSelection}  columns={columns} dataSource={data} />
</div>
			
					)
		}

}

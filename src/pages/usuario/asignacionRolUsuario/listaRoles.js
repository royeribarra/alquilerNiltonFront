import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Table,
  Button,
  Avatar,
  Typography,
} from "antd";
import { RolService } from "../../../servicios/rolService";

const { Title } = Typography;

const data1 = [
  {
    nombres: "royer",
    id: 1
  },
  {
    nombres: "royer1",
    id: 2
  },
  {
    nombres: "royer2",
    id: 3
  },
  {
    nombres: "royer3",
    id: 4
  },
  {
    nombres: "royer4",
    id: 5
  },
  {
    nombres: "royer5",
    id: 6
  },
  {
    nombres: "royer6",
    id: 7
  },
  {
    nombres: "royer7",
    id: 8
  },
  {
    nombres: "royer8",
    id: 9
  },
  {
    nombres: "royer9",
    id: 10
  },
  {
    nombres: "royer10",
    id: 11
  },
  {
    nombres: "royer11",
    id: 12
  },
  {
    nombres: "royer12",
    id: 13
  },
  {
    nombres: "royer13",
    id: 14
  },

];

const columns = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Nombre",
    dataIndex: "nombre",
    key: "nombre",
  },

  {
    title: "Descripción",
    key: "descripcion",
    dataIndex: "descripcion",
  },
  {
    title: "Estado",
    key: "estado",
    dataIndex: "estado",
  },
];

function ListaRoles()
{
  const rolService = new RolService('roles');
  const [data, setData] = useState([]);
  const [selectedRowsKey, setSelectedRowKeys] = useState([]);

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const rowSelection = {
    selectedRowKeys: selectedRowsKey,
    onChange: (selectedRowKeys, selectedRows) => {
      const newArr = [selectedRowKeys[selectedRowKeys.length-1]]
      setSelectedRowKeys(newArr);

      //console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  

  const fetchAll = (paginationTab = pagination) => {
    setSelectedRowKeys([]);
    const searchObj = {
      page: paginationTab? paginationTab.current : 1
    }

    rolService.getAll(searchObj).then(({data})=> {
      setData(data.data);
      setPagination({
        ...paginationTab,
        current: data.current,
        total: data.total,
      });
    }).catch(error=>{
      console.log(error);
    });
  };

  useEffect(()=> {
    fetchAll();
  }, []);

  return(
    <div>
      <Card
        bordered={false}
        className="criclebox tablespace mb-24 card-lista-roles"
        style={{
          margin: "10px"
        }}
      >
        <div className="table-responsive">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={data}
            pagination={pagination}
            className="ant-border-space"
            onChange={fetchAll}
            scroll={{
              y: 200,
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default ListaRoles;
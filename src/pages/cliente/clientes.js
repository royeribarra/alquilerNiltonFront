import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Table,
  Button,
  Avatar,
  Typography,
} from "antd";
import Buscar from "./filtro/buscar";
import FiltroCliente from "./filtro/filtroCliente";

const { Title } = Typography;

const columns = [
  {
    title: "Nombres",
    dataIndex: "nombres",
    key: "nombres",
    width: "32%",
  },
  {
    title: "Doc. identidad",
    dataIndex: "documento",
    key: "documento",
  },

  {
    title: "Teléfono",
    key: "telefono",
    dataIndex: "telefono",
  },
  {
    title: "Unido el",
    key: "created_at",
    dataIndex: "created_at",
  },
  {
    title: "Estado",
    key: "estado",
    dataIndex: "estado",
  },
];

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

function Clientes()
{
  const[data, setData] = useState([]);
  const [selectedRowsArray, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  const rowSelection = {
    selectedRowKeys: selectedRowsArray,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const fetchAll = (paginationTab = pagination, tipo = null) => {
    console.log(paginationTab)
    console.log(tipo)
    if(tipo)
    {

    }

    setPagination({
      ...paginationTab,
      current: paginationTab ? paginationTab.current : pagination.current,
      total: paginationTab ? paginationTab.total : pagination.total,
    });
  };

  return(
    <div>
      <FiltroCliente fetchAll={fetchAll} />
      <Buscar />
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
      >
        <div className="table-responsive">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data1}
            pagination={pagination}
            className="ant-border-space"
            onChange={fetchAll}
          />
        </div>
      </Card>
    </div>
  );
}

export default Clientes;
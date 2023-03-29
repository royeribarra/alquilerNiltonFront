import React, { useEffect, useState } from "react";
import {
  Card,
  Table,
  Tag,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { UsuarioService } from "../../../servicios/usuarioService";
import { fillTableUsers } from "../../../redux/actions/usuarioActions";

const columns = [
  {
    title: "nroDoc",
    dataIndex: "dni",
    key: "dni"
  },
  {
    title: "Código",
    dataIndex: "codigoUsuario",
    key: "codigoUsuario",
  },
  {
    title: "Nombres",
    key: "nombres",
    dataIndex: "nombres",
  },
  {
    title: "Apellidos",
    key: "apellidos",
    dataIndex: "apellidos",
  },
  {
    title: "Estado",
    key: "isActive",
    dataIndex: "isActive",
    render: (isActive) => {
      console.log(isActive)
      return(
        <Tag color={isActive ? "#87d068" : "#f50"}>
          {isActive ? "Activo" : "Inactivo"}
        </Tag>
      );
    }
  },
];

function ListaUsuarios()
{
  const usuarioService = new UsuarioService();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { usersTable } = state.usuario;
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

  useEffect(()=> {
    usuarioService.getUsersTable().then(({data})=> {
      console.log(data)
      dispatch(fillTableUsers(data));
    });
  }, []);

  return(
    <div>
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
      >
        <div className="table-responsive">
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={usersTable}
            pagination={pagination}
            className="ant-border-space"
            onChange={fetchAll}
            scroll={{
              y: 350,
            }}
          />
        </div>
      </Card>
    </div>
  );
}

export default ListaUsuarios;
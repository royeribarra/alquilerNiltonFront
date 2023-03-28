import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
} from "antd";
import LibretaDireccion from "./libretaDireccion";
import { DireccionClienteService } from "../../../servicios/direccionClienteService";
import { useDispatch, useSelector } from "react-redux";
import { selectDireccionCliente } from "../../../redux/actions/clienteActions";
import ModalEliminarDireccion from "./eliminarDireccion";

const pencil = [
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
      className="fill-gray-7"
    ></path>
    <path
      d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
      className="fill-gray-7"
    ></path>
  </svg>,
];

const deletebtn = [
  <svg
    width="16"
    height="16"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    key={0}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 2C8.62123 2 8.27497 2.214 8.10557 2.55279L7.38197 4H4C3.44772 4 3 4.44772 3 5C3 5.55228 3.44772 6 4 6L4 16C4 17.1046 4.89543 18 6 18H14C15.1046 18 16 17.1046 16 16V6C16.5523 6 17 5.55228 17 5C17 4.44772 16.5523 4 16 4H12.618L11.8944 2.55279C11.725 2.214 11.3788 2 11 2H9ZM7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V8ZM12 7C11.4477 7 11 7.44772 11 8V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V8C13 7.44772 12.5523 7 12 7Z"
      fill="#111827"
      className="fill-danger"
    ></path>
  </svg>,
];

function ListaLibretaDirecciones()
{
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { clienteSelected, direccionClienteSelected } = state.cliente;

  const direccionClienteService = new DireccionClienteService();
  const [showModalLibretaDireccion, setShowModalLibretaDireccion] = useState(false);
  const [showEliminarDireccion, setShowEliminarDireccion] = useState(false);
  const [data, setData] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const openModalForm = () => {
    setShowModalLibretaDireccion(true);
  };

  const openModalDelete = () => {
    setShowEliminarDireccion(true);
  };

  const editRecord = (id, row) => {
    dispatch(selectDireccionCliente(row));
    openModalForm();
  };

  const deleteRecord = (id, row) => {
    dispatch(selectDireccionCliente(row));
    openModalDelete();
  };

  const fetchAll = (paginationTab = pagination) => {
    setShowModalLibretaDireccion(false);
    setShowEliminarDireccion(false);
    direccionClienteService.getAllRows(clienteSelected.id).then(({ data }) => {
      setPagination({
        ...paginationTab,
        current: data.current,
        total: data.total,
      });
      setData(data.data);
    });
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const columns = [
    {
      title: "NOMBRE COMPLETO",
      dataIndex: "cliente",
      key: "nombre completo",
      render: (cliente) => {
        const { nombres, apellidos } = cliente;
        return(
          <>{nombres + ' ' + apellidos}</>
        );
      }
    },
    {
      title: "TELÉFONO",
      dataIndex: "cliente",
      key: "telefono",
      render: (cliente) => {
        const { telefono } = cliente;
        return(
          <>{telefono}</>
        );
      }
    },
  
    {
      title: "DIRECCIÓN",
      key: "direccion1 ",
      dataIndex: "direccion1",
    },
    {
      title: "EDITAR",
      key: "editar",
      dataIndex: "id",
      render: (id, row) => {
        return (
          <Button type="link" className="darkbtn" onClick={() => editRecord(id, row)}>
            {pencil} Editar
          </Button>
        );
      },
    },
    {
      title: "ELIMINAR",
      key: "eliminar",
      dataIndex: "id",
      render: (id, row) => {
        return (
          <Button type="link" danger onClick={() => deleteRecord(id, row)}>
            {deletebtn} Eliminar
          </Button>
        );
      },
    },
  ];

  return(
    <div>
      <Button className="crear-direccion-cliente" onClick={openModalForm}>Agregar una dirección</Button>
      <Table
        columns={columns}
        dataSource={data}
        pagination={pagination}
        className="ant-border-space"
      />
      <LibretaDireccion 
        status={showModalLibretaDireccion}
        handleClose={fetchAll}
      />
      <ModalEliminarDireccion 
        status={showEliminarDireccion}
        handleClose={fetchAll}
      />
    </div>
  );
}

export default ListaLibretaDirecciones;
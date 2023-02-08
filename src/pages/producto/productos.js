import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Table,
  Button,
  Avatar,
  Typography,
  Form,
} from "antd";
import Buscar from "./buscar";
import ModalEliminarProducto from "./eliminar/modalEliminarProducto";
import { ProductoService } from "../../servicios/productoService";

const columns = [
  {
    title: "AUTHOR",
    dataIndex: "name",
    key: "name",
    width: "32%",
  },
  {
    title: "FUNCTION",
    dataIndex: "function",
    key: "function",
  },

  {
    title: "STATUS",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "EMPLOYED",
    key: "employed",
    dataIndex: "employed",
  },
];

function Productos()
{
  const productoService = new ProductoService("wiqli/productos");
  const [rows, setRows] = useState([]);
  const [activeRow, setActiveRow] = useState({});
  const [showDelModal, setShowDelModal] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  const fetchAll = (paginationTab = pagination) => {
   
    const values = form.getFieldsValue();
    const searchObj = {
      ...values,
      page: paginationTab? paginationTab.current : 1
    }

    productoService.getAll(searchObj).then(({ data }) => {
      setPagination({
        ...paginationTab,
        current: paginationTab.current,
        total: data.total,
      });
      setRows(data.data);
    });
  };

  return(
    <div>
      <Buscar />
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title="Tabla de productos"
        extra={
          <>
            <NavLink to="/crear-producto">
              <Button>Crear producto</Button>
            </NavLink>
          </>
        }
      >
        <div className="table-responsive">
          <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            className="ant-border-space"
          />
          <ModalEliminarProducto
            status={showDelModal}
            handleClose={setShowDelModal}
            handleRefreshTable={fetchAll}
            activeRow={activeRow}
          />
        </div>
      </Card>
    </div>
  );
}

export default Productos;
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
import EliminarProducto from "./eliminarProducto";
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

const data1 = [
  {
    key: "1",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src=""
          ></Avatar>
          <div className="avatar-info">
            <p>michael@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Organization</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button type="primary" className="tag-primary">
          ONLINE
        </Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/04/18</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  },

  {
    key: "2",
    name: (
      <>
        <Avatar.Group>
          <Avatar
            className="shape-avatar"
            shape="square"
            size={40}
            src=""
          ></Avatar>
          <div className="avatar-info">
            <p>alexa@mail.com</p>
          </div>
        </Avatar.Group>{" "}
      </>
    ),
    function: (
      <>
        <div className="author-info">
          <p>Developer</p>
        </div>
      </>
    ),

    status: (
      <>
        <Button className="tag-badge">ONLINE</Button>
      </>
    ),
    employed: (
      <>
        <div className="ant-employed">
          <span>23/12/20</span>
          <a href="#pablo">Edit</a>
        </div>
      </>
    ),
  }
];


function Productos()
{
  const productoService = new ProductoService("wiqli/productos");
  const [rows, setRows] = useState([]);
  const [activeRow, setActiveRow] = useState({});
  const [showDelModal, setShowDelModal] = useState(false);
  const[data, setData] = useState([]);
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
            <NavLink to="/crear-cliente">
              <Button>Crear producto</Button>
            </NavLink>
          </>
        }
      >
        <div className="table-responsive">
          <Table
            columns={columns}
            dataSource={data1}
            pagination={false}
            className="ant-border-space"
          />
          <EliminarProducto
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
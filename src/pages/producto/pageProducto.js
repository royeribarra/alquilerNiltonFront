import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Table,
  Row,
  Col,
  List,
  Typography,
  Form,
} from "antd";
import ModalEliminarProducto from "./eliminar/modalEliminarProducto";
import { ProductoService } from "../../servicios/productoService";
import AccionesProducto from "./accionesProducto";

const columns = [
  {
    title: "Status",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Stock",
    dataIndex: "function",
    key: "function",
  },
  {
    title: "Codigo",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Prenda",
    key: "employed",
    dataIndex: "employed",
  },
  {
    title: "Tamaño",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Tela",
    key: "employed",
    dataIndex: "employed",
  },
  {
    title: "Aroma",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Color",
    key: "employed",
    dataIndex: "employed",
  },
  {
    title: "Marca",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Ocasión",
    key: "employed",
    dataIndex: "employed",
  },
  {
    title: "Modelo tela",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Modelo prenda",
    key: "employed",
    dataIndex: "employed",
  },
];

function PageProducto()
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
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
      >
        <div>
          <AccionesProducto />
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} md={4}>
            <List
              size="small"
              header={<div>Lista de categorías</div>}
              footer={<div>Footer</div>}
              bordered
              dataSource={[
                'Camisa',
                'Chaleco Solo',
                'Chaleco y corbatón',
                'Corbata',
                'Corbaton',
                'Falda',
                'Pantalón',
                'Saco',
                'Terno',
                'Venta',
                'Zapato',
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            </Col>
            <Col className="gutter-row" xs={24} md={20}>
              <Card title="Datos de la prenda">
                <Table
                  columns={columns}
                  dataSource={data}
                  pagination={false}
                  className="ant-border-space"
                  scroll={{
                    x: 1200,
                    y: 500
                  }}
                />
              </Card>
            </Col>
          </Row>
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

export default PageProducto;
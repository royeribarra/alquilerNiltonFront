import React, { useState } from "react";
import {
  InputNumber,
  Form,
  Col,
  Input,
  Select,
  DatePicker,
  Card,
  Table,
  Button
} from "antd";

const { Option } = Select;

const SearchInput = ({determinarProceso, placeholder}) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  const handleSearch = (newValue) => {
    if (newValue) {
      fetch(newValue, setData);
    } else {
      setData([]);
    }
  };

  const handleChange = (newValue, data) => {
    setValue(newValue);
    determinarProceso(newValue, data);
  };

  const options = data.map((d) => <Option key={d.id} value={d.id} precio={d.precio_unitario}>{d.nombre}</Option>);
  return (
    <Select
      className="selector-producto"
      showSearch
      value={value}
      placeholder={placeholder}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
    >
      {options}
    </Select>
  );
};

const columns = [
  {
    title: "CODE",
    dataIndex: "nombres",
    key: "name",
  },
  {
    title: "Detalle producto",
    dataIndex: "function",
    key: "function",
  },
  {
    title: "Unid. med",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Cant.",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Prec. unit",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Total",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "Descuento",
    key: "status",
    dataIndex: "status",
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

function DetalleVenta()
{
  const [idProducto, setIdProducto] = useState(0);
  const [data, setData] = useState([]);
  const [formProducto] = Form.useForm();
  const [existeProducto, setExisteProducto] = useState(true);

  const obtenerProducto = (e, data) => {
    setIdProducto(data.key);
    if(data.children !== "Otro producto"){
      formProducto.setFieldsValue({
        precio_unitario: data.precio
      });
      setExisteProducto(true);
    }else if(data.children === "Otro producto"){
      setExisteProducto(false);
    }
  }

  const onFinish = () => {

  };


  
  return(
    <Card 
      title="Detalle venta" 
      className="card-lista-productos"
      style={{ height: "432px"}}
    >
      <Table
        columns={columns}
        dataSource={data1}
        pagination={false}
        className="ant-border-space"
        scroll={{
          x: 400,
          y: 300
        }}
      />
    </Card>
  );
}

export default DetalleVenta;
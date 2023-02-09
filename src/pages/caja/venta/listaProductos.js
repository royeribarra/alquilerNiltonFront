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
    title: "PRODUCTO",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "CODIGO",
    dataIndex: "function",
    key: "function",
  },
  {
    title: "TIPO",
    key: "status",
    dataIndex: "status",
  },
  {
    title: "AGREGAR",
    key: "status",
    dataIndex: "status",
  },
];

function ListaProductos()
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
    <Card title="Lista productos" className="card-lista-productos">
      <SearchInput
        placeholder="Buscar producto..."
        determinarProceso={obtenerProducto}
      />
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        className="ant-border-space"
        scroll={{
          x: 400
        }}
      />
    </Card>
  );
}

export default ListaProductos;
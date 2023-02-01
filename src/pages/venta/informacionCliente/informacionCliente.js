import React, { useState } from "react";
import {
  InputNumber,
  Form,
  Col,
  Input,
  Select,
  DatePicker,
  Card,
  Row,
  Button
} from "antd";
import { NavLink } from "react-router-dom";
import "./informacionCliente.css";

const { Option } = Select;

const SearchInput = ({determinarProceso, placeholder, style}) => {
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
      className="selectLanding-ant"
      showSearch
      value={value}
      placeholder={placeholder}
      style={style}
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

function InformacionCliente()
{
  const [idProducto, setIdProducto] = useState(0);
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
    <Form
      layout="vertical"
      className="row-col"
      onFinish={onFinish}
      initialValues={{
        clienteGrupoId: "1",
        profesionId: "1",
        credito: "1.00",
        tipoDocumento: "1"
      }}
    >
      <Card 
        title="Información cliente"
        extra={
          <>
            <NavLink to="/crear-cliente">
              <Button>Crear cliente</Button>
            </NavLink>
          </>
        }
      >
        <div className="body-card-generales">
          <Row 
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col className="gutter-row" xs={24} md={12} >
              <Form.Item
                name="dni"
                rules={[
                  {
                    required: true,
                    message: "Ingrese los nombres del cliente.",
                  },
                ]}
              >
                <Input placeholder="dni: 33233333" maxLength={8} minLength={8} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12} >
              <Form.Item
                name="clienteId"
                rules={[
                  {
                    required: true,
                    message: "Ingrese los apellidos del cliente.",
                  },
                ]}
              >
                <SearchInput
                  placeholder="Escribe el nombre del cliente"
                  determinarProceso={obtenerProducto}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12} >
              <div>
                <p>Número de visita</p>
                <p>0</p>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} md={12} >
              <div>
                <p>Estrellas</p>
                <p>Cliente normal</p>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} md={12} >
              <Form.Item
                label="Fecha entrega"
                name="fechaEntrega"
              >
                <DatePicker className="cliente-fecha-entrega" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12} >
              <Form.Item
                label="Fecha devolución"
                name="fechaDevolucion"
              >
                <DatePicker className="cliente-fecha-devolucion" />
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Card>
    </Form>
  );
}

export default InformacionCliente;
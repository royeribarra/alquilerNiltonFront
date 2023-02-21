import React, { useState } from "react";
import {
  Rate,
  Form,
  Col,
  Input,
  Select,
  DatePicker,
  Card,
  Row,
  Button,
  InputNumber
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
      className="buscar-cliente"
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

  const obtenerCliente = (e, data) => {
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
    <div>
      <Form
        className="form-info-cliente"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          clienteGrupoId: "1",
          profesionId: "1",
          credito: "1.00",
          estrellas: 4,
          cantidadVisitas: 1
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
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} md={12}>
              <Form.Item
                name="dni"
                rules={[
                  {
                    required: true,
                    message: "Ingrese los nombres del cliente.",
                  },
                ]}
              >
                <Input className="dni-info-cliente" placeholder="dni: 33233333" maxLength={8} minLength={8} />
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
                  placeholder="Buscar cliente..."
                  determinarProceso={obtenerCliente}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12} >
              <Form.Item name="cantidadVisitas" label="Número de visitas">
                <InputNumber className="cantidad-visitas" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12} >
              <Form.Item name="estrellas" label="Cliente normal">
                <Rate />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12} >
              <Form.Item
                label="Fecha entrega"
                name="fechaEntrega"
              >
                <DatePicker className="cliente-fecha-entrega" placeholder="Fecha de entrega" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12} >
              <Form.Item
                label="Fecha devolución"
                name="fechaDevolucion"
              >
                <DatePicker className="cliente-fecha-devolucion" placeholder="Fecha devolución" />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </div>
    
  );
}

export default InformacionCliente;
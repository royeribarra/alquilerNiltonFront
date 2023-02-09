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

const { Option } = Select;

function DetalleProducto()
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
    <Form layout="vertical">
    <Card title="Detalle producto" className="card-detalle-producto">
      
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row item-form-detalle" xs={24} md={24}>
            <Form.Item
              label="Descripción extra"
              name="descripcionExtra"
            >
              <Input className="form-control-detalle" />
            </Form.Item>
          </Col>
          <Col className="gutter-row item-form-detalle" xs={24} md={8}>
            <Form.Item
              label="Marca"
              name="marca"
            >
              <Input className="form-control-detalle" placeholder="Ejm: Lopez Clemente" />
            </Form.Item>
          </Col>
          <Col className="gutter-row item-form-detalle" xs={24} md={8}>
            <Form.Item
              label="Tela"
              name="tela"
            >
              <Input className="form-control-detalle" placeholder="Email" />
            </Form.Item>
          </Col>
          <Col className="gutter-row item-form-detalle" xs={24} md={8}>
            <Form.Item
              label="Tamaño"
              name="tamano"
            >
              <InputNumber className="input-numerico" placeholder="Ejm: 934448755" minLength={9} maxLength={9} />
            </Form.Item>
          </Col>
          <Col className="gutter-row item-form-detalle" xs={24} md={8}>
            <Form.Item
              label="Tonalidad"
              name="montoPagado"
            >
              <Input className="form-control-detalle" placeholder="Ejm: Elenco Santísima" />
            </Form.Item>
          </Col>
          <Col className="gutter-row item-form-detalle" xs={24} md={8}>
            <Form.Item
              label="Modelo {tela}"
              name="tipoPago"
            >
              <InputNumber
                prefix="S/ "
                className="input-numerico"
                stringMode
                step="0.01"
              />
            </Form.Item>
          </Col>
          <Col className="gutter-row item-form-detalle" xs={24} md={8}>
            <Form.Item
              label="Color"
              name="tipoPago"
            >
              <Input className="form-control-detalle" />
            </Form.Item>
          </Col>
          <Col className="gutter-row item-form-detalle" xs={24} md={12}>
            <Form.Item
              label="Ocasión"
              name="tipoPago"
            >
              <Input className="form-control-detalle" />
            </Form.Item>
          </Col>
          <Col className="gutter-row item-form-detalle" xs={24} md={12}>
            <Form.Item
              label="Aroma"
              name="tipoPago"
            >
              <Input className="form-control-detalle" />
            </Form.Item>
          </Col>
        </Row>
      
    </Card>
    </Form>
  );
}

export default DetalleProducto;
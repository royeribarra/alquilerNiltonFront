import React, { useState } from "react";
import {
  InputNumber,
  Form,
  Col,
  Input,
  DatePicker,
  Card,
  Row,
  Select,
  Radio
} from "antd";
import "./informacionComprobante.css";

function InformacionComprobante()
{
  const onFinish = () => {

  };
  
  return(
    <Form
      layout="vertical"
      className="form-info-comprobante"
      onFinish={onFinish}
      initialValues={{
        clienteGrupoId: "1",
        montoPagado: "1",
        credito: "1.00",
        tipoDocumento: "1",
        moneda: "1",
      }}
    >
      <Card type="inner" className="card-informacion-comprobante" title="Información comprobante">
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row item-form-comprobante" xs={24} md={12}>
              <Form.Item
                name="fecha"
                rules={[
                  {
                    required: true,
                    message: "Ingrese los nombres del cliente.",
                  },
                ]}
              >
                <DatePicker />
              </Form.Item>
            </Col>
            <Col className="gutter-row item-form-comprobante" xs={24} md={12}>
              <Form.Item
                name="moneda"
                rules={[
                  {
                    required: true,
                    message: "Ingrese los apellidos del cliente.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="1">NUEVO SOL</Select.Option>
                  <Select.Option value="2">DOLAR</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row item-form-comprobante" xs={24} md={24}>
              <Form.Item
                name="tipoDocumento"
              >
                <Select>
                  <Select.Option value="1">NOTA</Select.Option>
                  <Select.Option value="2">BOLETA</Select.Option>
                  <Select.Option value="2">FACTURA</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row item-form-comprobante" xs={24} md={12}>
              <Form.Item
                name="estado"
              >
                <Input className="form-control-estado" placeholder="Ejm: Pagado" />
              </Form.Item>
            </Col>
            <Col className="gutter-row item-form-comprobante" xs={24} md={12}>
              <Form.Item
                name="montoPagado"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el nombre de la empresa.",
                  },
                ]}
              >
                <InputNumber
                  prefix="S/ "
                  className="input-numerico"
                  stringMode
                  step="0.01"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12}>
              <Form.Item name="tipoPago">
                <Radio.Group className="radio-tipoPago">
                  <Radio value="1">Efectivo</Radio>
                  <Radio value="2">Tarjeta</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Card>
    </Form>
  );
}

export default InformacionComprobante;
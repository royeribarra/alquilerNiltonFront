import React, { useState } from "react";
import {
  InputNumber,
  Form,
  Col,
  Input,
  DatePicker,
  Card,
  Row
} from "antd";
import "./informacionComprobante.css";

function InformacionComprobante()
{
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
      <Card type="inner" className="card-informacion-comprobante" title="Información comprobante">
        <div className="body-card-generales">
          <Row 
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
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
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                name="moneda"
                rules={[
                  {
                    required: true,
                    message: "Ingrese los apellidos del cliente.",
                  },
                ]}
              >
                <Input placeholder="Ejm: Lopez Clemente" />
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                name="Nota"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el email.",
                  },
                  {
                    type: 'email',
                    message: 'No es un email válido.',
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                name="estado"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el teléfono.",
                  },
                ]}
              >
                <InputNumber className="input-numerico" placeholder="Ejm: 934448755" minLength={9} maxLength={9} />
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                name="montoPagado"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el nombre de la empresa.",
                  },
                ]}
              >
                <Input placeholder="Ejm: Elenco Santísima" />
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
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
          </Row>
        </div>
      </Card>
    </Form>
  );
}

export default InformacionComprobante;
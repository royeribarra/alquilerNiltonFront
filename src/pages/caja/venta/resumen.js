import React, { useState } from "react";
import {
  InputNumber,
  Form,
  Col,
  Row,
  Select,
  DatePicker,
  Card,
  Table,
  Button
} from "antd";


function ResumenVenta()
{
  
  return(
    <Card 
      title="Resumen" 
      className="card-lista-productos"
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32}}>
        <Col className="gutter-row" xs={24} md={6}>
          <Card title="Total items">
            <InputNumber />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} md={6}>
          <Card title="A cuenta">
            <InputNumber />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} md={6}>
          <Card title="Saldo">
            <InputNumber />
          </Card>
        </Col>
        <Col className="gutter-row" xs={24} md={6}>
          <Card title="Garantía">
            <InputNumber />
          </Card>
        </Col>
      </Row>
    </Card>
  );
}

export default ResumenVenta;
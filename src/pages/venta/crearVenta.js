import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Button,
  Form,
  Input,
  Select,
  InputNumber,
  Row,
  Col
} from "antd";
import "./crearVenta.css";
import InformacionCliente from "./informacionCliente/informacionCliente";
import ListaProductos from "./productos/listaProductos";
import DetalleProducto from "./productos/detalleProducto";
import InformacionComprobante from "./informacionComprobante/informacionComprobante";

function CrearVenta()
{
  const onFinish = (values) => {
    console.log(values);
  };

  return(
    <div>
      <div>
        <Row>
          <Col span={15}>
            <InformacionCliente />
          </Col>
          <Col span={9}>
            <InformacionComprobante />
          </Col>
        </Row>
      </div>
      <Row>
        <Col span={15}>
          <ListaProductos />
        </Col>
        <Col span={9}>
          <DetalleProducto />
        </Col>
      </Row>
    </div>
  );
}

export default CrearVenta;
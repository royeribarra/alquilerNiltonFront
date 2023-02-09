import React from "react";

import {
  Modal,
  Tabs,
  Select,
  Input,
  Card,
  InputNumber,
  Col,
  Row,
  Form,
  Button
} from "antd";
import { NavLink } from "react-router-dom";
import InformacionCliente from "./informacionCliente";
import InformacionComprobante from "./informacionComprobante";
import ListaProductos from "./listaProductos";
import DetalleProducto from "./detalleProducto";

const {TabPane} = Tabs;

function VentaForm({status, handleClose, activeRows = [], usuarioId})
{
  console.log(usuarioId)
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  const onFinish = (values) => {
    console.log(values)
  };
  
  return(
    <Modal 
      title="Nueva Venta" 
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
      footer={null}
      width="95%"
    >
      <Row>
        <Col span={15}>
          <InformacionCliente />
        </Col>
        <Col span={9}>
          <InformacionComprobante />
        </Col>
      </Row>
      <Row>
        <Col span={15}>
          <ListaProductos />
        </Col>
        <Col span={9}>
          <DetalleProducto />
        </Col>
      </Row>
    </Modal>
  );
}

export default VentaForm;
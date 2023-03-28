import React, { useState } from "react";

import {
  Modal,
  Tabs,
  Select,
  Table,
  Card,
  Checkbox,
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
import DetalleVenta from "./detalleVenta";
import ResumenVenta from "./resumen";
import ModalConfirmarVenta from "./modalConfirmarVenta";

const {TabPane} = Tabs;

function Requisitos({status, handleClose})
{
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  const selectRequisito = (e) => {
    console.log(e.target.value)
  };

  return(
    <Modal 
      title="Requerimientos" 
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
      footer={null}
      width="95%"
    >
      <Table
        pagination={false}
        columns={[
          {
            title: 'Requerimiento',
            dataIndex: 'requerimiento',
            key: 'requerimiento',
          },
          {
            title: 'Petición',
            dataIndex: 'peticion',
            key: 'peticion',
          },
          {
            title: 'Dejado',
            dataIndex: 'dejado',
            key: 'dejado',
          },
          {
            title: 'Notas',
            dataIndex: 'notas',
            key: 'notas',
          },
          {
            title: 'Afectación',
            dataIndex: 'afectacion',
            key: 'afectacion',
          },
          {
            title: 'Seleccionar',
            dataIndex: 'key',
            key: 'key',
            render: (key) => {
              return (
                <Col span={8}>
                  <Checkbox
                    value={key}
                    onChange={selectRequisito}
                  />
                </Col>
              );
            }
          },

        ]}
        dataSource={[
          {
            key: '1',
            requerimiento: 'Licencia de conducir',
            peticion: 0.00,
            dejado: '0.00',
            notas: '',
            afectacion: 'Texto descriptivo'
          },
          {
            key: '2',
            requerimiento: 'Garantía de alquiler',
            peticion: 0.00,
            dejado: '0.00',
            notas: '',
            afectacion: 'Texto descriptivo'
          },
          {
            key: '3',
            requerimiento: 'DNI',
            peticion: 1.00,
            dejado: '0.00',
            notas: '',
            afectacion: 'Texto descriptivo'
          },
          {
            key: '4',
            requerimiento: 'Recibo de luz o agua',
            peticion: 1.00,
            dejado: '0.00',
            notas: '',
            afectacion: 'Texto descriptivo'
          },
          {
            key: '5',
            requerimiento: 'Carné de extranjería',
            peticion: 0.00,
            dejado: '0.00',
            notas: '',
            afectacion: 'Texto descriptivo'
          },
        ]}
      />
    </Modal>
  );
}

function VentaForm({status, handleClose, activeRows = [], usuarioId})
{
  const [showModalRequisitos, setShowModalRequisitos] = useState(false);
  const [showModalConfirmarVenta, setShowModalConfirmarVenta] = useState(false);
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  const onFinish = (values) => {
    console.log(values)
  };
  
  const mostrarRequisitos = () => {
    setShowModalRequisitos(true);
  };

  const guardarVenta = () => {
    setShowModalConfirmarVenta(true);
  };

  return(
    <Modal 
      title="Registro de alquiler" 
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
      footer={null}
      width="95%"
    >
      <ModalConfirmarVenta status={showModalConfirmarVenta} handleClose={setShowModalConfirmarVenta} />
      <Requisitos status={showModalRequisitos} handleClose={setShowModalRequisitos} />
      <Card
        bordered={false}
        className="tablespace mb-24 card-acciones-usuario"
        style={{
          marginBottom: "10px"
        }}
      >
        <div>
          <Button className="btn-nuevo" onClick={guardarVenta}>Guardar - F2</Button>
          <Button className="btn-editar" >Quitar producto - F8</Button>
          <Button className="btn-darBaja" onClick={mostrarRequisitos}>Requisitos</Button>
          <Button className="btn-actualizar" >Requisitos entregados</Button>
        </div>
      </Card>
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
      <DetalleVenta />
      <ResumenVenta />
    </Modal>
  );
}

export default VentaForm;
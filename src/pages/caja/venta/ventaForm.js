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
      <Form.Item name="checkbox-group" label="Requerimientos">
        <Checkbox.Group>
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
                dataIndex: 'seleccionar',
                key: 'notas',
                render: (id) => {
                  return (
                    <Col span={8}>
                      <Checkbox
                        value="A"
                        style={{
                          lineHeight: '32px',
                        }}
                      >
                        A
                      </Checkbox>
                    </Col>
                  );
                }
              },

            ]}
            dataSource={[
              {
                key: '1',
                name: 'Mike',
                age: 32,
                address: '10 Downing Street',
              },
              {
                key: '2',
                name: 'John',
                age: 42,
                address: '10 Downing Street',
              },
            ]}
          />
          <Row>
            <Col span={8}>
              <Checkbox
                value="A"
                style={{
                  lineHeight: '32px',
                }}
              >
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="B"
                style={{
                  lineHeight: '32px',
                }}
                disabled
              >
                B
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="C"
                style={{
                  lineHeight: '32px',
                }}
              >
                C
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="D"
                style={{
                  lineHeight: '32px',
                }}
              >
                D
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="E"
                style={{
                  lineHeight: '32px',
                }}
              >
                E
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox
                value="F"
                style={{
                  lineHeight: '32px',
                }}
              >
                F
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
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
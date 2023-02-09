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
import "./usuarios.css";
import { NavLink } from "react-router-dom";

const {TabPane} = Tabs;

function UsuarioForm({status, handleClose, activeRows = [], usuarioId})
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
      title="Crear Usuario" 
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
      footer={null}
    >
      <Form
        layout="vertical"
        className="row-col"
        onFinish={onFinish}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={24} md={12}>
            <div className="body-card-generales">
              <h3>DATOS GENERALES</h3>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" xs={24} md={24}>
                  <Form.Item
                    label="Nombres"
                    name="nombres"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese los nombres del usuario.",
                      },
                    ]}
                  >
                    <Input placeholder="Ejm: Anita Carolina" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} md={24}>
                  <Form.Item
                    label="Apellidos"
                    name="apellidos"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese los apellidos del usuario.",
                      },
                    ]}
                  >
                    <Input placeholder="Ejm: Gutierrez Hernandez" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} md={24}>
                  <Form.Item
                    label="DNI"
                    name="dni"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese el dni del usuario.",
                      },
                    ]}
                  >
                    <Input placeholder="Ejm: 70030020" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} md={24}>
                  <Form.Item
                    label="Código"
                    name="codigo"
                    rules={[
                      {
                        required: true,
                        message: "Seleccione un grupo de cliente.",
                      },
                    ]}
                  >
                    <Input placeholder="02" />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            
          </Col>
          <Col className="gutter-row" xs={24} md={12}>
            <div className="body-card-generales">
              <h3>INF. DE LOGUEO</h3>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col className="gutter-row" xs={24} md={24}>
                  <Form.Item
                    label="Alias"
                    name="aias"
                    rules={[
                      {
                        required: true,
                        message: "Ingrese el alias.",
                      },
                    ]}
                  >
                    <Input placeholder="Ejm: La huerfanita" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} md={24}>
                  <Form.Item
                    name="password"
                    label="Contraseña"
                    rules={[
                      {
                        required: true,
                        message: 'Ingresa tu contraseña.',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} md={24}>
                  <Form.Item
                    className="username"
                    label="Email"
                    name="email"
                    rules={[
                      {
                        type: 'email',
                        message: 'No es un E-mail válido.',
                      },
                      {
                        required: true,
                        message: 'Ingresa tu E-mail!',
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" xs={24} md={24}>
                  <Form.Item
                    label="Perfil"
                    name="perfilId"
                    rules={[
                      {
                        required: true,
                        message: "Selecciona una profesión.",
                      },
                    ]}
                  >
                    <Select>
                      <Select.Option value="1">Perfil 1</Select.Option>
                      <Select.Option value="2">Perfil 2</Select.Option>
                      <Select.Option value="3">Perfil 3</Select.Option>
                      <Select.Option value="4">Perfil 4</Select.Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="guardar-cliente"
          >
            Guardar
          </Button>
          <Button type="danger" onClick={closeModal}>Cancelar</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default UsuarioForm;
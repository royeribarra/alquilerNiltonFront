import React from "react";

import {
  Modal,
  Input,
  Col,
  Row,
  Form,
  Button
} from "antd";
import "./asignacionRolUsuario.css";
import TextArea from "antd/lib/input/TextArea";

function PerfilForm({status, handleClose, activeRows = [], usuarioId})
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
      title="Crear Perfil" 
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
              <Input placeholder="Ejm: Administrador" />
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
                <TextArea placeholder="Ejm: Este perfil hace referencia..." />
              </Form.Item>
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

export default PerfilForm;
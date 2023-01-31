import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Modal,
  Button,
  Form,
  Input,
} from "antd";
import "./libretaDirecciones.css";

function LibretaDireccionForm({status, handleClose})
{
  const handleSubmit = () => {
    
  };
  const handleCancel = () => {
    handleClose(false);
  };

  return(
    <Modal title="Basic Modal" 
      visible={status} 
      onOk={handleSubmit} 
      onCancel={handleCancel} 
      className="modal-libreta"
    >
      <Form
        layout="vertical"
        className="row-col"
      >
        <Card type="inner" className="card-datos-generales">
          <div className="body-card-generales">
            <Form.Item
              className="username"
              label="Nombres"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="username"
              label="Apellidos"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="username"
              label="Nombre de empresa"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="username"
              label="Número de teléfono"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="username"
              label="Dirección 1"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="username"
              label="Dirección 2"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="username"
              label="Departamento / Sector"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="username"
              label="Estado / Provincia"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="username"
              label="Ciudad / Distrito"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="username"
              label="Pais"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="username"
              label="Código postal"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              className="username"
              label="Tipo de dirección"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
          </div>
        </Card>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="guardar-cliente"
          >
            Guardar
          </Button>
          <NavLink to="/clientes">
            <Button type="danger">Cancelar</Button>
          </NavLink>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default LibretaDireccionForm;
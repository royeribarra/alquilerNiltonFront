import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Button,
  Form,
  Input,
} from "antd";
import "./datosGenerales.css";

function DatosGenerales()
{
  return(
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
          label="Correo electrónico"
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
          label="Grupo de clientes"
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
          label="Crédito en la tienda"
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
          label="Profesión u oficio"
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
    <Card type="inner" title="Documento de identificación" className="card-identificacion">
      <div className="body-card-identificacion">
        <Form.Item
          className="username"
          label="Número de documento"
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
          label="Tipo de documento"
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
  );
}

export default DatosGenerales;
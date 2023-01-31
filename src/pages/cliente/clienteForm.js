import React from "react";
import { NavLink } from "react-router-dom";
import {
  Row,
  Col,
  Card,
  Radio,
  Table,
  Upload,
  message,
  Progress,
  Button,
  Form,
  Input,
} from "antd";
import "./clienteForm.css";

function ClienteForm()
{
  return(
    <div className="tabled">
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title="Crear cliente"
        extra={
          <>
            
          </>
        }
      >
        <div className="form-cliente">
          <Form
            layout="vertical"
            className="row-col"
          >
            <Card type="inner" title="Datos Generales" className="card-datos-generales">
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
        </div>
      </Card>
    </div>
  );
}

export default ClienteForm;
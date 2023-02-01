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
import "./datosGenerales.css";

function DatosGenerales()
{
  const onFinish = (values) => {
    console.log(values);
  };

  return(
    <Form
      layout="vertical"
      className="row-col"
      onFinish={onFinish}
      initialValues={{
        clienteGrupoId: "1",
        profesionId: "1",
        credito: "1.00",
        tipoDocumento: "1"
      }}
    >
      <Card type="inner" className="card-datos-generales">
        <div className="body-card-generales">
          <Row 
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                label="Nombres"
                name="nombres"
                rules={[
                  {
                    required: true,
                    message: "Ingrese los nombres del cliente.",
                  },
                ]}
              >
                <Input placeholder="Ejm: Anita Carolina" />
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                label="Apellidos"
                name="apellidos"
                rules={[
                  {
                    required: true,
                    message: "Ingrese los apellidos del cliente.",
                  },
                ]}
              >
                <Input placeholder="Ejm: Lopez Clemente" />
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                label="Correo electrónico"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el email.",
                  },
                  {
                    type: 'email',
                    message: 'No es un email válido.',
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                label="Número de teléfono"
                name="telefono"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el teléfono.",
                  },
                ]}
              >
                <InputNumber className="input-numerico" placeholder="Ejm: 934448755" minLength={9} maxLength={9} />
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                label="Nombre de empresa"
                name="nombreEmpresa"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el nombre de la empresa.",
                  },
                ]}
              >
                <Input placeholder="Ejm: Elenco Santísima" />
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                label="Crédito en la tienda"
                name="credito"
              >
                <InputNumber
                  prefix="S/ "
                  className="input-numerico"
                  stringMode
                  step="0.01"
                />
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                className="username"
                label="Grupo de clientes"
                name="clienteGrupoId"
                rules={[
                  {
                    required: true,
                    message: "Seleccione un grupo de cliente.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="1">Grupo 1</Select.Option>
                  <Select.Option value="2">Grupo 2</Select.Option>
                  <Select.Option value="3">Grupo 3</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                className="username"
                label="Profesión u oficio"
                name="profesionId"
                rules={[
                  {
                    required: true,
                    message: "Selecciona una profesión.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="1">Profesión 1</Select.Option>
                  <Select.Option value="2">Profesión 2</Select.Option>
                  <Select.Option value="3">Profesión 3</Select.Option>
                  <Select.Option value="4">Profesión 4</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Card>
      <Card type="inner" title="Documento de identificación" className="card-identificacion">
        <div className="body-card-identificacion">
          <Row gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                label="Número de documento"
                name="documentoIdentidad"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el documento de identidad.",
                  },
                ]}
              >
                <InputNumber className="input-numerico" placeholder="Ejm: 80019405" minLength={8} maxLength={8} />
              </Form.Item>
            </Col>
            <Col 
              className="gutter-row" 
              xs={24}
              md={12}
            >
              <Form.Item
                label="Tipo de documento"
                name="tipoDocumento"
                rules={[
                  {
                    required: true,
                    message: "Seleccione un tipo de documento.",
                  },
                ]}
              >
                <Select >
                  <Select.Option value="1">DNI</Select.Option>
                  <Select.Option value="2">RUC</Select.Option>
                  <Select.Option value="3">CARNET EXTRANJERIA</Select.Option>
                </Select>
              </Form.Item>
            </Col>
          </Row> 
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
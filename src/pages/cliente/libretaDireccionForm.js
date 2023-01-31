import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Modal,
  Button,
  Form,
  Input,
  Row,
  Col,
  InputNumber
} from "antd";
import "./libretaDirecciones.css";
import "./libretaDireccionForm.css";

function LibretaDireccionForm({status, handleClose})
{
  const handleSubmit = () => {
    
  };
  const handleCancel = () => {
    handleClose(false);
  };

  return(
    <Modal title="Agregar dirección del Cliente" 
      visible={status} 
      onOk={handleSubmit} 
      onCancel={handleCancel} 
      className="modal-libreta"
      footer={null}
    >
      <Form
        layout="vertical"
        className="row-col"
      >
        <Card type="inner" className="card-libreta-direcciones">
          <div className="body-card-generales">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" xs={24} md={12} >
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
              <Col className="gutter-row" xs={24} md={12} >
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
              <Col className="gutter-row" xs={24} md={12} >
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
              <Col className="gutter-row" xs={24} md={12} >
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
              <Col className="gutter-row" xs={24} md={12} >
                <Form.Item
                  label="Pais"
                  name="pais"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el país.",
                    },
                  ]}
                >
                  <Input placeholder="Ejm: Perú" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" xs={24} md={12} >
                <Form.Item
                  label="Departamento / Sector"
                  name="departamento"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese un departamento.",
                    },
                  ]}
                >
                  <Input placeholder="Ejm: Junín" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" xs={24} md={12} >
                <Form.Item
                  label="Estado / Provincia"
                  name="provincia"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese una provincia.",
                    },
                  ]}
                >
                  <Input placeholder="Ejm: Huancayo." />
                </Form.Item>
              </Col>
              <Col className="gutter-row" xs={24} md={12} >
                <Form.Item
                  label="Ciudad / Distrito"
                  name="distrito"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese un distrito.",
                    },
                  ]}
                >
                  <Input placeholder="Ejm: Huancayo" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" xs={24} md={12} >
                <Form.Item
                  label="Tipo de dirección"
                  name="tipoDireccion"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el tipo de dirección.",
                    },
                  ]}
                >
                  <Input placeholder="Ejm: Calle Siempre viva # 344..." />
                </Form.Item>
              </Col>
              <Col className="gutter-row" xs={24} md={12} >
                <Form.Item
                  label="Código postal"
                  name="codigoPostal"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese el código postal.",
                    },
                  ]}
                >
                  <Input placeholder="Ejm: 12002" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" xs={24} md={24} >
                <Form.Item
                  label="Dirección 1"
                  name="direccion1"
                  rules={[
                    {
                      required: true,
                      message: "Ingrese la dirección.",
                    },
                  ]}
                >
                  <Input placeholder="Ejm: san carlos #222" />
                </Form.Item>
              </Col>
              <Col className="gutter-row" xs={24} md={24} >
                <Form.Item
                  label="Dirección 2"
                  name="direccion2"
                >
                  <Input placeholder="Ejm: Avenida pablito morales #555" />
                </Form.Item>
              </Col>
            </Row>
          </div>
        </Card>
        <Form.Item className="envio-formulario">
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
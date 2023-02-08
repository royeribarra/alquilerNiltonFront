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
  Col,
  Space
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./producto.css";

function ProductoForm()
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
      <Card type="inner" title="Información general" className="card-datos-generales">
        <div className="body-card-generales">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          >
            <Col className="gutter-row" xs={24} md={12}>
              <Form.Item
                label="Tipo de prenda"
                name="tipoId"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el tipo de prenda.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="1">Terno</Select.Option>
                  <Select.Option value="2">Camisa</Select.Option>
                  <Select.Option value="3">Chaleco solo</Select.Option>
                  <Select.Option value="4">Corbata</Select.Option>
                  <Select.Option value="5">Falda</Select.Option>
                  <Select.Option value="6">Pantalón</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12}>
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
                <Select>
                  <Select.Option value="1">Almacén 1</Select.Option>
                  <Select.Option value="2">Almacén 2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={24}>
              <h1>Datos Generales</h1>
            </Col>
            <Col className="gutter-row" xs={24} md={8}>
              <Form.Item
                label="Marca"
                name="marca"
                rules={[
                  {
                    required: true,
                    message: "Seleccione una marca.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="1">Sin definir</Select.Option>
                  <Select.Option value="2">Marca 1</Select.Option>
                  <Select.Option value="3">Marca 2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={8}>
              <Form.Item
                label="Color"
                name="color"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el teléfono.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="1">Sin definir</Select.Option>
                  <Select.Option value="2">Color 1</Select.Option>
                  <Select.Option value="3">Color 2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={8}>
              <Form.Item
                label="Modelo tela"
                name="modelaTelaId"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el nombre de la empresa.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="1">Sin definir</Select.Option>
                  <Select.Option value="2">Tela 1</Select.Option>
                  <Select.Option value="3">Tela 2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={8}>
              <Form.Item
                label="Tela o material"
                name="telaId"
                rules={[
                  {
                    required: true,
                    message: "Seleccione una marca.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="1">Sin definir</Select.Option>
                  <Select.Option value="2">Tela 1</Select.Option>
                  <Select.Option value="3">Tela 2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={8}>
              <Form.Item
                label="Ocasión"
                name="ocasionId"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el teléfono.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="1">Sin definir</Select.Option>
                  <Select.Option value="2">Ocasión 1</Select.Option>
                  <Select.Option value="3">Ocasión 2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={8}>
              <Form.Item
                label="Modelo prenda"
                name="modelaPrendaId"
                rules={[
                  {
                    required: true,
                    message: "Ingrese el nombre de la empresa.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="1">Sin definir</Select.Option>
                  <Select.Option value="2">Modelo 1</Select.Option>
                  <Select.Option value="3">Modelo 2</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={24}>
              <h1>Saco</h1>
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              <Form.Item
                label="Filos solapa"
                name="filosSolapa"
              >
                <Select>
                  <Select.Option value="1">Si</Select.Option>
                  <Select.Option value="2">No</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={8}>
              <Form.Item
                label="Color de filos"
                name="colorFilos"
                rules={[
                  {
                    required: true,
                    message: "Seleccione un grupo de cliente.",
                  },
                ]}
              >
                <Select>
                  <Select.Option value="1">Sin definir</Select.Option>
                  <Select.Option value="2">Color 2</Select.Option>
                  <Select.Option value="3">Color 3</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <p>+</p>
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <Form.Item
                name="botones"
                rules={[
                  {
                    required: true,
                    message: "Selecciona una profesión.",
                  },
                ]}
              >
                <InputNumber className="input-numerico" minLength={8} maxLength={8} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={3}>
              <p>Botones u giales</p>
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <Form.Item
                name="profesionId"
                rules={[
                  {
                    required: true,
                    message: "Selecciona una profesión.",
                  },
                ]}
              >
                <InputNumber className="input-numerico" minLength={8} maxLength={8} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={3}>
              <p>Aberturas traseras</p>
            </Col>
            <Col className="gutter-row" xs={24} md={24}>
              <h1>Pantalón</h1>
            </Col>
            <Col className="gutter-row" xs={24} md={9}>
              <Form.List name="pliegues">
                  
                {(fields, { add, remove }) => (
                  <>
                  <h1>Pliegues</h1>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space
                        key={key}
                        style={{
                          display: 'flex',
                          marginBottom: 8,
                        }}
                        align="baseline"
                      >
                        <Form.Item
                          {...restField}
                          name={[name, 'first']}
                          rules={[
                            {
                              required: true,
                              message: 'Missing first name',
                            },
                          ]}
                        >
                          <Select>
                            <Select.Option value="1">Sin definir</Select.Option>
                            <Select.Option value="2">Pliegue 1</Select.Option>
                            <Select.Option value="3">Pliegue 2</Select.Option>
                          </Select>
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                        +
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Col>
            <Col className="gutter-row" xs={24} md={9}>
              <div>
                <Form.Item
                  label="Entalle"
                  name="entalles"
                  rules={[
                    {
                      required: true,
                      message: "Seleccione un grupo de cliente.",
                    },
                  ]}
                >
                  <Select>
                    <Select.Option value="1">Sin definir</Select.Option>
                    <Select.Option value="2">Color 2</Select.Option>
                    <Select.Option value="3">Color 3</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div>
              <Form.List name="entalle">
                  
                  {(fields, { add, remove }) => (
                    <>
                    
                      {fields.map(({ key, name, ...restField }) => (
                        <Space
                          key={key}
                          style={{
                            display: 'flex',
                            marginBottom: 8,
                          }}
                          align="baseline"
                        >
                          <Form.Item
                            {...restField}
                            name={[name, 'first']}
                            rules={[
                              {
                                required: true,
                                message: 'Missing first name',
                              },
                            ]}
                          >
                            <Select>
                              <Select.Option value="1">Sin definir</Select.Option>
                              <Select.Option value="2">Pliegue 1</Select.Option>
                              <Select.Option value="3">Pliegue 2</Select.Option>
                            </Select>
                          </Form.Item>
                          <MinusCircleOutlined onClick={() => remove(name)} />
                        </Space>
                      ))}
                      <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} />
                        
                      </Form.Item>
                    </>
                  )}
                </Form.List>
              </div>
              
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

export default ProductoForm;
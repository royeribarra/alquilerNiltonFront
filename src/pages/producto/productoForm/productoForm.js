import React from "react";
import { NavLink } from "react-router-dom";
import {
  Input,
  Switch,
  Checkbox,
  Button,
  Form,
  Modal,
  Select,
  InputNumber,
  Row,
  Col,
  Space
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import "./producto.css";
import TextArea from "antd/lib/input/TextArea";

function ProductoForm({status, handleClose, tipoProductoForm})
{
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  const onFinish = (values) => {
    console.log(values);
  };

  return(
    <Modal 
      title={"Crear " + tipoProductoForm.nombre}
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
      footer={null}
      width="95%"
    >
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
        <h3>Información general</h3>
        <div className="body-card-generales">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} md={12}>
              <Form.Item
                label="Tipo de prenda"
                name="tipoProductoId"
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
                label="Almacén"
                name="almacenId"
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
                name="modeloPrendaId"
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
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} md={6}>
              Código
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              Tono
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              Talla(tam.prenda)
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              Nro. salidas
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              Base
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              Precio venta
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              Config. precio
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} md={6}>
              Terno
              <Input />
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <Switch defaultChecked />
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              <Input />
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <InputNumber />
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <InputNumber />
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              <InputNumber />
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              Config. precio
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} md={6}>
              Terno
              <Input />
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <Switch defaultChecked />
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              <Input />
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <InputNumber />
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <InputNumber />
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              <InputNumber />
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              Config. precio
            </Col>
          </Row>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} md={6}>
              Terno
              <Input />
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <Switch defaultChecked />
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              <Input />
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <InputNumber />
            </Col>
            <Col className="gutter-row" xs={24} md={2}>
              <InputNumber />
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              <InputNumber />
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              Config. precio
            </Col>
          </Row>
        </div>
        <div>
        <div>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} md={12}>
              <Form.Item
                label="Tipo de prenda"
                name="tipoProductoId"
              >
                <TextArea />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              <Form.Item
                label="Tipo de prenda"
                name="tipoProductoId"
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              <Form.Item
                label="Tipo de prenda"
                name="tipoProductoId"
              >
                <InputNumber />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={4}>
              <Checkbox>Númeración única</Checkbox>
            </Col>
          </Row>                  
          
        </div>
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
        </div>
        
      </Form>
    </Modal>
  );
}

export default ProductoForm;
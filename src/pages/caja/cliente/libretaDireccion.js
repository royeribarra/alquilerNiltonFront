import React from "react";
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
import { useSelector } from "react-redux";
import { ClienteService } from "../../../servicios/clienteService";
import { toastr } from "react-redux-toastr";

function LibretaDireccion({status, handleClose})
{
  const state = useSelector((state) => state);
  const { clienteSelected } = state.cliente;

  const clienteService = new ClienteService();
  const [form] = Form.useForm();

  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  const onFinish = (values) => {
    clienteService.addDireccionCliente(values, clienteSelected.id).then(({data}) => {
      if(data.state){
        toastr.success(data.message);
        closeModal();
        clearForm();
      }
    }).catch((err)=> {
      console.log(err);
      toastr.error("Error en el servidor.");
      cancelarFormulario();
    });
  };

  const cancelarFormulario = () => {
    closeModal();
    clearForm();
  };

  const clearForm = () => {
    form.resetFields();
  };

  return(
    <Modal 
      title={
        <div>
          <h3>Agregar dirección del cliente.</h3>
          <p>Llene el formulario  a continuación para agregar una dirección para este cliente.</p>
          <p>Detalles de la dirección del cliente.</p>
        </div>
      }
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal} 
      className="modal-libreta"
      footer={null}
      width="80%"
    >
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="row-col"
        initialValues={{
          nombres: clienteSelected.nombres,
          apellidos: clienteSelected.apellidos,
          nombreEmpresa: clienteSelected.nombreEmpresa,
          telefono: clienteSelected.telefono,
          codigoPostal: "+51",
          pais: "Perú"
        }}
      >
        <Card type="inner" className="card-libreta-direcciones">
          <div className="body-card-generales">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" xs={24} md={12} >
                <Form.Item
                  label="Nombres"
                  name="nombres"
                >
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col className="gutter-row" xs={24} md={12} >
                <Form.Item
                  label="Apellidos"
                  name="apellidos"
                >
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col className="gutter-row" xs={24} md={12} >
                <Form.Item
                  label="Nombre de empresa"
                  name="nombreEmpresa"
                >
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col className="gutter-row" xs={24} md={12} >
                <Form.Item
                  label="Número de teléfono"
                  name="telefono"
                >
                  <InputNumber className="input-numerico" disabled />
                </Form.Item>
              </Col>
              <Col className="gutter-row" xs={24} md={12} >
                <Form.Item
                  label="Pais"
                  name="pais"
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
          <Button type="danger" onClick={cancelarFormulario}>Cancelar</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default LibretaDireccion;
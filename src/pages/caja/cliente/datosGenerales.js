import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { ClienteService } from "../../../servicios/clienteService";
import { toastr } from "react-redux-toastr";
import { selectCliente } from "../../../redux/actions/clienteActions";

function DatosGenerales({closeModal})
{
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { profesiones } = state.profesion;
  const { tiposDocumento } = state.tipoDocumento;
  const { gruposCliente } = state.grupoCliente;

  const clienteService = new ClienteService();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    clienteService.storeCliente(values).then(({data})=> {
      if(data.state){
        dispatch(selectCliente(data.cliente));
        toastr.success(data.message);
      }else{
        toastr.error(data.message);
      }
    }).catch((err)=>{
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
    <Form
      layout="vertical"
      className="row-col"
      onFinish={onFinish}
      form={form}
      initialValues={{
        grupoClienteId: 1,
        profesionId: 1,
        credito: 0.00,
        tipoDocumentoId: 1
      }}
    >
      <Card type="inner" className="card-datos-generales">
        <div className="body-card-generales">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col className="gutter-row" xs={24} md={12}>
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
                <Input placeholder="Ejm: Lopez Clemente" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12}>
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
            <Col className="gutter-row" xs={24} md={12}>
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
            <Col className="gutter-row" xs={24} md={12}>
              <Form.Item
                label="Nombre de empresa"
                name="nombreEmpresa"
              >
                <Input placeholder="Ejm: Elenco Santísima" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12}>
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
            <Col className="gutter-row" xs={24} md={12}>
              <Form.Item
                className="username"
                label="Grupo de clientes"
                name="grupoClienteId"
                rules={[
                  {
                    required: true,
                    message: "Seleccione un grupo de cliente.",
                  },
                ]}
              >
                <Select>
                  {gruposCliente.map((grupo)=>
                      <Select.Option key={grupo.id} value={grupo.id}>{grupo.nombre}</Select.Option>
                  )}
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12}>
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
                  {profesiones.map((profesion)=>
                      <Select.Option key={profesion.id} value={profesion.id}>{profesion.nombre}</Select.Option>
                  )}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </div>
      </Card>
      <Card type="inner" title="Documento de identificación" className="card-identificacion">
        <div className="body-card-identificacion">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32}}>
            <Col className="gutter-row" xs={24} md={12}>
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
            <Col className="gutter-row" xs={24} md={12}>
              <Form.Item
                label="Tipo de documento"
                name="tipoDocumentoId"
                rules={[
                  {
                    required: true,
                    message: "Seleccione un tipo de documento.",
                  },
                ]}
              >
                <Select>
                  {tiposDocumento.map((tipo)=>
                      <Select.Option key={tipo.id} value={tipo.id}>{tipo.nombre}</Select.Option>
                  )}
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
        <Button type="danger" onClick={cancelarFormulario}>Cancelar</Button>
      </Form.Item>
    </Form>
  );
}

export default DatosGenerales;
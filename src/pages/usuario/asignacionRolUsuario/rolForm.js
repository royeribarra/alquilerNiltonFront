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
import { RolService } from "../../../servicios/rolService";
import { useDispatch } from "react-redux";
import { showLoader } from "../../../redux/actions/loaderActions";
import { toastr } from "react-redux-toastr";

function RolForm({status, handleClose, activeRows = [], usuarioId})
{
  const dispatch = useDispatch();
  const rolService = new RolService();
  const [form] = Form.useForm();

  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  const onFinish = (values) => {
    dispatch(showLoader());
    rolService.storeRol(values).then(({data})=>{
      toastr.success(data.message);
      dispatch(showLoader(false));
      closeModal();
      form.resetFields();
    }).catch(error => {
      toastr.error("Hubo un error en el servidor");
      console.log(error)
      dispatch(showLoader(false));
      closeModal();
    });
  };
  
  return(
    <Modal 
      title="Crear Rol" 
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
        form={form}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={24} md={24}>
              <Form.Item
              label="Nombre"
              name="nombre"
              rules={[
                  {
                  required: true,
                  message: "Ingrese el nombre del rol.",
                  },
              ]}
              >
              <Input placeholder="Ejm: Administrador" />
              </Form.Item>
          </Col>
          <Col className="gutter-row" xs={24} md={24}>
              <Form.Item
              label="Descripción"
              name="descripcion"
              rules={[
                  {
                  required: true,
                  message: "Ingrese la descripción del rol.",
                  },
              ]}
              >
                <TextArea placeholder="Ejm: Este rol hace referencia..." />
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

export default RolForm;
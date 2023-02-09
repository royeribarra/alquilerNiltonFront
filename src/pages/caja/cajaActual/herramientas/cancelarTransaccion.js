import React from "react";
import { 
  Modal,
  Input,
  Select,
  Col,
  Form,
  Row,
  Button
} from "antd";
import TextArea from "antd/lib/input/TextArea";

function CancelarTransaccion({status, handleClose, activeRows = [], usuarioId}) {
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  const onFinish = (values) =>{

  };

  return (
    <Modal 
      title="Cancelar transacción" 
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
      footer={null}
    >
      <p>¿Está seguro que quiere cancelar esta transaccion: ?</p>
      <Form
        layout="vertical"
        className="row-col"
        onFinish={onFinish}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" xs={24} md={24}>
            <Form.Item
              label="Motivo"
              name="motivoId"
              rules={[
                  {
                  required: true,
                  message: "Seleccione el motivo.",
                  },
              ]}
            >
              <Select>
                <Select.Option value="1">Opcion 1</Select.Option>
                <Select.Option value="2">Opcion 2</Select.Option>
                <Select.Option value="3">Opcion 3</Select.Option>
                <Select.Option value="4">Opcion 4</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className="gutter-row" xs={24} md={24}>
            <Form.Item
              label="Comentario"
              name="comentario"
            >
              <TextArea placeholder="Ejm: Se canceló por tal..." />
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
export default CancelarTransaccion;
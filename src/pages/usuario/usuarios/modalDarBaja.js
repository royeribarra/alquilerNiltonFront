import React from "react";
import { Modal } from "antd";

function ModalDarBaja({status, handleClose, activeRows = [], usuarioId}) {
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  return (
    <Modal 
      title="Dar de baja a usuario" 
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
    >
      <p>¿Está seguro de dar de baja a este usuario: ?</p>
    </Modal>
  );
}
export default ModalDarBaja;
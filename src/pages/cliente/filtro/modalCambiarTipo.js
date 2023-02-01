import { Modal } from "antd";
import React from "react";

function ModalCambiarTipo({status, handleClose, activeRows = []}) {
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  return (
    <Modal
      title="Cambiar tipo de cliente" 
      visible={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
    >
      <p>¿Está seguro de mover a este tipo al y/o los clientes: ?</p>
    </Modal>
  );
}

export default ModalCambiarTipo;
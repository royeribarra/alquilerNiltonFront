import React from "react";
import { Modal } from "antd";

function ModalEliminarCliente({status, handleClose, data}) {
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  return (
    <Modal 
      title="Eliminar producto" 
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
    >
      <p>¿Está seguro de eliminar este Producto: ?</p>
    </Modal>
  );
}
export default ModalEliminarCliente;
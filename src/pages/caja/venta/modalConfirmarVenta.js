import React from "react";
import { Modal } from "antd";

function ModalConfirmarVenta({status, handleClose}) {
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  return (
    <Modal 
      title="Confirmar orden con fecha:" 
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
    >
      <p>Fecha de entrega: 08-10-22 10:00 am</p>
      <p>Fecha de devolucion: 08-10-22 7:00 pm</p>
    </Modal>
  );
}
export default ModalConfirmarVenta;
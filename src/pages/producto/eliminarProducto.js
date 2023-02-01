import React from "react";
import { Modal } from "antd";

function EliminarProducto({status, handleClose, handleRefreshTable, activeRow}) {
  
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
    handleRefreshTable();
  };

  return (
    <Modal 
      title="Eliminar producto" 
      visible={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
    >
      <p>¿Está seguro de eliminar este Producto: {activeRow.producto_nombre}?</p>
    </Modal>
  );
}
export default EliminarProducto;
import React from "react";
import { Modal } from "antd";
import { useSelector } from "react-redux";
import { ClienteService } from "../../../servicios/clienteService";
import { toastr } from "react-redux-toastr";

function ModalEliminarDireccion({status, handleClose}) 
{
  const clienteService = new ClienteService();
  const state = useSelector((state) => state);
  const { clienteSelected, direccionClienteSelected } = state.cliente;

  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    clienteService.deleteDireccionCliente(direccionClienteSelected.id).then(({data})=> {
      toastr.success(data.message)
      closeModal();
    }).catch((error)=> {
      console.log(error);
      toastr.error("Hubo un error en el servidor.");
      closeModal();
    });
  };

  return (
    <Modal 
      title="Eliminar dirección" 
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
    >
      
      <p>¿Está seguro de eliminar la dirección: {direccionClienteSelected.direccion} ?</p>
      <p>del cliente: {clienteSelected.nombres + ' ' + clienteSelected.apellidos}</p>
    </Modal>
  );
}
export default ModalEliminarDireccion;
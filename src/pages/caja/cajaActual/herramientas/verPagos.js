import React, { useState } from "react";
import { 
  Modal,
  Table,
  Select,
  Col,
  Form,
  Row,
  Button
} from "antd";

function ModalConfirmacion({status, handleClose, activeRows = [], usuarioId}) {
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  return (
    <Modal 
      title="Eliminar pago" 
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
    >
      <p>¿Está seguro de eliminar este pago?</p>
    </Modal>
  );
}

const columns = [
  {
    title: "Fecha",
    dataIndex: "fecha",
    key: "nombres",
  },
  {
    title: "Operación",
    dataIndex: "operacionId",
    key: "documento",
  },

  {
    title: "Detalle",
    key: "tipo",
    dataIndex: "telefono",
  },
  {
    title: "Importe",
    key: "descripcion",
    dataIndex: "created_at",
  },
  {
    title: "Eliminar",
    key: "descripcion",
    dataIndex: "created_at",
  },
];


function VerPagos({status, handleClose, activeRows = [], usuarioId}) 
{
  
  const [showModalConfirmacion, setShowModalConfirmacion] = useState(false);
  const [selectedRowsArray, setSelectedRowKeys] = useState([]);
  const[data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  const onFinish = (values) =>{

  };

  const eliminarPago = () => {
    setShowModalConfirmacion(true);
  };

  const fetchAll = (paginationTab = pagination, tipo = null) => {
    console.log(paginationTab)
    console.log(tipo)
    if(tipo)
    {

    }

    setPagination({
      ...paginationTab,
      current: paginationTab ? paginationTab.current : pagination.current,
      total: paginationTab ? paginationTab.total : pagination.total,
    });
  };

  const rowSelection = {
    selectedRowKeys: selectedRowsArray,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
  };

  return (
    <Modal 
      title="Historial de pagos" 
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
      footer={null}
    >
      <div>
        <p>Cliente : Jhordan</p>
        <p>Comprobante: Nota NTA001-187</p>
        <p>Total: 140</p>
        <p>Fecha operación: 09-12-13</p>
        <p>Estado de pago: Saldado</p>
      </div>
      <Button onClick={eliminarPago}>Eliminar pago</Button>
      <div className="table-responsive">
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={pagination}
          className="ant-border-space"
          onChange={fetchAll}
          scroll={{
            y: 350,
          }}
        />
      </div>
      <ModalConfirmacion 
        status={showModalConfirmacion}
        handleClose={setShowModalConfirmacion}
        usuarioId={usuarioId}
      />
    </Modal>
  );
}
export default VerPagos;
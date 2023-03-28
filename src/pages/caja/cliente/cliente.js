import React from "react";
import {
  Tabs,
  Modal
} from "antd";
import DatosGenerales from "./datosGenerales";
import ListaLibretaDirecciones from "./listaLibretaDirecciones";
import { useSelector } from "react-redux";

const {TabPane} = Tabs;

function Cliente({status, handleClose})
{
  const state = useSelector((state) => state);
  const { clienteSelected } = state.cliente;
  
  const closeModal = () => {
    handleClose(false);
  };

  const handleSubmit = () => {
    closeModal();
  };

  const onChange = (e) => {
    console.log(e);
  }

  const tabItems = [
    {
      key: '1',
      label: `Datos generales`,
      children: <DatosGenerales closeModal={closeModal} />,
    },
    {
      key: '2',
      label: clienteSelected ? `Libreta de direcciones` : '',
      children: clienteSelected ? <ListaLibretaDirecciones /> : <></>,
    },
  ];

  return(
    <Modal 
      title={clienteSelected ? "Editar Cliente": "Crear Cliente"}
      open={status} 
      onOk={handleSubmit} 
      onCancel={closeModal}
      okText="Confirmar"
      cancelText="Cancelar"
      footer={null}
      width="80%"
    >
      <div>
        <Tabs defaultActiveKey="1" onChange={onChange} className="tabs-page-usuarios">
          {tabItems.map(({ key, label, children }) => (
            <TabPane tab={label} key={key}>
              {children}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </Modal>
  );
}

export default Cliente;
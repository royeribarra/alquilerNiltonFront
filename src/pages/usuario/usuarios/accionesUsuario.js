import React, { useState } from "react";

import {
  Card,
  Tabs,
  Button
} from "antd";
import "./usuarios.css";
import UsuarioForm from "./usuarioForm";
import ModalDarBaja from "./modalDarBaja";
const {TabPane} = Tabs;

function AccionesUsuario({ fetchAll, refreshTable })
{
  const [showModalFormUsuario, setShowModalFormUsuario] = useState(false);
  const [showModalBajaUsuario, setShowModalBajaUsuario] = useState(false);

  const filtrarPor = (tipo) => {
    fetchAll( null, tipo);
  };

  const crearUsuario = () => {
    setShowModalFormUsuario(true);
  };
  
  const editarUsuario = () => {
    setShowModalFormUsuario(true);
  };

  const darBajaUsuario = () => {
    setShowModalBajaUsuario(true);
  };

  return(
    <div className="contenedor-acciones-usuario">
      <Card
        bordered={false}
        className="tablespace mb-24 card-acciones-usuario"
        style={{
          marginBottom: "10px"
        }}
      >
        <div>
          <Button className="btn-nuevo" onClick={crearUsuario}>Nuevo</Button>
          <Button className="btn-editar" onClick={editarUsuario}>Editar</Button>
          <Button className="btn-darBaja" onClick={darBajaUsuario}>Dar baja</Button>
          <Button className="btn-activar" onClick={()=>filtrarPor(4)}>Activar</Button>
          <Button className="btn-actualizar" onClick={()=>filtrarPor(5)}>Actualizar</Button>
        </div>
      </Card>
      <UsuarioForm 
        status={showModalFormUsuario}
        handleClose={setShowModalFormUsuario}
        refreshTable={refreshTable}
      />
      <ModalDarBaja 
        status={showModalBajaUsuario}
        handleClose={setShowModalBajaUsuario}
      />
    </div>
  );
}

export default AccionesUsuario;
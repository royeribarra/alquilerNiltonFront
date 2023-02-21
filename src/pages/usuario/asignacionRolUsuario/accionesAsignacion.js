import React, { useState } from "react";

import {
  Card,
  Tabs,
  Button
} from "antd";
import "./asignacionRolUsuario.css";
import PerfilForm from "./rolForm";

const {TabPane} = Tabs;

function AccionesAsignacion({ fetchAll })
{
  const [showModalFormPerfil, setShowModalFormPerfil] = useState(false);
  const [usuarioId, setUsuarioId] = useState(1);

  const crearPerfil = () => {
    setUsuarioId(1);
    setShowModalFormPerfil(true);
  };
  
  const editarPerfil = (id) => {
    setUsuarioId(2);
    setShowModalFormPerfil(true);
  };

  const filtrarPor = (tipo) => {
    fetchAll( null, tipo);
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
          <Button className="btn-nuevo" onClick={crearPerfil}>Nuevo</Button>
          <Button className="btn-editar" onClick={editarPerfil}>Editar</Button>
          <Button className="btn-darBaja" onClick={()=>filtrarPor(3)}>Dar baja</Button>
          <Button className="btn-actualizar" onClick={()=>filtrarPor(5)}>Actualizar</Button>
        </div>
      </Card>
      <PerfilForm
        status={showModalFormPerfil}
        handleClose={setShowModalFormPerfil}
        usuarioId={usuarioId}
      />
    </div>
    
  );
}

export default AccionesAsignacion;
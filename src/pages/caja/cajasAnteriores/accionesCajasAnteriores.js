import React, { useState } from "react";

import {
  Card,
  Tabs,
  Button
} from "antd";
import "./cajasAnteriores.css";

function AccionesCajasAnteriores({ fetchAll })
{
  const [showModalFormUsuario, setShowModalFormUsuario] = useState(false);
  const [showModalBajaUsuario, setShowModalBajaUsuario] = useState(false);
  const [usuarioId, setUsuarioId] = useState(1);

  const filtrarPor = (tipo) => {
    fetchAll( null, tipo);
  };

  const crearUsuario = () => {
    setUsuarioId(1);
    setShowModalFormUsuario(true);
  };
  
  const editarUsuario = (id) => {
    setUsuarioId(2);
    setShowModalFormUsuario(true);
  };

  const darBajaUsuario = (id) => {
    setUsuarioId(3);
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
    </div>
  );
}

export default AccionesCajasAnteriores;
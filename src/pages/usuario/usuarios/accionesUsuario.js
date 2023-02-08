import React from "react";

import {
  Card,
  Tabs,
  Button
} from "antd";
import "./usuarios.css";

const {TabPane} = Tabs;

function AccionesUsuario({ fetchAll })
{
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
          <Button className="btn-nuevo" onClick={()=>filtrarPor()}>Nuevo</Button>
          <Button className="btn-editar" onClick={()=>filtrarPor(2)}>Editar</Button>
          <Button className="btn-darBaja" onClick={()=>filtrarPor(3)}>Dar baja</Button>
          <Button className="btn-activar" onClick={()=>filtrarPor(4)}>Activar</Button>
          <Button className="btn-actualizar" onClick={()=>filtrarPor(5)}>Actualizar</Button>
        </div>
      </Card>
    </div>
    
  );
}

export default AccionesUsuario;
import React from "react";

import {
  Card,
  Tabs,
  Button
} from "antd";
import "./usuarios.css";
import AccionesUsuario from "./accionesUsuario";
import ListaUsuarios from "./listaUsuarios";

function TabUsuarios({ fetchAll })
{
  const filtrarPor = (tipo) => {
    fetchAll( null, tipo);
  };

  return(
    <Card
      bordered={false}
      className="tablespace mb-24 tab-usuarios"
      style={{
        background: 'none',
        boxShadow: 'unset'
      }}
    >
      <div>
        <AccionesUsuario />
        <ListaUsuarios />
      </div>
    </Card>
  );
}

export default TabUsuarios;
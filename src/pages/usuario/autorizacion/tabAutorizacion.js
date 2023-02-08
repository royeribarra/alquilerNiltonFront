import React from "react";

import {
  Card,
  Tabs,
  Button
} from "antd";
import "./autorizacion.css";
import ListaRoles from "./listaRoles";
import DetalleRol from "./detalleRol";

function TabAutorizacion({ fetchAll })
{
  const filtrarPor = (tipo) => {
    fetchAll( null, tipo);
  };

  return(
    <Card
      bordered={false}
      className="tablespace mb-24 tab-autorizacion"
      title="Autorización de Roles"
    >
      <div>
        <ListaRoles />
        <DetalleRol />
      </div>
    </Card>
  );
}

export default TabAutorizacion;
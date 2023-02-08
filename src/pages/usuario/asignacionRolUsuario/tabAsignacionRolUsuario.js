import React from "react";

import {
  Card,
  Tabs,
  Button
} from "antd";
import "./asignacionRolUsuario.css";
import ListaRoles from "./listaRoles";
import AccionesAsignacion from "./accionesAsignacion";
import ListaAsignacionUsuarios from "./listaAsignacionUsuarios";

function TabAsignacionRolUsuario({ fetchAll })
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
        <AccionesAsignacion />
        <ListaRoles />
        <ListaAsignacionUsuarios />
      </div>
    </Card>
  );
}

export default TabAsignacionRolUsuario;
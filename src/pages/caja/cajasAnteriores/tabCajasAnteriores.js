import React from "react";

import {
  Card,
  Tabs,
  Button
} from "antd";
import "./cajasAnteriores.css";
import AccionesCajasAnteriores from "./accionesCajasAnteriores";
import ListaVentasCajasAnteriores from "./listaVentasCajasAnteriores";

function TabCajasAnteriores({ fetchAll })
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
        <AccionesCajasAnteriores />
        <ListaVentasCajasAnteriores />
      </div>
    </Card>
  );
}

export default TabCajasAnteriores;
import React from "react";

import {
  Card,
  Tabs,
  Button
} from "antd";
import "./cajaActual.css";
import ListaVentasCajaActual from "./listaVentasCajaActual";
import AccionesCajaActual from "./accionesCajaActual";
import Herramientas from "./herramientas/herramientas";

function TabCajaActual({ fetchAll })
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
        <AccionesCajaActual />
        <Herramientas />
        <ListaVentasCajaActual />
        <div>
          <div>
            Total efectivo: S/ 420.00
          </div>
          <div>
            Total tarjeta: S/ 120.00
          </div>
        </div>
        
      </div>
    </Card>
  );
}

export default TabCajaActual;
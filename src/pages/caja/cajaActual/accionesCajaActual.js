import React, { useState } from "react";

import {
  Card,
  Tabs,
  Button
} from "antd";
import "./cajaActual.css";
import VentaForm from "../venta/ventaForm";

function AccionesCajaActual({ fetchAll })
{
  const [showModalFormVenta, setShowModalFormVenta] = useState(false);
  const [showModalBajaUsuario, setShowModalBajaUsuario] = useState(false);
  const [ventaId, setVentaId] = useState(1);

  const filtrarPor = (tipo) => {
    fetchAll( null, tipo);
  };

  const crearUsuario = () => {
    setVentaId(1);
    setShowModalFormVenta(true);
  };
  
  const abrirCaja = () => {
  };

  const cerrarCaja = () => {
  };

  const crearNuevaVenta = () => {
    setShowModalFormVenta(true);
  };

  const crearNuevoAlquiler = () => {
  };

  const verPedidosPendientesAtencion = () => {
  };

  const confirmarDevoluciones = () => {
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
          <Button className="btn-abrirCaja" onClick={abrirCaja} disabled>
            Abrir caja
          </Button>
          <Button className="btn-cerrarCaja" onClick={cerrarCaja}>Cerrar caja</Button>
          <Button className="btn-nuevaVenta" onClick={crearNuevaVenta}>Nueva venta</Button>
          <Button className="btn-nuevoAlquiler" onClick={crearNuevoAlquiler}>Nuevo alquiler</Button>
          <Button className="btn-pedidosPendientes" onClick={verPedidosPendientesAtencion}>Pedidos pendientes de atención</Button>
          <Button className="btn-confirmarDevoluciones" onClick={confirmarDevoluciones}>Confirmar devoluciones</Button>
        </div>
        <VentaForm 
          status={showModalFormVenta}
          handleClose={setShowModalFormVenta}
          usuarioId={ventaId}
        />
      </Card>
    </div>
  );
}

export default AccionesCajaActual;
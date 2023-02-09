import React, { useState } from "react";

import {
  Card,
  Tabs,
  Button
} from "antd";
import "./herramientas.css";
import CancelarTransaccion from "./cancelarTransaccion";
import VerPagos from "./verPagos";

function Herramientas({ fetchAll })
{
  const [showModalCancelarTransaccion, setShowModalCancelarTransaccion] = useState(false);
  const [showModalVerPagos, setShowModalVerPagos] = useState(false);
  const [showModalBajaUsuario, setShowModalBajaUsuario] = useState(false);
  const [usuarioId, setUsuarioId] = useState(1);

  const filtrarPor = (tipo) => {
    fetchAll( null, tipo);
  };

  const crearUsuario = () => {
    setUsuarioId(1);
  };
  
  const editarUsuario = (id) => {
    setUsuarioId(2);
  };

  const darBajaUsuario = (id) => {
    setUsuarioId(3);
    setShowModalBajaUsuario(true);
  };

  const abrirCaja = () => {

  };
  const verTransaccion = () => {
    
  };
  const cancelarTransaccion = () => {
    setShowModalCancelarTransaccion(true);
  };
  const verPagos = () => {
    setShowModalVerPagos(true);
  };
  const imprimir = () => {
    
  };
  const filtrar = () => {
    
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
          <Button className="btn-verTrans" onClick={verTransaccion}>Ver transacción</Button>
          <Button className="btn-cancelarTrans" onClick={cancelarTransaccion}>Cancelar transacción</Button>
          <Button className="btn-verPagos" onClick={verPagos}>Ver pagos</Button>
          <Button className="btn-imprimirTrans" onClick={imprimir}>Imprimir</Button>
          <Button className="btn-filtrarTrans" onClick={filtrar}>Filtrar</Button>
        </div>
      </Card>
      <CancelarTransaccion 
        status={showModalCancelarTransaccion}
        handleClose={setShowModalCancelarTransaccion}
        usuarioId={usuarioId}
      />
      <VerPagos
        status={showModalVerPagos}
        handleClose={setShowModalVerPagos}
        usuarioId={usuarioId}
      />
    </div>
  );
}

export default Herramientas;
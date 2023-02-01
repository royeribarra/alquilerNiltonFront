import React from "react";
import {
  Card,
  Button,
  Input,
  Form
} from "antd";
import "./filtroCliente.css";

function FiltroCliente({ fetchAll })
{
  const filtrarPor = (tipo) => {
    fetchAll( null, tipo);
  };

  return(
    <Card
      bordered={false}
      className="tablespace mb-24 card-filtro-cliente"
    >
      <div>
        <Button className="cliente-todos" onClick={()=>filtrarPor()}>Todos los clientes</Button>
        <Button className="cliente-visibles" onClick={()=>filtrarPor(2)}>Visibles</Button>
        <Button className="cliente-no-visibles" onClick={()=>filtrarPor(3)}>No visibles</Button>
        <Button className="cliente-lista-negra" onClick={()=>filtrarPor(4)}>Lista negra</Button>
      </div>
    </Card>
  );
}

export default FiltroCliente;
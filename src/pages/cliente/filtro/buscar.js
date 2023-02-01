import React, { useState } from "react";
import {
  Card,
  Button,
  Input,
  Form,
  Select
} from "antd";
import { RiDeleteBinLine } from 'react-icons/ri';
import "./buscar.css";
import { NavLink } from "react-router-dom";
import ModalEliminarCliente from "../eliminar/modalEliminarCliente";
import ModalCambiarTipo from "./modalCambiarTipo";

const { Search } = Input;

function Buscar()
{
  const [showDelModal, setShowDelModal] = useState(false);
  const [showCambiarTipoModal, setShowCambiarTipoModal] = useState(false);
  const [activeRows, setActiveRows] = useState({});

  const onSearch = (value) => console.log(value);

  const deleteRecords = (id, row) => {
    setActiveRows(row);
    setShowDelModal(true);
  };

  const handleChangeTipo = (value, row) => {
    setActiveRows(row);
    setShowCambiarTipoModal(true);
    console.log(`selected ${value}`);
  };

  return(
    <Card
      bordered={false}
      className="criclebox tablespace mb-24 card-buscar-cliente"
    >
      <div className="bloque-buscar crear-cliente">
        <NavLink to="/crear-cliente" >
          <Button>Crear Cliente</Button>
        </NavLink>
        
      </div>
      <ModalEliminarCliente
        status={showDelModal}
        handleClose={setShowDelModal}
        activeRows={activeRows}
      />
      <div className="bloque-buscar eliminar-cliente">
        <Button onClick={deleteRecords}>
          <RiDeleteBinLine />
        </Button>
      </div>
      <ModalCambiarTipo 
        status={showCambiarTipoModal}
        handleClose={setShowCambiarTipoModal}
        activeRows={activeRows}
      />
      <div className="bloque-buscar cambiar-tipo">
        <Select
          onChange={handleChangeTipo}
          defaultValue="lucy"
          style={{
            width: 120,
          }}
          options={[
            {
              value: 'lucy',
              label: 'Lucy',
            },
            {
              value: 'royer',
              label: 'royer',
            },
          ]}
        />
      </div>
      <div className="bloque-buscar confirmar-accion">
        <Button>Confirmar</Button>
      </div>
      <div className="bloque-buscar buscar-cliente">
        <Search
          placeholder="Buscar cliente..."
          allowClear
          onSearch={onSearch}
        />
      </div>
      
      
    </Card>
  );
}

export default Buscar;
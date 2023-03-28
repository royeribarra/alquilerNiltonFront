import React, { useState } from "react";

import {
  Card,
  Col,
  Row,
  Button,
  Select,
  Input,
  Typography
} from "antd";
import ProductoForm from "./productoForm/productoForm";
import { useSelector } from "react-redux";

const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

function AccionesProducto({ fetchAll })
{
  const [showModalFormProducto, setShowModalFormProducto] = useState(false);
  const [showModalBajaUsuario, setShowModalBajaUsuario] = useState(false);
  const [tipoProductoForm, setTipoProductoForm] = useState({
    id: 1, nombre: ""
  });
  const [ventaId, setVentaId] = useState(1);

  const filtrarPor = (tipo) => {
    fetchAll( null, tipo);
  };

  const crearUsuario = () => {
    setVentaId(1);
    setShowModalFormProducto(true);
  };
  
  const abrirCaja = () => {
  };

  const cerrarCaja = () => {
  };

  const crearNuevaVenta = () => {
    setShowModalFormProducto(true);
  };

  const crearNuevoAlquiler = () => {
  };

  const verPedidosPendientesAtencion = () => {
  };

  const confirmarDevoluciones = () => {
  };

  const buscarProducto = (e, data) => {
    console.log(data)
  }

  const crearProducto = (value, row) => {
    setShowModalFormProducto(true);
    setTipoProductoForm({id: value, nombre: row.nombre});
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
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} md={8}>
              <Search
                className="buscar-cliente"
                placeholder="Buscar producto..."
                allowClear
                onSearch={buscarProducto}
              />
            </Col>
            <Col className="gutter-row" xs={24} md={16}>
              <Select 
                defaultValue="nuevo" 
                className="btn-cerrarCaja" 
                style={{ height: "100%"}}
                onChange={crearProducto}
              >
                <Option value="nuevo" disabled>Nuevo</Option>
                <Option value="1" nombre="terno">Terno</Option>
                <Option value="2" nombre="Pantalón">Pantalón</Option>
                <Option value="3" nombre="Corbata">Corbata</Option>
              </Select>
              <Button className="btn-cerrarCaja" onClick={cerrarCaja}>Cambia estado</Button>
              <Button className="btn-nuevaVenta" onClick={crearNuevaVenta}>Editar</Button>
              <Button className="btn-nuevoAlquiler" onClick={crearNuevoAlquiler}>Conf. precio</Button>
              <Button className="btn-pedidosPendientes" onClick={verPedidosPendientesAtencion}>Imprimir</Button>
            </Col>
          </Row>
          
          
        </div>
        <ProductoForm 
          status={showModalFormProducto}
          handleClose={setShowModalFormProducto}
          tipoProductoForm={tipoProductoForm}
        />
      </Card>
    </div>
  );
}

export default AccionesProducto;
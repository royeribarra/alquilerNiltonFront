import React, { useState } from "react";
import {
  Rate,
  Form,
  Col,
  Input,
  Select,
  DatePicker,
  Card,
  Row,
  Button,
  InputNumber
} from "antd";
import { NavLink } from "react-router-dom";
import Cliente from "../cliente/cliente";
import { ClienteService } from "../../../servicios/clienteService";
import { useDispatch, useSelector } from "react-redux";
import { selectCliente } from "../../../redux/actions/clienteActions";

const { Search } = Input;
const { Option } = Select;

const SearchInput = ({determinarProceso, placeholder, style}) => {
  const state = useSelector((state) => state);
  const { clienteSelected } = state.cliente;
  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  const handleSearch = (newValue) => {
    if (newValue) {
      fetch(newValue, setData);
    } else {
      setData([]);
    }
  };

  const handleChange = (newValue, data) => {
    setValue(newValue);
    determinarProceso(newValue, data);
  };

  const options = data.map((d) => <Option key={d.id} value={d.id}>{d.nombres}</Option>);
  return (
    <Select
      className="buscar-cliente"
      showSearch
      value={clienteSelected.nombres + ' ' + clienteSelected.apellidos}
      placeholder={placeholder}
      style={style}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      onChange={handleChange}
      notFoundContent={null}
    >
      {options}
    </Select>
  );
};

function InformacionCliente()
{
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { clienteSelected } = state.cliente;

  const clienteService = new ClienteService();
  const [formInfoCliente] = Form.useForm();
  const [showModalCliente, setShowModalCliente] = useState(false);

  const obtenerCliente = (e, data) => {
    console.log(data)
  }

  const onFinish = () => {

  };

  const crearCliente = () => {
    setShowModalCliente(true);
  };

  const editarCliente = () => {
    setShowModalCliente(true);
  };

  const buscarCliente = (dni) => {
    clienteService.searchClientePorDni(dni).then(({data})=> {
      dispatch(selectCliente(data));
      console.log(data)
      formInfoCliente.setFieldsValue({
        clienteId: data ? data.nombres : '',
        cantidadVisitas: data ? data.nombres : '',

      });
    });
  };
  
  return(
    <div>
      <Form
        layout="vertical"
        form={formInfoCliente}
      >
        <Card
          className="card-informacion-cliente"
          title="Información cliente"
          extra={
            <div>
              <Button style={{ padding: "0 5px", margin: "0 5px" }} onClick={crearCliente}>Crear</Button>
              {
                clienteSelected ? 
                <Button style={{ padding: "0 5px", margin: "0 5px" }} onClick={editarCliente}>Editar</Button> : ''
              }
            </div>
          }
        >
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} md={8}>
              <Form.Item
                name="dni"
              >
              <Search
                className="buscar-cliente"
                placeholder="Dni: ..."
                allowClear
                onSearch={buscarCliente}
              />
              </Form.Item>
              
            </Col>
            <Col className="gutter-row" xs={24} md={16} >
              <Form.Item
                name="clienteId"
              >
                <SearchInput
                  placeholder="Buscar cliente..."
                  determinarProceso={obtenerCliente}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={8} >
              <Form.Item name="cantidadVisitas" label="Número de visitas">
                <InputNumber className="cantidad-visitas" />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={16} >
              <Form.Item name="estrellas" label="Cliente normal">
                <Rate />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12} >
              <Form.Item
                label="Fecha entrega"
                name="fechaEntrega"
              >
                <DatePicker 
                  showTime = {{ use12hours: true, format: "hh:mm a" }}  
                  className="cliente-fecha-entrega" 
                  placeholder="Fecha de entrega" 
                  format="DD/MM/YYYY hh:mm a"
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" xs={24} md={12} >
              <Form.Item
                label="Fecha devolución"
                name="fechaDevolucion"
              >
                <DatePicker 
                  showTime = {{ use12hours: true, format: "hh:mm a" }} 
                  className="cliente-fecha-devolucion" 
                  placeholder="Fecha devolución" 
                  format="DD/MM/YYYY hh:mm a"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
      <Cliente 
        status={showModalCliente}
        handleClose={setShowModalCliente}
      /> 
    </div>
  );
}

export default InformacionCliente;
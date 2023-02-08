import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Table,
  Button,
  Tabs,
  Form,
} from "antd";
import { UsuarioService } from "../../servicios/usuarioService";
import TabUsuarios from "./usuarios/tabUsuarios";
import TabAutorizacion from "./autorizacion/tabAutorizacion";
import TabAsignacionRolUsuario from "./asignacionRolUsuario/tabAsignacionRolUsuario";

const {TabPane} = Tabs;

const tabItems = [
  {
    key: '1',
    label: `Usuarios`,
    children: <TabUsuarios />,
  },
  {
    key: '2',
    label: `Roles y asignación de usuarios`,
    children: <TabAsignacionRolUsuario />,
  },
  {
    key: '3',
    label: `Autorización`,
    children: <TabAutorizacion />,
  },
];

function PageUsuario()
{
  const usuarioService = new UsuarioService("wiqli/productos");
  const [rows, setRows] = useState([]);
  const [activeRow, setActiveRow] = useState({});
  const [showDelModal, setShowDelModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [data, setData] = useState([]);
  const [form] = Form.useForm();
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  });

  const onChange = (e) => console.log(`radio checked:${e.target.value}`);

  return(
    <div>
      <Tabs defaultActiveKey="1" onChange={onChange} className="tabs-page-usuarios">
        {tabItems.map(({ key, label, children }) => (
          <TabPane tab={label} key={key}>
            {children}
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
}

export default PageUsuario;
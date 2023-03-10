import React from "react";
import {
  Tabs,
} from "antd";
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
  const onChange = (e) => {
    console.log(e);
  }

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
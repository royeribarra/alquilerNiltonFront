
import React from "react";
import {
  Tabs,
} from "antd";
import RequisitosVenta from "./requisitosVenta/requisitosVenta";

const {TabPane} = Tabs;

const tabItems = [
  {
    key: '1',
    label: `Ventas`,
    children: <RequisitosVenta />,
  },
  {
    key: '2',
    label: `Alquileres`,
    children: "hla2",
  },
  {
    key: '3',
    label: `Alquileres por entregar`,
    children: "hola",
  },
  {
    key: '4',
    label: `Ventas por entregar`,
    children: "hla2",
  },
  {
    key: '5',
    label: `Pendientes de devolución`,
    children: "hola",
  },
  {
    key: '6',
    label: `Ordenes`,
    children: "hla2",
  },
  {
    key: '7',
    label: `Catálogo de clientes`,
    children: "hla2",
  },
];

function PageRecepcionRequisitos()
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

export default PageRecepcionRequisitos;
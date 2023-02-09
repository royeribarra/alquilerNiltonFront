import React from "react";
import {
  Tabs,
} from "antd";
import TabCajaActual from "./cajaActual/tabCajaActual";
import TabCajasAnteriores from "./cajasAnteriores/tabCajasAnteriores";

const {TabPane} = Tabs;

const tabItems = [
  {
    key: '1',
    label: `Caja Actual`,
    children: <TabCajaActual />,
  },
  {
    key: '2',
    label: `Cajas Anteriores`,
    children: <TabCajasAnteriores />,
  },
];

function PageCaja()
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

export default PageCaja;
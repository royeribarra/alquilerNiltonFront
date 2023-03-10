import React from "react";

import {
  Card,
  Tabs
} from "antd";
import "./clienteForm.css";
import DatosGenerales from "../datosGenerales/datosGenerales";
import LibretaDirecciones from "../libretaDirecciones/libretaDirecciones";

const {TabPane} = Tabs;

function ClienteForm()
{
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: `Datos generales`,
      children: <DatosGenerales />,
    },
    {
      key: '2',
      label: `Libreta de direcciones`,
      children: <LibretaDirecciones />,
    },
  ];
  
  return(
    <div className="tabled">
      <Card
        bordered={false}
        className="criclebox tablespace mb-24"
        title="Crear cliente"
        extra={
          <>
            
          </>
        }
      >
        <Tabs defaultActiveKey="1" onChange={onChange} className="tab-creacion-cliente">
          {items.map(({ key, label, children }) => (
            <TabPane tab={label} key={key}>
              {children}
            </TabPane>
          ))}
        </Tabs>
      </Card>
    </div>
  );
}

export default ClienteForm;
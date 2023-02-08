import React from "react";

import {
  Card,
  Tabs
} from "antd";
import "./usuarioForm.css";

const {TabPane} = Tabs;

function UsuarioForm()
{
  const onChange = (key) => {
    console.log(key);
  };
  
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
      </Card>
    </div>
  );
}

export default UsuarioForm;
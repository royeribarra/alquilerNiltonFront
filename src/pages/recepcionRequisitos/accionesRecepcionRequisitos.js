import React from "react";
import { Card, Button } from "antd";


function AccionesRecepcionRequisitos()
{
  const onChange = (e) => {
    console.log(e);
  }

  return(
    <Card>
      <Button>
        Ver pendientes
      </Button>
      <Button>
        Realizar cobro y recepción de requisitos
      </Button>
      <Button>
        Cancelar transacción
      </Button>
    </Card>
  );
}

export default AccionesRecepcionRequisitos;
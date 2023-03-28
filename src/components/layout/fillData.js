import { GrupoClienteService } from "../../servicios/grupoClienteService";
import { ProfesionService } from "../../servicios/profesionService";
import { TipoDocumentoService } from "../../servicios/tipoDocumentoService";
import { fillProfesiones } from "../../redux/actions/profesionActions";
import { fillGruposCliente } from "../../redux/actions/grupoClienteActions";
import { fillTiposDocumento } from "../../redux/actions/tipoDocumentoActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ClienteService } from "../../servicios/clienteService";
import { fillClientes } from "../../redux/actions/clienteActions";
import { ProductoService } from "../../servicios/productoService";
import { fillProductos } from "../../redux/actions/productosActions";

export default function FillData()
{
  const dispatch = useDispatch();
  const clienteService = new ClienteService();
  const grupoClienteService = new GrupoClienteService();
  const productoService = new ProductoService();
  const profesionService = new ProfesionService();
  const tipoDocumentoService = new TipoDocumentoService();

  useEffect(()=> {
    clienteService.getAllToSelect().then(({data})=> {
      dispatch(fillClientes(data));
    });

    grupoClienteService.getAllToSelect().then(({data})=> {
      dispatch(fillGruposCliente(data));
    });
  
    profesionService.getAllToSelect().then(({data})=> {
      dispatch(fillProfesiones(data));
    });
  
    tipoDocumentoService.getAllToSelect().then(({data})=> {
      dispatch(fillTiposDocumento(data));
    });
    
    productoService.getAllProducts().then(({data})=> {
      dispatch(fillProductos(data));
    });
  
  }, []);

  return(
    <div></div>
  );
};
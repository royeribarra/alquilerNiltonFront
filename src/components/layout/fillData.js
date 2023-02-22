import { GrupoClienteService } from "../../servicios/grupoClienteService";
import { ProfesionService } from "../../servicios/profesionService";
import { TipoDocumentoService } from "../../servicios/tipoDocumentoService";
import { fillProfesiones } from "../../redux/actions/profesionActions";
import { fillGruposCliente } from "../../redux/actions/grupoClienteActions";
import { fillTiposDocumento } from "../../redux/actions/tipoDocumentoActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function FillData()
{
  const dispatch = useDispatch();
  const grupoClienteService = new GrupoClienteService();
  const profesionService = new ProfesionService();
  const tipoDocumentoService = new TipoDocumentoService();

  useEffect(()=> {
    grupoClienteService.getAllToSelect().then(({data})=> {
      dispatch(fillGruposCliente(data));
    });
  
    profesionService.getAllToSelect().then(({data})=> {
      dispatch(fillProfesiones(data));
    });
  
    tipoDocumentoService.getAllToSelect().then(({data})=> {
      dispatch(fillTiposDocumento(data));
    });
  
  }, []);

  return(
    <div></div>
  );
};
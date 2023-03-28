import axios from "axios";
import { MainService } from "./mainService";

export class ClienteService extends MainService {
  constructor(url) {
    super(url);
  }

  storeCliente(body) 
  {
    return axios.post(`${this.clearUrl}/cliente/crear`, body, this.options);
  }

  addDireccionCliente(body, clienteId) 
  {
    return axios.post(`${this.clearUrl}/cliente/${clienteId}/agregar-direccion`, body, this.options);
  }

  editDireccionCliente(body, direccionId) 
  {
    return axios.put(`${this.clearUrl}/direccion-cliente/${direccionId}/editar`, body, this.options);
  }

  deleteDireccionCliente(direccionId) 
  {
    return axios.delete(`${this.clearUrl}/direccion-cliente/${direccionId}/eliminar`, this.options);
  }

  updateCliente(body, id) 
  {
    return axios.put(`${this.clearUrl}/cliente/${id}`, body, this.options);
  }

  searchClientePorDni(dni)
  {
    return axios.get(`${this.clearUrl}/cliente/buscar-dni?dni=${dni}`, this.options);
  }

  getAllToSelect() {
    return axios.get(`${this.clearUrl}/clientes/seleccion/todos`, this.options);
  }
}
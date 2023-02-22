import axios from "axios";
import { MainService } from "./mainService";

export class ClienteService extends MainService {
  constructor(url) {
    super(url);
  }

  storeCliente(body) {
    return axios.post(`${this.clearUrl}/cliente/crear`, body, this.options);
  }

  addDireccionCliente(body, id) {
    return axios.post(`${this.clearUrl}/cliente/${id}/agregar-direccion`, body, this.options);
  }

  updateCliente(body, id) {
    return axios.put(`${this.clearUrl}/cliente/${id}`, body, this.options);
  }
}
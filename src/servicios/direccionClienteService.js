import axios from "axios";
import { MainService } from "./mainService";

export class DireccionClienteService extends MainService {
  constructor(url) {
    super(url);
  }

  getAllRows(clienteId) {
    return axios.get(`${this.clearUrl}/direcciones-cliente/${clienteId}/todos`, this.options);
  }
}
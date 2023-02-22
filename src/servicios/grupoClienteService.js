import axios from "axios";
import { MainService } from "./mainService";

export class GrupoClienteService extends MainService {
  constructor(url) {
    super(url);
  }

  getAllToSelect() {
    return axios.get(`${this.clearUrl}/grupos-cliente/seleccion/todos`, this.options);
  }
}
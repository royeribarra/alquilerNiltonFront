import axios from "axios";
import { MainService } from "./mainService";

export class TipoDocumentoService extends MainService {
  constructor(url) {
    super(url);
  }

  getAllToSelect() {
    return axios.get(`${this.clearUrl}/tipos-documento/seleccion/todos`, this.options);
  }
}
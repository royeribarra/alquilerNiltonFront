import axios from "axios";
import { MainService } from "./mainService";

export class ProfesionService extends MainService {
  constructor(url) {
    super(url);
  }

  getAllToSelect() {
    return axios.get(`${this.clearUrl}/profesiones/seleccion/todos`, this.options);
  }
}
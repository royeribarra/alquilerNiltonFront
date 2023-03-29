import axios from "axios";
import { MainService } from "./mainService";

export class UsuarioService extends MainService {
  constructor(url) {
    super(url);
  }

  createUser(data) {
    return axios.post(`${this.clearUrl}/usuario/crear`, data, this.options);
  }

  getUsersTable() {
    return axios.get(`${this.clearUrl}/usuarios/todos`, this.options);
  }
}
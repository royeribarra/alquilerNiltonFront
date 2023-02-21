import axios from "axios";
import { MainService } from "./mainService";

export class RolService extends MainService {
  constructor(url) {
    super(url);
  }

  storeRol(body) {
    console.log(this.options)
    return axios.post(`${this.clearUrl}/rol/crear`, body, this.options);
  }

  updateRol(body, id) {
    return axios.put(`${this.clearUrl}/rol/${id}`, body, this.options);
  }

  updateState(id)
  {
    return axios.get(`${this.url}/actualizar-estado/${id}`, this.options);
  }
}
import axios from "axios";
import { MainService } from "./mainService";

export class ProductoService extends MainService {
  constructor(url) {
    super(url);
  }

  getAllProducts() {
    return axios.get(`${this.clearUrl}/productos/todos`, this.options);
  }
}
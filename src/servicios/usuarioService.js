import axios from "axios";
import { MainService } from "./mainService";

export class UsuarioService extends MainService {
  constructor(url) {
    super(url);
  }

  uploadCsv(object) {
    return axios.post(`${this.url}/upload-csv`, object, this.options);
  }

  storeProduct(data, header) {
    return axios.post(`${this.url}`, data, this.options);
  }

  updateProduct(data, id) {
    return axios.post(`${this.url}/${id}`, data, this.options);
  }
  
  deleteProduct(data, id) {
    return axios.post(`${this.url}/eliminar/${id}`, data, this.options);
  }

  agregarInventario(id, data) {
    return axios.post(`${this.url}/agregar-inventario/${id}`, data, this.options);
  }

  disminuirInventario(id, data) {
    
    return axios.post(`${this.url}/disminuir-inventario/${id}`, data, this.options);
  }

  todosProductosParaScraping() 
  {
    return axios.get(`${this.url}/relacion-scraping`, this.options);
  }

  updateState(id)
  {
    return axios.get(`${this.url}/actualizar-estado/${id}`, this.options);
  }
}
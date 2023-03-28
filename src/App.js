import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spin } from 'antd';
import ReduxToastr from "react-redux-toastr";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";
import Main from "./components/layout/Main";
import Login from "./pages/Login";
import StorageService from "./servicios/storageService";
import {Buffer} from 'buffer';
import { login } from "./redux/actions/userActions";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import SignUp from "./pages/SignUp";
import Tables from "./pages/Tables";
import Billing from "./pages/Billing";
import Profile from "./pages/Profile";
import PageUsuario from "./pages/usuario/pageUsuario";
import Ventas from "./pages/venta/ventas";
import CrearVenta from "./pages/venta/crearVenta";
import ProductoForm from "./pages/producto/productoForm/productoForm";
import PageCaja from "./pages/caja/pageCaja";
import Clientes from "./pages/cliente/clientes";
import ClienteForm from "./pages/cliente/clienteForm/clienteForm";
import Dashboard from "./pages/Dashboard";
import PageRecepcionRequisitos from "./pages/recepcionRequisitos/pageRecepcionRequisitos";
import PageProducto from "./pages/producto/pageProducto";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { show } = state.loader;
  const { isLoged } = state.user;
  const location = useLocation();
  
  useEffect(()=>{
    const storageService = new StorageService();
    const token = localStorage.getItem("tknData");
    if(token){
      const tknData = JSON.parse(Buffer.from(storageService.getItemObject("tknData"), 'base64'));
      if(tknData.status){
        dispatch(login());
      }
    }
  }, []);

  return (
    <div className="App">
      <Spin tip="Espere por favor..." spinning={show}>
        <Routes>
          {/* <Route exact path="/login" element= {<Login/>} /> */}
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/admin/" element={<Main />} >
            <Route exact path="sign-up" element= {<SignUp/>} />
            
            <Route exact path="" element= {<Dashboard/>} />
            <Route exact path="home" element= {<Dashboard/>} />
            <Route exact path="dashboard" element= {<Dashboard/>} />
            <Route exact path="tables" element= {<Tables/>} />
            <Route exact path="billing" element= {<Billing/>} />
            <Route exact path="profile" element= {<Profile/>} />

            <Route exact path="clientes" element={<Clientes/> } />
            <Route exact path="cliente/:clienteId" element={<ClienteForm/> } />
            <Route exact path="crear-cliente" element={<ClienteForm/> } />

            <Route exact path="usuarios" element={<PageUsuario/> } />

            <Route exact path="ventas" element={<Ventas/> } />
            <Route exact path="crear-venta" element={<CrearVenta/> } />

            <Route exact path="producto" element={<PageProducto/> } />
            <Route exact path="producto/:productoId" element={<ProductoForm/> } />
            <Route exact path="crear-producto" element={<ProductoForm/> } />

            <Route exact path="caja" element={<PageCaja/> } />

            <Route exact path="requisitos" element={<PageRecepcionRequisitos/> } />
            <Route
              exact
              path="*"
              element={<Navigate to={location.pathname.slice(7)} replace />}
            />
          </Route>
          <Route
            exact
            path="/"
            element={<Navigate to="/login" replace />}
          />
          <Route
            exact
            path="*"
            element={<Navigate to="/login" replace />}
          />
        </Routes>
      </Spin>
      <ReduxToastr
        className="toastr__modificar"
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates
        position="top-right"
        getState={(state) => state.toastr}
        progressBar
        closeOnToastrClick
      />
    </div>
  );
}

export default App;

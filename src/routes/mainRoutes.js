import { Routes, Route } from "react-router-dom";
import Tables from "../pages/Tables";
import Billing from "../pages/Billing";
import Rtl from "../pages/Rtl";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/Login";

import Clientes from "../pages/cliente/clientes";
import ClienteForm from "../pages/cliente/clienteForm/clienteForm";
import ProductoForm from "../pages/producto/productoForm/productoForm";
import Ventas from "../pages/venta/ventas";
import CrearVenta from "../pages/venta/crearVenta";
import PageUsuario from "../pages/usuario/pageUsuario";
import PageCaja from "../pages/caja/pageCaja";
import Dashboard from "../pages/Dashboard";
import PageProducto from "../pages/producto/pageProducto";

function MainRoutes()
{
  return(
    <Routes>
      <Route exact path="/sign-up" element= {<SignUp/>} />
      <Route exact path="/sign-in" element= {<SignIn/>}/>
      
      <Route exact path="/" element= {<Dashboard/>} />
      <Route exact path="dashboard" element= {<Dashboard />} />
      <Route exact path="/tables" element= {<Tables/>} />
      <Route exact path="/billing" element= {<Billing/>} />
      <Route exact path="/rtl" element= {<Rtl/>} />
      <Route exact path="/profile" element= {<Profile/>} />

      <Route exact path="/clientes" element={<Clientes/> } />
      <Route exact path="/cliente/:clienteId" element={<ClienteForm/> } />
      <Route exact path="/crear-cliente" element={<ClienteForm/> } />

      <Route exact path="/usuarios" element={<PageUsuario/> } />

      <Route exact path="/ventas" element={<Ventas/> } />
      <Route exact path="/crear-venta" element={<CrearVenta/> } />

      <Route exact path="/producto" element={<PageProducto/> } />
      <Route exact path="/producto/:productoId" element={<ProductoForm/> } />
      <Route exact path="/crear-producto" element={<ProductoForm/> } />

      <Route exact path="/caja" element={<PageCaja/> } />

      {/* <Route
        exact
        path="*"
        element={<Navigate to="/" replace />}
      /> */}
      {/* <Route
        exact
        path="*"
        element={<Navigate to="/dashboard" replace />}
      /> */}
    
    </Routes>
  )
}

export default MainRoutes;
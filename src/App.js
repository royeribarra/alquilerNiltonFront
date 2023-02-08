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
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { show } = state.loader;
  const { isLoged } = state.user;
  const storageService = new StorageService();

  useEffect(()=>{
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
        {
          isLoged ? (<Main />) 
          : (<Routes>
              <Route exact path="/login" element= {<Login/>} />
              {/* <Route
                exact
                path="*"
                element={<Navigate to="/login" replace />}
              /> */}
            </Routes>)
        }
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

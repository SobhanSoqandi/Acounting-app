

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import "./index.css";
import UserLayout from './Components/featurs/Authentication/UserLayout';
import AppLayout from './Components/UI/AppLayout';

function App() {


  return (
    <>

      {/* <Sidebar /> */}

      {/* <ForgetPassword /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/layout" element={<UserLayout />} />
          <Route path="/app" element={<AppLayout />} />
        </Routes>
      </BrowserRouter>





    </>
  )
}

export default App

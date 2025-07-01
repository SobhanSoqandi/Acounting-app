

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import "./index.css";
import UserLayout from './Components/featurs/Authentication/UserLayout';
import AppLayout from './Components/UI/AppLayout';

import ForgetPassword from './Components/featurs/Authentication/ForgetPassword';
import Login from './Components/Pages/Login';
import Register from './Components/Pages/Register';
import UserList from './Components/Pages/UserList';
import Setting from './Components/Pages/Setting';
import Callender from './Components/Pages/Callender';

function App() {

  // const BrowserRouter = createBrowserRouter([
  //   {

  //     children: [
  //       {
  //         path : "/layout" ,
  //         element : <UserLayout />
  //       },

  //     ],
  //   },
  // ])

  return (
    <>

      {/* <Sidebar /> */}

      {/* <ForgetPassword /> */}

      <BrowserRouter>
        {/* <Routes>
          <Route path="/layout" element={<UserLayout />} />
          <Route path="/app" element={<AppLayout />} />
          <Route path="/auth" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users" element={<UserLayout />} >
            <Route path="list" element={<UserList />} />
          </Route>
        </Routes> */}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/layout" element={<UserLayout />} >
            <Route path="setting" element={<Setting />} />
            <Route path="callender" element={<Callender />} />
             <Route path="users" element={<UserList />} />
          </Route>
        </Routes>

      </BrowserRouter>





    </>
  )
}

export default App

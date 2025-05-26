import React from 'react'
import Header from './Header';
import { Outlet } from 'react-router-dom';

function AppLayout({ children }) {
  return (
    <div className="bg-gray-100" >

      <div className="flex" >

        <div className="h-screen m-5 sm:m-0 flex justify-center" >
          {children}
        </div>


        <div className="m-4 w-full" >
          <Outlet /> 
        </div>

      </div>

    </div>
  )
}

export default AppLayout;
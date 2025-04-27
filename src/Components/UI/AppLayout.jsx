import React from 'react'
import Header from './Header';

function AppLayout({ children }) {
  return (
    <div className="bg-gray-200" >
      {/* <Header />
      <div className="grid grid-rows-[auto-1fr] grid-cols-[5rem_1fr] sm:grid-cols-[15rem_1fr] bg-red-400 m-5 rounded-lg" >
        {children}
        <div className="bg-yellow-500 grid-cols-4 " > outlet </div>
      </div> */}

      {/* <Header /> */}

      <div className="flex" >

        <div className="h-screen m-5 sm:m-0 flex justify-center" >
          {children}
        </div>


        <div className="m-5 bg-white w-full" >
          outlet
        </div>

      </div>

    </div>
  )
}

export default AppLayout;
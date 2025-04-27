import React from 'react'
import AppLayout from '../../UI/AppLayout';
import Sidebar from '../../UI/Sidebar';

import { BiCalendar, BiMessage, BiNotification, BiSignal3, BiSignal5, BiSolidDashboard } from "react-icons/bi";
import { TbMessageReportFilled } from "react-icons/tb";
import { TbSettingsFilled } from 'react-icons/tb';
import { IoNotifications } from 'react-icons/io5';
import { HiCalendar } from 'react-icons/hi';


function UserLayout() {
  return (
    <div>
      <AppLayout>


        <Sidebar >

          <li >
            <a href="#" class="relative flex items-center p-2 pl-6 sm:pl-4 hover:text-indigo-600 hover:bg-gradient-to-r from-indigo-200 from-1% via-white via-20% to-white to-90% ">
              <div className="relative" >
                <BiSolidDashboard className="w-5 h-5 " />
              </div>

              <span class="ms-2 hidden sm:block mr-10"> Dashboard </span>
            </a>
          </li>
          <li >
            <a href="#" class="flex items-center p-2 pl-6 sm:pl-4 hover:text-indigo-600 hover:bg-gradient-to-r from-indigo-200 from-1% via-white via-20% to-white to-90% ">

            <div className="relative" >

              <TbMessageReportFilled  className="w-5 h-5" />
              
              <span className="absolute border border-white translate translate-x-1  top-0 right-1 w-1.5 h-1.5  bg-red-500 rounded-full"></span>
              </div>
              <span class="ms-2 hidden sm:block"> Meassage </span>
            </a>
          </li>
          <li  >
            <a href="#" class="flex items-center p-2 pl-6 sm:pl-4 hover:text-indigo-600 hover:bg-gradient-to-r from-indigo-200 from-1% via-white via-20% to-white to-90% ">
              <IoNotifications className="w-5 h-5" />
              <span class="ms-2 hidden sm:block">in voice</span>
            </a>
          </li>
          <li  >
            <a href="#" class="flex items-center p-2 pl-6 sm:pl-4 hover:text-indigo-600 hover:bg-gradient-to-r from-indigo-200 from-1% via-white via-20% to-white to-90% ">
              <HiCalendar className="w-5 h-5" />
              <span class="ms-2 hidden sm:block">callender</span>
            </a>
          </li>
          <li >
            <a href="#" class="flex items-center p-2 pl-6 sm:pl-4 hover:text-indigo-600 hover:bg-gradient-to-r from-indigo-200 from-1% via-white via-20% to-white to-90% ">
              <TbSettingsFilled className="w-5 h-5" />
              <span class="ms-2 hidden sm:block"> setting </span>
            </a>
          </li>
        </Sidebar>


      </AppLayout>
    </div>
  )
}

export default UserLayout;
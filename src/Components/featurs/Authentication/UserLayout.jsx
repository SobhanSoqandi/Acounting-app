import React from 'react'
import AppLayout from '../../UI/AppLayout';
import Sidebar from '../../UI/Sidebar';

import { BiCalendar, BiMessage, BiNotification, BiSignal3, BiSignal5, BiSolidDashboard } from "react-icons/bi";
import { TbMessageReportFilled } from "react-icons/tb";
import { TbSettingsFilled } from 'react-icons/tb';
import { IoNotifications } from 'react-icons/io5';
import { HiCalendar } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';


function UserLayout() {

  const ActiveClass = "flex items-center p-2 pl-6 sm:pl-4 text-indigo-600 bg-gradient-to-r  from-indigo-200 from-1% via-white via-20% to-white to-90%"

  const SidebarLink = [
    { label: "Dashboard", icon: <BiSolidDashboard className="w-5 h-5 " />, path: "Dashboard" },
    { label: "Message", icon: <TbMessageReportFilled className="w-5 h-5" />, path: "Message" },
    { label: "Notifocation", icon: <IoNotifications className="w-5 h-5" />, path: "Notifocation" },
    { label: "callender", icon: <HiCalendar className="w-5 h-5" />, path: "callender" },
    { label: "setting", icon: <TbSettingsFilled className="w-5 h-5" />, path: "setting" },
  ]

  return (
    <div>
      <AppLayout>

        <Sidebar >

     

          {
            SidebarLink.map((item) => (


              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? `${ActiveClass}  flex p-2 gap-x-2 items-center border-white border border-l-0`
                    : ` flex items-center p-2 pl-6 sm:pl-4 hover:text-indigo-600 hover:bg-gradient-to-r from-indigo-200 from-1% via-white via-20% to-white to-90% `
                }
              >
                {item.icon}
                <span class="ms-2 hidden sm:block"> {item.label} </span>

              </NavLink>
            ))
          }


        </Sidebar>

      </AppLayout>
    </div>
  )
}

export default UserLayout;
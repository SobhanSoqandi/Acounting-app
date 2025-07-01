import AppLayout from '../../UI/AppLayout';
import Sidebar from '../../UI/Sidebar';

import { BiSolidDashboard } from "react-icons/bi";
import { TbMessageReportFilled, TbSettingsFilled } from "react-icons/tb";
import { IoNotifications } from 'react-icons/io5';
import { HiCalendar } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaGripLinesVertical } from 'react-icons/fa';

function UserLayout() {

  const ActiveClass = "flex items-center p-2 text-indigo-600 bg-gradient-to-r from-indigo-200 from-1% via-white via-20% to-white to-90%";

  const SidebarClass = "transform transition-all duration-[800ms] ease-in-out flex";

  const SidebarLink = [
    { label: "Dashboard", icon: <BiSolidDashboard className="w-7 h-7 " />, path: "Dashboard" },
    { label: "Message", icon: <TbMessageReportFilled className="w-7 h-7" />, path: "Message" },
    { label: "Notifocation", icon: <IoNotifications className="w-7 h-7" />, path: "Notifocation" },
    { label: "callender", icon: <HiCalendar className="w-7 h-7" />, path: "callender" },
    { label: "setting", icon: <TbSettingsFilled className="w-7 h-7" />, path: "setting" },
  ];

  const [open, setIsOpen] = useState(true);

  return (
    <div >

      <AppLayout>
        <div
          className={`
            ${SidebarClass}
            ${open ? 'translate-x-0 w-20' : '-translate-x-[5.7rem] w-0'}
            ${open ? 'translate-x-0 sm:w-[218px]' : 'sm:-translate-x-[13.7rem]'}
          `}
        >
          <Sidebar>
            {SidebarLink.map((item) => (
              <div key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? `${ActiveClass} flex p-2 items-center border-white border border-l-0`
                      : `flex items-center p-2 hover:text-indigo-600 hover:bg-gradient-to-r from-indigo-200 from-1% via-white via-20% to-white to-90%`
                  }
                >
                  <i className="mx-auto sm:m-0">
                    {item.icon}
                  </i>
                  <span className="ms-2 text-lg hidden sm:block">{item.label}</span>
                </NavLink>
              </div>
            ))}
          </Sidebar>
          <button className="bg-slate-200 w-4 h-16 rounded-r-lg my-auto" onClick={() => setIsOpen(!open)}>
            <FaGripLinesVertical className="text-slate-500" />
          </button>
        </div>
      </AppLayout>
    </div>
  );
}

export default UserLayout;

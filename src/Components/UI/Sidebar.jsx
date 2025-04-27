import { BiCalendar, BiLogoTailwindCss, BiLogOut, BiMessage, BiNotification, BiSignal3, BiSignal5 } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";

function Sidebar({ children }) {
    return (


        <div className="sm:w-[218px] bg-white h-screen flex flex-col justify-between rounded-lg sm:rounded-none" >

            <div>
                <div className="flex justify-center items-center p-4 mb-2">
                    <BiLogoTailwindCss className="w-10 h-10 text-indigo-600" />
                    <h5 className="hidden sm:block font-bold text-xl">Acounting</h5>
                </div>

                {/* Menu Items */}
                <ul className="text-sm text-sidebar sm:w-full space-y-3 m-auto">
                    {children}
                </ul>
            </div>



            <div className="flex flex-col items-center mb-5">
                
                <button className="btn btn--primary hidden sm:block p-2 w-[138px] text-xs ">
                    Upgrade Now
                </button>

                <div className="row sm:flex sm:mx-5 gap-2 items-center pt-2 cursor-pointer mt-4">
                    <img src="img/user-avatar-2.jpg" alt="user" className="w-10 h-10 rounded-xl" />
                    <div className="text-sm hidden sm:block">
                        <h2 className="text-black">username</h2>
                        <span className="text-sidebar">role</span>
                    </div>
                    <IoLogOut className="flex-1 w-5 h-5 sm:w-20 m-auto mt-5 sm:mt-3 text-sidebar " />
                </div>
            </div>

        </div>




    )
}

export default Sidebar;
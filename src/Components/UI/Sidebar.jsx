import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogOut } from "react-icons/io5";

function Sidebar({ children }) {
    return (


        <div className="bg-white h-screen flex flex-col justify-between rounded-lg sm:rounded-none sm:w-[218px]" >

            <div >
                <div className="flex justify-center items-center p-4 mb-2">
                    <BiLogoTailwindCss className="w-10 h-10 text-indigo-600" />
                    <h5 className="hidden font-bold text-xl sm:block">Acounting</h5>
                </div>

                <ul className="text-sm text-sidebar space-y-3 sm:w-full">
                    {children}
                </ul>
            </div>
            <div className="flex flex-col items-center mb-5">

                <button className="btn btn--primary hidden p-2 w-[138px] text-xs sm:block">
                    Upgrade Now
                </button>

                <div className="row gap-2 items-center pt-2 cursor-pointer mt-4 sm:flex sm:mx-5">
                    <img src="img/user-avatar-2.jpg" alt="user" className="w-10 h-10 rounded-xl" />
                    <div className="text-sm hidden sm:block">
                        <h2 className="text-black">username</h2>
                        <span className="text-sidebar">role</span>
                    </div>
                    <IoLogOut className="flex-1 w-5 h-5 m-auto mt-5 text-sidebar sm:w-20 sm:mt-3" />
                </div>
            </div>

        </div>




    )
}

export default Sidebar;
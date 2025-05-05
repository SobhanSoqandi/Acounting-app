import React from 'react'
import Input from '../../UI/Input'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import SingButton from '../../UI/SingButton'
import CheckBoxInput from '../../UI/CheckBoxInput'

function AuthLogin() {
    return (
        <div className="min-w-screen-xl h-screen bg-gray-50 sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-4/12 p-6 sm:w-8/12 w-full bg-white">

                <div >
                    <div className="flex flex-col items-center xl:py-5" >
                        <BiLogoTailwindCss className="w-14 h-14 text-indigo-600" />
                        Log in
                    </div>

                    <div className="lg:grid grid-cols-2 gap-x-4">

                        <SingButton>
                            <FcGoogle className="text-xl" />
                            <span> Google</span>
                        </SingButton>

                        <SingButton>
                            <FaFacebookF className="text-blue-600 text-xl" />
                            <span>Facebook</span>
                        </SingButton>

                    </div>

                    <div className="my-4 border-b text-center">
                        <div
                            className=" px-3 inline-block text-md tracking-wide bg-white transform translate-y-3">
                            Or
                        </div>
                    </div>

                    <Input type="email" label="Email Adress" />
                    <Input type="password" label="Password" />

                    <div className="flex items-center justify-between text-sm">
                       
                       <CheckBoxInput
                       label="Remember Me"
                       />

                        <a className="link--style"> Reset Password </a>
                    </div>


                    <button className="btn btn--primary w-full my-5" > Login </button>

                    <div className="text-center" >
                        <span> Dont have account yet?  </span>
                        <a className="link--style" > New Account </a>
                    </div>

                </div>



            </div>
            <div className="flex-1 bg-transparent text-center hidden lg:flex relative">
                <div className="mx-auto bg-contain bg-center bg-no-repeat">
                    <img className="w-full h-full object-cover" src="img/img-login.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AuthLogin
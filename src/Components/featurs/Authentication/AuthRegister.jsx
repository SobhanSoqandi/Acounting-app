import React from 'react'
import Input from '../../UI/Input'
import { BiLogoTailwindCss } from 'react-icons/bi'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import CheckBoxInput from '../../UI/CheckBoxInput'
import SingButton from '../../UI/SingButton'
import { Link } from 'react-router-dom'

function AuthRegister() {
    return (
        <div className="min-w-screen-xl h-screen bg-gray-50 sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-4/12 p-6 sm:w-8/12 w-full bg-white">

                <div >
                    <div className="flex flex-col items-center xl:py-5" >
                        <BiLogoTailwindCss className="w-14 h-14 text-indigo-600" />
                        Sing Up
                    </div>


                    <div className="lg:grid grid-cols-2 mx-auto gap-x-4">
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
                    <Input type="text" label="Full Name" />
                    <Input type="email" label="Email Adress" />
                    <Input type="text" label="Username" />
                    <Input type="password" label="Password" />

                    <CheckBoxInput
                        label="By creating an account you agree to the terms of use and our privacy policy."
                    />



                    <button className="btn btn--primary w-full my-5" > Login </button>

                    <div className="text-center" >
                        <span> Already have an account?  </span>
                        <Link className="link--style" to="/login" > Login </Link>
                    </div>

                </div>



            </div>
            <div className="flex-1 bg-transparent text-center hidden lg:flex relative">
                <div className="mx-auto bg-contain bg-center bg-no-repeat">
                    <img className="w-full h-full object-cover" src="img/img-register.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AuthRegister
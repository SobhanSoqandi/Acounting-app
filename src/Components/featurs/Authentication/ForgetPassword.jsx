import React from 'react'
import Input from '../../UI/Input';
import { BiLogoTailwindCss } from 'react-icons/bi';

function ForgetPassword() {
  return (

      <section className="bg-gray-100">
        <div className="flex items-center justify-center p-5 mx-auto w-screen h-screen lg:py-0">

          <div className="w-full p-20 bg-white rounded-lg md:mt-0 sm:max-w-lg">
            <div className="flex flex-col items-center py-5" >
              <BiLogoTailwindCss className="w-14 h-14 text-indigo-600" />
              Recovery
            </div>

            <form className="space-y-4 md:space-y-5 mt-10" action="#">
              <Input type="email" label="Email Adress" />
              <button type="submit" className="btn btn--primary w-full">Reset passwod</button>
            </form>
          </div>
        </div>
      </section>

  )
}

export default ForgetPassword;
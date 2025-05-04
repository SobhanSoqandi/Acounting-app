import React from 'react'

function Input({ type, label }) {

   

    return (
        <div>
            <label for={label} className="block my-2 text-md text-[#00000]">{label}</label>
            <input
                id={label}
                type={type}
                className="input--style"
            />
        </div>
    )
}

export default Input;

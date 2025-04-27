import React from 'react'

function Input({type , label }) {
    return (
        <div className="grid grid-cols-1 m-10" >
            <span className="my-2 text-blue-900 " > {label} </span>
            <input className="bg-slate-50 rounded-md p-2 w-56 text-blue-800 " type={type} />
        </div>
    )
}

export default Input;
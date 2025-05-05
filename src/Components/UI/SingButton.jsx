import React from 'react'

function SingButton({ children }) {
    return (
        <div >
            <button className="w-full text-center p-3 my-3 flex items-center justify-center rounded-xl bg-gray-50">
                {children}
            </button>
        </div>
    )
}

export default SingButton
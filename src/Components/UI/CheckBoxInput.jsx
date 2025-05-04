import React from 'react'

function CheckBoxInput({label}) {
    return (
        <div className="flex items-start mt-5 text-sm ">
            <div className="flex items-center h-5">
                <input id={label} type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
            </div>
            <div className="ml-2 text-center " >
                <label for={label}>
                    {label}
                </label>
            </div>

        </div>
    )
}

export default CheckBoxInput
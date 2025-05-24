import React from 'react'
import { TiArrowSortedDown } from 'react-icons/ti'

function Th({lable}) {
    return (
        <div className="flex items-center gap-x-1 py-2" >
            {lable} <TiArrowSortedDown />
        </div>
    )
}

export default Th
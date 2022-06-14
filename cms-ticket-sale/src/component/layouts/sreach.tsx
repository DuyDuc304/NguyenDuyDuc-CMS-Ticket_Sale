import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Sreach = () => {
    return (
        <div className='sreach'>
            <form autoComplete='off' >
                <input className="sreach-input" name='tìm kiếm' type="text" placeholder='Search' />
                <button className="sreach-button"><BiSearch /></button>
            </form>
        </div>
    )
}

export default Sreach
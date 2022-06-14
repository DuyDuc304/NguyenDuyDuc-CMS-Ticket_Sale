import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Sreach = () => {
    return (
        <div className='sreach'>
            <form autoComplete='off' >
                <input name='tìm kiếm' type="text" placeholder='search' />
                <button><BiSearch /></button>
            </form>
        </div>
    )
}

export default Sreach
import React from 'react'
import { FiMail } from 'react-icons/fi'
import { BiBell } from 'react-icons/bi'

const topbar = () => {
    return (
        <div className='acc-notice-mail'>
            <label ><FiMail /></label>
            <label ><BiBell /></label>
            <img id='avt' src="https://tinhte.vn/store/2016/10/3893837_1_1.jpg" alt='avata' />
        </div>
    )
}

export default topbar
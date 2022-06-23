import React from 'react'
import { FiMail } from 'react-icons/fi'
import { BiBell } from 'react-icons/bi'
import { useSelector } from 'react-redux';

const Topbar = () => {
    const userInfo = useSelector((state: any) => state.user);
    return (
        <div className='acc-notice-mail'>
            <label ><FiMail /></label>
            <label ><BiBell /></label>
            <img id='avt' src={userInfo.Avatar} alt='avata' />
        </div>
    )
}

export default Topbar
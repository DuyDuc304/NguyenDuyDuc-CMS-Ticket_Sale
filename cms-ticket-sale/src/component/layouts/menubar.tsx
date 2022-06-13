import React from 'react'
import { BiHomeAlt } from 'react-icons/bi';
import { TbTicket } from 'react-icons/tb'
import { RiFileList3Line } from 'react-icons/ri'
import { IoSettingsOutline } from 'react-icons/io5'
import { MdCopyright } from 'react-icons/md'
import logo from './logo.svg'
type idbtn = {
    buttonid: string
}
export const Menubar = (id: idbtn) => {
    var idbtn: string = id.buttonid;
    const changebutton = (id: string) => {
        const btn: any = document.getElementById(id);
        btn.classList.toggle("button-active");
    }
    return (
        <div className='menubar' onLoad={() => changebutton(idbtn)}>
            <img src={logo} alt="logo" className='menubar-img' />
            <div className="menubar-optionbox">
                <a href="/#" className='notline'>
                    <div className="menubar-btnoption" id='tc'>
                        <p className="menubar-btnoption-icon"><BiHomeAlt /></p>
                        <p className="menubar-btnoption-p">Trang chủ</p>
                    </div>
                </a>
                <a href="/#" className='notline'>
                    <div className="menubar-btnoption" id='qlv'>
                        <p className="menubar-btnoption-icon"><TbTicket /></p>
                        <p className="menubar-btnoption-p">Quản lý vé</p>
                    </div>
                </a>
                <a href="/#" className='notline'>
                    <div className="menubar-btnoption" id='dsv'>
                        <p className="menubar-btnoption-icon"><RiFileList3Line /></p>
                        <p className="menubar-btnoption-p">Đối soát vé</p>
                    </div>
                </a>
                <div className="menubar-btnoption" id='cd'>
                    <p className="menubar-btnoption-icon"><IoSettingsOutline /></p>
                    <p className="menubar-btnoption-p">Cài đặt</p>
                </div>
                <a href="/#" className='notline'><div className="menubar-btn-setting"> Gói dịch vụ</div></a>
            </div>
            <div className="menubar-copyright ">
                <p>Copyright</p>
                <p><MdCopyright /></p>
                <p>2020 Alta Software</p>
            </div>
        </div>
    )
}

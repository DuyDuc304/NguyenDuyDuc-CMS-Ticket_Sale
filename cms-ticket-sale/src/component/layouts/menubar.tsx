import React from 'react'
import { BiHomeAlt } from 'react-icons/bi';
import { TbTicket, TbSettings } from 'react-icons/tb'
import { RiFileList3Line } from 'react-icons/ri'
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
        if (id === 'cd') {
            const gdv: any = document.getElementById('gdv')
            gdv.style.fontWeight = '700'

        }
    }
    return (
        <div className='menubar' onLoad={() => changebutton(idbtn)}>
            <img src={logo} alt="logo" className='menubar-img' />
            <div className="menubar-optionbox">

                <div className="menubar-btnoption" id='tc'>
                    <a href="/#" >
                        <p className="menubar-btnoption-icon"><BiHomeAlt /></p>
                        <p className="menubar-btnoption-p">Trang chủ</p>
                    </a>
                </div>


                <div className="menubar-btnoption" id='qlv'>
                    <a href="/#" className='notline'>
                        <p className="menubar-btnoption-icon"><TbTicket /></p>
                        <p className="menubar-btnoption-p">Quản lý vé</p>
                    </a>
                </div>


                <div className="menubar-btnoption" id='dsv'>
                    <a href="/#" className='notline'>
                        <p className="menubar-btnoption-icon"><RiFileList3Line /></p>
                        <p className="menubar-btnoption-p">Đối soát vé</p>
                    </a>
                </div>

                <div className="menubar-btnoption-setting" id='cd'>
                    <p className="menubar-btnoption-icon"><TbSettings /></p>
                    <p className="menubar-btnoption-p">Cài đặt</p>
                </div>
                <a href="/#" className='notline'><div className="menubar-btn-setting" ><p id='gdv'> Gói dịch vụ</p></div></a>
            </div>
            <div className="menubar-copyright ">
                <p>Copyright</p>
                <p><MdCopyright /></p>
                <p>2020 Alta Software</p>
            </div>
        </div>
    )
}

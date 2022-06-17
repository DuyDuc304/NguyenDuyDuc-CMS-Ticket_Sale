import React from "react";
import { BiSearch } from "react-icons/bi";
import { Menubar } from "../layouts/menubar";
import Nextpage from "../layouts/nextpage";
import Sreach from "../layouts/sreach";
import Topbar from "../layouts/topbar";
import FillterTicket from "./FillterTicket";
import TableTicketChange from "./TableTicketChange";
import './TableTicketChange.css'

export const TicketChange = () => {
    function onSumbit(e: React.SyntheticEvent) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            timkiem: { value: string };
        };
        const timkiem = target.timkiem.value.trim();
        const allelm: any = document.getElementById("tbtc")
        const allrow: any = allelm.children
        if (timkiem !== '') {
            for (let i = 1; i < allrow.length; i++) {
                const allelmr: any = allrow[i].children
                allrow[i].style.display = 'none'
                for (let j = 0; j < allelmr.length; j++) {
                    if (allelmr[j].className === 'ticket-change-col2') {
                        const p: any = allelmr[j].children
                        for (let k = 0; k < p.length; k++) {
                            if (p[k].innerText.toLowerCase().trim() === timkiem.toLowerCase()) {
                                allrow[i].style.display = 'flex'
                            }
                        }

                    }

                }
            }
        } else {
            for (let i = 1; i < allrow.length; i++) {

                allrow[i].style.display = 'flex'
            }
        }
    }
    return (
        <div className='bg'>
            <Sreach />
            <Topbar />
            <Menubar buttonid='dsv' />
            <div className="bgapp-dsv1">
                <label className="titleapp"> Đổi soát vé</label>
                <div className="sreach-qlv" style={{ top: '110px' }}>
                    <form autoComplete='off' onSubmit={onSumbit} >
                        <input className="sreach-input" name='timkiem' type="text" placeholder='Tìm bằng số vé' />
                        <button className="sreach-button"><BiSearch /></button>
                    </form>
                </div>
                <div className="dsv-cds-btn">
                    <div className="add-ServicePack-btn" id="cds" style={{ display: 'none' }}>
                        <p >Chốt đổi soát</p>
                    </div>
                    <a href="/TicketChange" id="xp" className="qlv-download notline" style={{ display: 'none' }}>Xuất file (.csv)</a>
                </div>

                <TableTicketChange />

                <div className="dsv-nextpage"><Nextpage /></div>
            </div>
            <FillterTicket />
        </div>
    )

}
export default TicketChange;
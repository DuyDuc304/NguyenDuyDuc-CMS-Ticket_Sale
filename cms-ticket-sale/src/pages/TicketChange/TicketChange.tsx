import React from "react";
import { BiSearch } from "react-icons/bi";
import { Menubar } from "../../components/menubar";
import Nextpage from "../../components/nextpage";
import Sreach from "../../components/sreach";
import Topbar from "../../components/topbar";
import FillterTicket from "./FillterTicket";
import TableTicketChange from "./TableTicketChange";
import './TableTicketChange.css'

export const TicketChange = () => {
    return (
        <div className='bg'>
            <Sreach />
            <Topbar />
            <Menubar buttonid='dsv' />
            <div className="bgapp-dsv1">
                <label className="titleapp"> Đổi soát vé</label>
                <div className="sreach-qlv" style={{ top: '110px' }}>
                    <form autoComplete='off' >
                        <input className="sreach-input" name='timkiem' type="text" placeholder='Tìm bằng số vé' />
                        <button className="sreach-button"><BiSearch /></button>
                    </form>
                </div>
                <div className="dsv-cds-btn">
                    <div className="add-ServicePack-btn" id="cds" style={{ display: 'none' }}>
                        <p >Chốt đổi soát</p>
                    </div>
                    <a href="/TicketChange" id="xf" className="qlv-download notline" style={{ display: 'none' }}>Xuất file (.csv)</a>
                </div>

                <TableTicketChange />

                <div className="dsv-nextpage"><Nextpage /></div>
            </div>
            <FillterTicket />
        </div>
    )

}
export default TicketChange;
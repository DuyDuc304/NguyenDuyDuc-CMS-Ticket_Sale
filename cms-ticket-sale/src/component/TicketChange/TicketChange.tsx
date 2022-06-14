import React from "react";
import { BiSearch } from "react-icons/bi";
import { Menubar } from "../layouts/menubar";
import Nextpage from "../layouts/nextpage";
import Sreach from "../layouts/sreach";
import Topbar from "../layouts/topbar";
import TableTicketChange from "./TableTicketChange";
import './TableTicketChange.css'
class TicketChange extends React.Component {
    render() {
        return (
            <div className='bg'>
                <Sreach />
                <Topbar />
                <Menubar buttonid='dsv' />
                <div className="bgapp-dsv1">
                    <label className="titleapp"> Đổi soát vé</label>
                    <div className="sreach-qlv" style={{ top: '110px' }}>
                        <form autoComplete='off' >
                            <input className="sreach-input" name='tìm kiếm' type="text" placeholder='Tìm bằng số vé' />
                            <button className="sreach-button"><BiSearch /></button>
                        </form>
                    </div>
                    <div className="dsv-cds-btn">
                        <div className="add-ServicePack-btn">
                            <p >Thêm gói vé</p>
                        </div>
                    </div>

                    <TableTicketChange />

                    <div className="dsv-nextpage"><Nextpage /></div>
                </div>
                <div className="bgapp-dsv2">


                </div>
            </div>
        )
    }
}
export default TicketChange;
import React from "react";
import { BiSearch } from "react-icons/bi";
import { TbFilter } from "react-icons/tb";
import { Menubar } from "../layouts/menubar";
import Nextpage from "../layouts/nextpage";
import Sreach from "../layouts/sreach";
import Topbar from "../layouts/topbar";
import TableTicketManager from "./TableTicketManager";

class TicketManager extends React.Component {
    render() {
        return (
            <div className='bg'>
                <Sreach />
                <Topbar />
                <Menubar buttonid='qlv' />
                <div className="bgapp">
                    <label className="titleapp"> Danh sách vé</label>
                    <div className="sreach-qlv">
                        <form autoComplete='off' >
                            <input className="sreach-input" name='tìm kiếm' type="text" placeholder='Tìm bằng số vé' />
                            <button className="sreach-button"><BiSearch /></button>
                        </form>
                    </div>
                    <div className="qlv-row-button">
                        <div className="qlv-filter">
                            <p style={{ fontSize: '24px' }}><TbFilter /></p>
                            <p>Lọc vé</p>
                        </div>
                        <a href="/TicketManager" className="qlv-download notline">Xuất file (.csv)</a>
                    </div>
                    <TableTicketManager />
                    <div className="qlv-nextpage "><Nextpage /></div>

                </div>
            </div>
        )
    }
}
export default TicketManager;
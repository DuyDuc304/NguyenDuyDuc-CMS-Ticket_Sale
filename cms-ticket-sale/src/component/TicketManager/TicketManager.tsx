import React from "react";
import { BiSearch } from "react-icons/bi";
import { TbFilter } from "react-icons/tb";
import { Daypicker } from "../layouts/Daypicker";
import { Menubar } from "../layouts/menubar";
import Nextpage from "../layouts/nextpage";
import Sreach from "../layouts/sreach";
import Topbar from "../layouts/topbar";
import TableTicketManager from "./TableTicketManager";

class TicketManager extends React.Component {
    TurnOffChangeDate() {
        const bls: any = document.getElementById('bls')
        const chose: any = document.getElementById('chosebox')
        chose.style.display = 'none'
        bls.style.display = 'none'
    }
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
                <div className="block-screen" id="bls">
                    <div className="table-change-ticket-date">
                        <p className="table-change-ticket-date-title">Đổi ngày sử dụng vé</p>
                        <div className="table-change-ticket-date-row-button">
                            <button className="table-change-ticket-date-button-huy" onClick={() => this.TurnOffChangeDate()}> Hủy</button>
                            <button className="table-change-ticket-date-button-luu" onClick={() => {
                                window.location.href = '/TicketManager';
                            }}> Lưu</button>
                        </div>
                        <div className="table-change-ticket-date-col">
                            <div className="table-change-ticket-date-row">
                                <p className="table-change-ticket-date-row-p ">Số vé</p>
                                <label>PKG20210502 </label>
                            </div>
                            <div className="table-change-ticket-date-row">
                                <p className="table-change-ticket-date-row-p ">Số vé</p>
                                <label>Vé cổng - Gói sự kiện</label>
                            </div>
                            <div className="table-change-ticket-date-row">
                                <p className="table-change-ticket-date-row-p ">Tên sự kiện</p>
                                <label>Hội trợ triển lãm hàng tiêu dùng 2021</label>
                            </div>
                            <div className="table-change-ticket-date-row">
                                <p className="table-change-ticket-date-row-p ">Hạn sử dụng</p>
                                <div style={{ marginLeft: '78px', marginTop: '-10px' }}>
                                    <Daypicker />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default TicketManager;
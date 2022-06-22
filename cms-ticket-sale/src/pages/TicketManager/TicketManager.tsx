
import React from "react";
import { BiSearch } from "react-icons/bi";
import { FiCalendar } from "react-icons/fi";
import { TbFilter } from "react-icons/tb";
import DatePicker from "sassy-datepicker";
import { Daypicker } from "../../components/Daypicker";
import { Menubar } from "../../components/menubar";
import Nextpage from "../../components/nextpage";
import Sreach from "../../components/sreach";
import Topbar from "../../components/topbar";
import TableTicketManager from "./TableTicketManager";

export const TicketManager = () => {

    const ChangeChart = (id: string) => {
        const checkngay: any = document.getElementById('checkngay1')
        const checktuan: any = document.getElementById('checktuan1')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const ChangeChart1 = (id: string) => {
        const checkngay: any = document.getElementById('checkngay2')
        const checktuan: any = document.getElementById('checktuan2')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const [date1, setDate1] = React.useState(new Date())
    const handleDateSelect1 = (newDate: any) => {
        setDate1(newDate);
    };
    const [date2, setDate2] = React.useState(new Date())
    const handleDateSelect2 = (newDate: any) => {
        setDate2(newDate);
    };
    function ShowCalenda(idcalen: string) {
        const calen: any = document.getElementById(idcalen)
        const calen1: any = document.getElementById('calen1')
        const calen2: any = document.getElementById('calen2')
        if (calen.id === 'calen1') {
            if (calen1.style.display === 'none') {
                calen.style.display = 'flex'
                const checktngay: any = document.getElementById('checkngay1')
                const checktngay1: any = document.getElementById('checkngay2')
                checktngay.checked = true;
                checktngay1.checked = true;
            } else {
                calen.style.display = 'none'
            }
            calen2.style.display = 'none'
        } else {
            if (calen2.style.display === 'none') {
                calen.style.display = 'flex'
                const checktngay: any = document.getElementById('checkngay1')
                const checktngay1: any = document.getElementById('checkngay2')
                checktngay.checked = true;
                checktngay1.checked = true;
            } else {
                calen.style.display = 'none'
            }
            calen1.style.display = 'none'
        }

    }
    function useticket() {
        const col5: any = document.getElementById('col5')
        const sdv: any = document.getElementById('sdv')
        const csd: any = document.getElementById('csd')
        const chose: any = document.getElementById('chosebox')
        col5.removeChild(csd)
        const div: any = document.createElement('div')
        const label: any = document.createElement('label')
        const p: any = document.createElement('p')
        div.className = 'box-tt-dsd'
        p.innerText = 'Đã sử dụng'
        label.innerText = '•'
        div.appendChild(p)
        div.appendChild(label)
        col5.appendChild(div)
        chose.style.display = 'none'
        sdv.style.pointerEvents = ' none'
        TurnOffUseTicket()
    }
    function ShowFillterTicket() {

        const lv: any = document.getElementById('bls-lv')
        if (lv.style.display === 'none') {
            lv.style.display = 'flex'

        } else {
            lv.style.display = 'none'
        }
    }
    function TurnOffChangeDate() {
        const bls: any = document.getElementById('bls-dnsdv')
        const chose: any = document.getElementById('chosebox')
        chose.style.display = 'none'
        bls.style.display = 'none'
    }
    function TurnOffUseTicket() {
        const xn: any = document.getElementById('bls-xn')
        xn.style.display = 'none'
    }
    function Savechange() {
        const nsd: any = document.getElementById('nsd')
        const bls: any = document.getElementById('bls-dnsdv')
        const chose: any = document.getElementById('chosebox')
        const datechange: any = document.getElementById('datechange')
        nsd.innerText = datechange.innerText
        chose.style.display = 'none'
        bls.style.display = 'none'
    }
    function checktc() {
        const checkdsd: any = document.getElementById('checkdsd')
        const checkcsd: any = document.getElementById('checkcsd')
        const checkhh: any = document.getElementById('checkhh')
        const checktc: any = document.getElementById('checktc')
        if (checktc.checked === true) {
            checkcsd.checked = false
            checkcsd.disabled = true
            checkhh.checked = false
            checkhh.disabled = true
            checkdsd.checked = false
            checkdsd.disabled = true
        } else {
            checkdsd.disabled = false
            checkcsd.disabled = false
            checkhh.disabled = false
        }
    }
    function checkdtc() {
        const checkdtc: any = document.getElementById('checkdtc')
        const checkc1: any = document.getElementById('checkdc1')
        const checkc2: any = document.getElementById('checkdc2')
        const checkc3: any = document.getElementById('checkdc3')
        const checkc4: any = document.getElementById('checkdc4')
        const checkc5: any = document.getElementById('checkdc5')
        if (checkdtc.checked === true) {
            checkc1.checked = false
            checkc1.disabled = true

            checkc2.checked = false
            checkc2.disabled = true

            checkc3.checked = false
            checkc3.disabled = true

            checkc4.checked = false
            checkc4.disabled = true

            checkc5.checked = false
            checkc5.disabled = true
        } else {
            checkc1.disabled = false
            checkc2.disabled = false
            checkc3.disabled = false
            checkc4.disabled = false
            checkc5.disabled = false
        }
    }
    return (
        <div className='bg'>
            <Sreach />
            <Topbar />
            <Menubar buttonid='qlv' />
            <div className="bgapp">
                <label className="titleapp"> Danh sách vé</label>
                <div className="sreach-qlv">
                    <form autoComplete='off' >
                        <input className="sreach-input" name='timkiem' type="text" placeholder='Tìm bằng số vé' />
                        <button className="sreach-button"><BiSearch /></button>
                    </form>
                </div>
                <div className="qlv-row-button">
                    <div className="qlv-filter" onClick={() => ShowFillterTicket()}>
                        <p style={{ fontSize: '24px' }}><TbFilter /></p>
                        <p>Lọc vé</p>
                    </div>
                    <a href="/TicketManager" className="qlv-download notline">Xuất file (.csv)</a>
                </div>
                <TableTicketManager />
                <div className="qlv-nextpage "><Nextpage /></div>
            </div>
            <div className="block-screen" id="bls-dnsdv">
                <div className="change-ticket-date">
                    <p className="change-ticket-date-title">Đổi ngày sử dụng vé</p>
                    <div className="change-ticket-date-row-button">
                        <button className="change-ticket-date-button-huy" onClick={() => TurnOffChangeDate()}> Hủy</button>
                        <button className="change-ticket-date-button-luu" onClick={() => Savechange()}> Lưu</button>
                    </div>
                    <div className="change-ticket-date-col">
                        <div className="change-ticket-date-row">
                            <p className="change-ticket-date-row-p ">Số vé</p>
                            <label>PKG20210502 </label>
                        </div>
                        <div className="change-ticket-date-row">
                            <p className="change-ticket-date-row-p ">Số vé</p>
                            <label>Vé cổng - Gói sự kiện</label>
                        </div>
                        <div className="change-ticket-date-row">
                            <p className="change-ticket-date-row-p ">Tên sự kiện</p>
                            <label>Hội trợ triển lãm hàng tiêu dùng 2021</label>
                        </div>
                        <div className="change-ticket-date-row">
                            <p className="change-ticket-date-row-p ">Hạn sử dụng</p>
                            <div style={{ marginLeft: '78px', marginTop: '-10px' }} id="clen1">
                                <Daypicker />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="block-screen" id="bls-xn">
                <div className="use-ticket">
                    <p className="change-ticket-date-title">Xác nhận sử dụng vé</p>
                    <div className="change-ticket-date-row-button">
                        <button className="change-ticket-date-button-huy" onClick={() => TurnOffUseTicket()}> Hủy</button>
                        <button className="change-ticket-date-button-luu" onClick={() => useticket()}> Xác nhận</button>
                    </div>
                </div>
            </div>
            <div className="block-screen" id="bls-lv">
                <div className="fillter-ticket">
                    <p className="change-ticket-date-title">Lọc vé</p>
                    <button className="fillter-ticket-btn" onClick={() => ShowFillterTicket()}>Lọc</button>

                    <div className="fillter-ticket-col">
                        <div className="item-date-row-fillter-ticket">
                            <div className="item-col-fillter-ticket">
                                <p className="item-date-row-fillter-ticket-p ">Từ ngày</p>
                                <div className="col-daypicker">
                                    <div className="home-calenda-div" onClick={() => ShowCalenda('calen1')}>
                                        <p className='calenda-date' id="datechange"> {date2.toLocaleDateString()}</p>
                                        <p className='calenda-icon' ><FiCalendar /></p>
                                    </div>

                                </div>
                            </div>
                            <div className="item-col-fillter-ticket">
                                <p className="item-date-row-fillter-ticket-p ">Đến ngày</p>
                                <div className="col-daypicker">
                                    <div className="home-calenda-div" onClick={() => ShowCalenda('calen2')}>
                                        <p className='calenda-date' id="datechange"> {date1.toLocaleDateString()}</p>
                                        <p className='calenda-icon' ><FiCalendar /></p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="item-checkbox-fillter-ticket">
                            <p className="item-date-row-fillter-ticket-p">Tình trạng sử dụng</p>
                            <div className="item-checkbox-row-fillter-ticket">
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checktc' type="checkbox" onChange={() => checktc()} />
                                    </div>
                                    <p>Tất cả</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkdsd' type="checkbox" />
                                    </div>
                                    <p>Đã sử dụng</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkcsd' type="checkbox" />
                                    </div>
                                    <p>Chưa sử dụng</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkhh' type="checkbox" />
                                    </div>
                                    <p>Hết hạn</p>
                                </div>
                            </div>
                        </div>
                        <div className="item-checkbox-fillter-ticket" style={{ marginTop: '20px' }}>
                            <p className="item-date-row-fillter-ticket-p">Cổng Check - in</p>
                            <div className="item-checkbox-door-row-fillter-ticket">
                                <label className="CheckBoxSquare">Tất cả
                                    <input type="checkbox" id="checkdtc" onChange={() => checkdtc()}></input>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="CheckBoxSquare">Cổng 1
                                    <input type="checkbox" id="checkdc1" ></input>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="CheckBoxSquare">Cổng 2
                                    <input type="checkbox" id="checkdc2" ></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="item-checkbox-door1-row-fillter-ticket">
                                <label className="CheckBoxSquare">Cổng 3
                                    <input type="checkbox" id="checkdc3" ></input>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="CheckBoxSquare">Cổng 4
                                    <input type="checkbox" id="checkdc4" ></input>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="CheckBoxSquare">Cổng 5
                                    <input type="checkbox" id="checkdc5" ></input>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                        <div className='home-calenda-popup' id='calen2' style={{ marginLeft: '210px', marginTop: '75px' }} >
                            <p >{date1.toLocaleDateString()}</p>
                            <div className='row-check-div'>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkngay2' type="checkbox" onChange={() => ChangeChart1('checkngay2')} />
                                    </div>
                                    <p>Theo ngày</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checktuan2' type="checkbox" onChange={() => ChangeChart1('checktuan2')} />
                                    </div>
                                    <p>Theo tuần</p>
                                </div>
                            </div>
                            <DatePicker selected={date1} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect1} />
                        </div>
                        <div className='home-calenda-popup' id='calen1' style={{ marginTop: '75px' }} >
                            <p >{date2.toLocaleDateString()}</p>
                            <div className='row-check-div'>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checkngay1' type="checkbox" onChange={() => ChangeChart('checkngay1')} />
                                    </div>
                                    <p>Theo ngày</p>
                                </div>
                                <div className="row">
                                    <div className='checkbox-round'>
                                        <input id='checktuan1' type="checkbox" onChange={() => ChangeChart('checktuan1')} />
                                    </div>
                                    <p>Theo tuần</p>
                                </div>
                            </div>
                            <DatePicker selected={date2} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect2} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )

}
export default TicketManager;




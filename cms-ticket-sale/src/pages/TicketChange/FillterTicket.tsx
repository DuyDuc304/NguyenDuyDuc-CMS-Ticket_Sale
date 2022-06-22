import React from 'react'
import './TableTicketChange.css'
import { FiCalendar } from "react-icons/fi";
import DatePicker from 'sassy-datepicker';
const FillterTicket = () => {
    const [date, setDate] = React.useState(new Date())
    const handleDateSelect = (newDate: any) => {
        setDate(newDate);

    }
    function ChuaDoiSoat() {
        const allelm: any = document.getElementById("tbtc")
        const allrow: any = allelm.children
        for (let i = 0; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'flex'
            for (let j = 1; j < allelmr.length; j++) {
                if (allelmr[j].className === "ticket-change-col7") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText !== 'Chưa đối soát') {
                            allrow[i].style.display = 'none'
                        }
                    }
                }

            }
        }
    }
    function DaDoiSoat() {
        const allelm: any = document.getElementById("tbtc")
        const allrow: any = allelm.children
        for (let i = 0; i < allrow.length; i++) {
            const allelmr: any = allrow[i].children
            allrow[i].style.display = 'flex'
            for (let j = 1; j < allelmr.length; j++) {
                if (allelmr[j].className === "ticket-change-col7") {
                    const p: any = allelmr[j].children
                    for (let k = 0; k < p.length; k++) {
                        if (p[k].innerText === 'Chưa đối soát') {
                            allrow[i].style.display = 'none'
                        }
                    }
                }

            }
        }
    }
    function tatca() {
        const allelm: any = document.getElementById("tbtc")
        const allrow: any = allelm.children
        for (let i = 0; i < allrow.length; i++) {

            allrow[i].style.display = 'flex'
        }
    }

    const ShowCalenda = () => {
        const calen: any = document.getElementById('calen')
        if (calen.style.display === 'none') {
            calen.style.display = 'flex'
            const checktngay: any = document.getElementById('checkngay')
            checktngay.checked = true;

        } else {
            calen.style.display = 'none'

        }
    }
    function loc() {
        const checktc: any = document.getElementById('checktc')
        const checkdds: any = document.getElementById('checkdds')
        const checkcds: any = document.getElementById('checkcds')
        const cds: any = document.getElementById('cds')
        const xp: any = document.getElementById('xp')
        if (checktc.checked === true) {
            cds.style.display = 'none'
            xp.style.display = 'none'
            tatca()
        }
        if (checkdds.checked === true) {
            cds.style.display = 'none'
            xp.style.display = 'flex'
            DaDoiSoat()
        }
        if (checkcds.checked === true) {
            cds.style.display = 'flex'
            xp.style.display = 'none'
            ChuaDoiSoat()
        }
    }
    const ChangeCheck = (id: string) => {
        const checktc: any = document.getElementById('checktc')
        const checkdds: any = document.getElementById('checkdds')
        const checkcds: any = document.getElementById('checkcds')
        checktc.checked = false;
        checkcds.checked = false;
        checkdds.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const ChangeChart = (id: string) => {
        const checkngay: any = document.getElementById('checkngay')
        const checktuan: any = document.getElementById('checktuan')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    return (
        <div className="bgapp-dsv2" >
            <label className="title-fillter-ticket-p"> Lọc vé</label>
            <div className="ticket-change-fillter-col">
                <div className="ticket-change-fillter-row-ttds">
                    <p className="ticket-change-fillter-p-ttds">Trạng thái đổi soát</p>
                    <div className="ticket-change-fillter-col-ttds" >
                        <div className="row">
                            <div className='checkbox-round'>
                                <input id='checktc' checked readOnly type="checkbox" onChange={() => ChangeCheck('checktc')} />
                            </div>
                            <p>Tất cả</p>
                        </div>
                        <div className="row">
                            <div className='checkbox-round'>
                                <input id='checkdds' type="checkbox" onChange={() => ChangeCheck('checkdds')} />
                            </div>
                            <p>Đã đổi soát</p>
                        </div>
                        <div className="row">
                            <div className='checkbox-round'>
                                <input id='checkcds' type="checkbox" onChange={() => ChangeCheck('checkcds')} />
                            </div>
                            <p>Chưa đổi soát</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <p className="ticket-change-fillter-p">Loại vé</p>
                    <p style={{ marginLeft: '65px' }}>Vé cổng</p>
                </div>
                <div className='ticket-change-fillter-row'>
                    <p className="ticket-change-fillter-p">Từ ngày</p>
                    <div className='daytime-lock' style={{ background: ' #E0E0E0' }}>
                        <p className='daytime-lock-p'>{new Date().toLocaleDateString()}</p>
                        <label className='daytime-lock-label ' style={{ color: '#A5A8B1' }}><FiCalendar /></label>
                    </div>
                </div>
                <div className='ticket-change-fillter-row'>
                    <p className="ticket-change-fillter-p">Đến ngày</p>
                    <div className='daytime-lock' onClick={() => ShowCalenda()}>
                        <p className='daytime-lock-p'>{date.toLocaleDateString()}</p>
                        <label className='daytime-lock-label'><FiCalendar /></label>
                    </div>
                </div>
                <button className='button-loc' onClick={() => loc()}>Lọc</button>
                <div className='home-calenda-popup' id='calen' style={{ marginLeft: '-16px', marginTop: '250px' }} >
                    <p >{date.toLocaleDateString()}</p>
                    <div className='row-check-div'>
                        <div className="row">
                            <div className='checkbox-round'>
                                <input id='checkngay' type="checkbox" onChange={() => ChangeChart('checkngay')} />
                            </div>
                            <p>Theo ngày</p>
                        </div>
                        <div className="row">
                            <div className='checkbox-round'>
                                <input id='checktuan' type="checkbox" onChange={() => ChangeChart('checktuan')} />
                            </div>
                            <p>Theo tuần</p>
                        </div>
                    </div>
                    <DatePicker selected={date} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect} />
                </div>
            </div>
        </div >
    )
}

export default FillterTicket
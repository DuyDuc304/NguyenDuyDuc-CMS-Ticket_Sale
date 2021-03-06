import React from 'react'
import './TableTicketChange.css'
import { FiCalendar } from "react-icons/fi";
import DatePicker from 'sassy-datepicker';
const FillterTicket = () => {
    const [date, setDate] = React.useState(new Date())
    const handleDateSelect = (newDate: any) => {
        setDate(newDate);

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
        const xf: any = document.getElementById('xf')
        if (checktc.checked === true) {
            cds.style.display = 'none'
            xf.style.display = 'none'

        }
        if (checkdds.checked === true) {
            cds.style.display = 'none'
            xf.style.display = 'flex'

        }
        if (checkcds.checked === true) {
            cds.style.display = 'flex'
            xf.style.display = 'none'

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
            <label className="title-fillter-ticket-p"> L???c v??</label>
            <div className="ticket-change-fillter-col">
                <div className="ticket-change-fillter-row-ttds">
                    <p className="ticket-change-fillter-p-ttds">Tr???ng th??i ?????i so??t</p>
                    <div className="ticket-change-fillter-col-ttds" >
                        <div className="row">
                            <div className='checkbox-round'>
                                <input id='checktc' checked readOnly type="checkbox" onChange={() => ChangeCheck('checktc')} />
                            </div>
                            <p>T???t c???</p>
                        </div>
                        <div className="row">
                            <div className='checkbox-round'>
                                <input id='checkdds' type="checkbox" onChange={() => ChangeCheck('checkdds')} />
                            </div>
                            <p>???? ?????i so??t</p>
                        </div>
                        <div className="row">
                            <div className='checkbox-round'>
                                <input id='checkcds' type="checkbox" onChange={() => ChangeCheck('checkcds')} />
                            </div>
                            <p>Ch??a ?????i so??t</p>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <p className="ticket-change-fillter-p">Lo???i v??</p>
                    <p style={{ marginLeft: '65px' }}>V?? c???ng</p>
                </div>
                <div className='ticket-change-fillter-row'>
                    <p className="ticket-change-fillter-p">T??? ng??y</p>
                    <div className='daytime-lock' style={{ background: ' #E0E0E0' }}>
                        <p className='daytime-lock-p'>{new Date().toLocaleDateString()}</p>
                        <label className='daytime-lock-label ' style={{ color: '#A5A8B1' }}><FiCalendar /></label>
                    </div>
                </div>
                <div className='ticket-change-fillter-row'>
                    <p className="ticket-change-fillter-p">?????n ng??y</p>
                    <div className='daytime-lock' onClick={() => ShowCalenda()}>
                        <p className='daytime-lock-p'>{date.toLocaleDateString()}</p>
                        <label className='daytime-lock-label'><FiCalendar /></label>
                    </div>
                </div>
                <button className='button-loc' onClick={() => loc()}>L???c</button>
                <div className='home-calenda-popup' id='calen' style={{ marginLeft: '-16px', marginTop: '250px' }} >
                    <p >{date.toLocaleDateString()}</p>
                    <div className='row-check-div'>
                        <div className="row">
                            <div className='checkbox-round'>
                                <input id='checkngay' type="checkbox" onChange={() => ChangeChart('checkngay')} />
                            </div>
                            <p>Theo ng??y</p>
                        </div>
                        <div className="row">
                            <div className='checkbox-round'>
                                <input id='checktuan' type="checkbox" onChange={() => ChangeChart('checktuan')} />
                            </div>
                            <p>Theo tu???n</p>
                        </div>
                    </div>
                    <DatePicker selected={date} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect} />
                </div>
            </div>
        </div >
    )
}

export default FillterTicket
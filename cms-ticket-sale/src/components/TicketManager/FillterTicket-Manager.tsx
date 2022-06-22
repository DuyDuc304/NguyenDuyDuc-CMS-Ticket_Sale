import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import DatePicker from 'sassy-datepicker'

export const FillterTicket = () => {

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
    function ShowFillterTicket() {

        const lv: any = document.getElementById('bls-lv')
        if (lv.style.display === 'none') {
            lv.style.display = 'flex'

        } else {
            lv.style.display = 'none'
        }
    }



    return (
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
    )
}

export default FillterTicket
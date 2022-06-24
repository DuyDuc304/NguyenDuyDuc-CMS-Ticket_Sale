import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import DatePicker from 'sassy-datepicker'
import { UpdateTicketDate } from '../../redux/Action'

export const ChangeDateUseTicket = () => {
    var changeid = useSelector((state: any) => state.choseTickket)
    const dispatch = useDispatch()

    function TurnOffChangeDate() {
        const bls: any = document.getElementById('bls-dnsdv')
        bls.style.display = 'none'
    }
    function Savechange() {
        const datechange: any = document.getElementById('datechange')
        const bls: any = document.getElementById('bls-dnsdv')
        var date: string = datechange.innerText
        var data = {
            "Date": date
        }
        console.log(changeid)
        dispatch(
            UpdateTicketDate(data, changeid)
        )

        bls.style.display = 'none'

    }
    const ChangeChart = (id: string) => {
        const checkngay: any = document.getElementById('checkngay')
        const checktuan: any = document.getElementById('checktuan')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const [date, setDate] = React.useState(new Date())
    const handleDateSelect = (newDate: any) => {
        setDate(newDate);

    };
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
    return (
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
                            <div className="col-daypicker">
                                <div className="home-calenda-div" onClick={() => ShowCalenda()}>
                                    <p className='calenda-date' id="datechange"> {date.toLocaleDateString()}</p>
                                    <p className='calenda-icon' ><FiCalendar /></p>
                                </div>
                                <div className='home-calenda-popup' id='calen' style={{ marginTop: '45px' }} >
                                    <p id='datechange'>{date.toLocaleDateString()}</p>
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
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChangeDateUseTicket
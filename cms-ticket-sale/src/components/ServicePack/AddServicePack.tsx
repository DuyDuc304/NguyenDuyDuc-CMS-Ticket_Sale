
import { useState } from 'react'
import { FiCalendar } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import DatePicker from 'sassy-datepicker'
import { useDispatch } from 'react-redux'
import { AddSP } from '../../redux/Action';

const AddServicePack = () => {

    const dispatch = useDispatch()
    function ShowFeelsevice(id: string, u: string, d: string) {
        const drop: any = document.getElementById(id)
        const up: any = document.getElementById(u)
        const down: any = document.getElementById(d)
        if (drop.style.display === 'none') {
            drop.style.display = 'flex'
            up.style.display = 'flex'
            down.style.display = 'none'
        } else {
            drop.style.display = 'none'
            down.style.display = 'flex'
            up.style.display = 'none'
        }
    }
    const ChangeChart1 = (id: string) => {
        const checkngay: any = document.getElementById('checkngay1')
        const checktuan: any = document.getElementById('checktuan1')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const ChangeChart2 = (id: string) => {
        const checkngay: any = document.getElementById('checkngay2')
        const checktuan: any = document.getElementById('checktuan2')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const [date, setDate] = useState(new Date())
    const handleDateSelect = (newDate: any) => {
        setDate(newDate);
    }
    const [date2, setDate2] = useState(new Date())
    const handleDateSelect2 = (newDate: any) => {
        setDate2(newDate);
    }
    function ShowSevicePark(id: string) {

        const add: any = document.getElementById(id)
        if (add.style.display === 'none') {
            add.style.display = 'flex'

        } else {
            add.style.display = 'none'
        }

    }
    function chose(id: string, iput: string) {
        const ip: any = document.getElementById(iput)
        const chose: any = document.getElementById(id)
        ip.innerText = chose.innerText


    }
    function handleaddServicepack() {

        var NamePacket: any = document.getElementById('NamePack')
        var Date: any = document.getElementById('datechange')
        var Time: any = document.getElementById('Time')
        var DateEnd: any = document.getElementById('datechange2')
        var TimeEnd: any = document.getElementById('TimeEnd')
        var TicketPrice: any = document.getElementById('gvgd')
        var TicketComboPrice: any = document.getElementById('gvcb')
        var sove: any = document.getElementById('sove')
        var Status: any = document.getElementById('AddStatus')
        var StatusTicket: boolean = false
        if (Status.innerText === "Đang áp dụng") {
            StatusTicket = true
        }
        var formdata = {
            TicketNumber: "ALT20210501",
            NamePacket: NamePacket.value,
            TypeTicket: "Vé cổng",
            TicketStatus: "Đã sử dụng",
            Date: Date.innerText,
            Time: Time.value,
            DateEnd: DateEnd.innerText,
            TimeEnd: TimeEnd.value,
            TicketPrice: TicketPrice.value,
            TicketComboPrice: TicketComboPrice.value,
            NumberTicketCombo: sove.value,
            Status: StatusTicket
        }
        dispatch(
            AddSP(formdata)
        )
        return (window.location.href = '/Servicepack')
    }
    function ShowCalenda(idcalen: string) {
        const calen: any = document.getElementById(idcalen)
        const goiy1: any = document.getElementById('goiy1')
        const goiy2: any = document.getElementById('goiy2')
        const datechange1: any = document.getElementById('datechange')
        const datechange2: any = document.getElementById('datechange2')
        const calen1: any = document.getElementById('calen1')
        const calen2: any = document.getElementById('calen2')
        if (calen.id === 'calen1') {
            if (calen1.style.display === 'none') {
                calen.style.display = 'flex'
                const checktngay: any = document.getElementById('checkngay1')
                const checktngay1: any = document.getElementById('checkngay2')
                checktngay.checked = true;
                checktngay1.checked = true;
                datechange1.style.display = 'flex'
                goiy1.style.display = 'none'
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
                datechange2.style.display = 'flex'
                goiy2.style.display = 'none'
            } else {
                calen.style.display = 'none'
            }
            calen1.style.display = 'none'
        }

    }
    function CheckGiaVe(id: string) {
        const inputgd: any = document.getElementById('gvgd')
        const inputcb: any = document.getElementById('gvcb')
        const inputsv: any = document.getElementById('sove')
        const checkon: any = document.getElementById(id)
        if (id === 'checkgd') {
            if (checkon.checked === true) {
                inputgd.disabled = false
            } else {
                inputgd.disabled = true
                inputgd.value = null
            }
        } else {
            if (checkon.checked === true) {
                inputcb.disabled = false
                inputsv.disabled = false
            } else {
                inputcb.disabled = true
                inputsv.disabled = true
                inputsv.value = null
                inputcb.value = null
            }
        }
    }
    return (
        <div className="block-screen" id="addsvp"  >
            <div className="popup-sevice-park-div">
                <p className="add-sevice-park-title">Thêm gói vé</p>

                <div className="sevice-park-row-button">
                    <button className="sevice-park-button-huy" onClick={() => ShowSevicePark('addsvp')}>Hủy</button>
                    <button className="sevice-park-button-luu" onClick={() => handleaddServicepack()}>Lưu</button>
                </div>
                <div className="add-sevice-park-col-item ">
                    <p className="add-sevice-park-conten-item">Tên gói vé</p>
                    <input className="input-name-sevice-park" id='NamePack' type="text" autoComplete='off' placeholder="Nhập tên gói vé" />
                    <div className="sevice-park-row-conten">
                        <div className="colum-date-time-picker">
                            <p className="add-sevice-park-conten-item">Ngày sử dụng</p>
                            <div className="row-date-time-picker">
                                <div className="date-time-picker-sevice-park" onClick={() => ShowCalenda('calen1')}>
                                    <p style={{ display: 'none' }} className='date-time-picker-sevice-park-p' id="datechange">{date.toLocaleDateString()}</p>
                                    <p className='date-time-picker-sevice-park-p' id="goiy1" >dd/mm/yy</p>
                                    <p className='calenda-icon' ><FiCalendar /></p>
                                </div>

                                <div className="date-time-picker-sevice-park">
                                    <input className="input-time-sevive-park" type="time" id="Time" />

                                </div>

                            </div>
                        </div>
                        <div className="colum-date-time-picker">
                            <p className="add-sevice-park-conten-item">Ngày hết hạn</p>
                            <div className="row-date-time-picker">

                                <div className="date-time-picker-sevice-park" onClick={() => ShowCalenda('calen2')}>
                                    <p style={{ display: 'none' }} className='date-time-picker-sevice-park-p' id="datechange2"> {date2.toLocaleDateString()}</p>
                                    <p className='date-time-picker-sevice-park-p' id="goiy2" >dd/mm/yy</p>
                                    <p className='calenda-icon' ><FiCalendar /></p>
                                </div>


                                <div className="date-time-picker-sevice-park">
                                    <input className="input-time-sevive-park" type="time" id="TimeEnd" />


                                </div>
                            </div>
                        </div>

                    </div>
                    <p className="add-sevice-park-conten-item">Giá vé áp dụng</p>
                    <div className="row-gia-ve" >
                        <div className="check-box-money">
                            <label className="CheckBoxSquare">
                                <input type="checkbox" id="checkgd" onChange={() => CheckGiaVe('checkgd')}></input>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <p>Vé lẻ (vnđ/vé) với giá</p>
                        <input id="gvgd" disabled className="input-number-monney-ticket" type="number" placeholder="Nhập giá vé" />
                        <p>/vé</p>
                    </div>
                    <div className="row-gia-ve" >
                        <div className="check-box-money">
                            <label className="CheckBoxSquare">
                                <input type="checkbox" id="checkcb" onChange={() => CheckGiaVe('checkcb')}></input>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <p>Combo vé với giá</p>
                        <input id="gvcb" disabled className="input-number-monney-ticket" type="number" placeholder=" Nhập giá vé" />
                        <p>/</p>
                        <input id="sove" disabled type="number" className="input-number-ticket" placeholder="Số vé" />
                        <p>vé</p>
                    </div>
                    <p className="add-sevice-park-conten-item">Tình trạng</p>
                    <div className="row-tt-sevice-park" onClick={() => ShowFeelsevice('drdf', 'up', 'down')}>
                        <p id="AddStatus">Chọn tình trạng</p>
                        <label id="down" ><IoIosArrowDown /></label>
                        <label id="up" style={{ display: 'none' }}><IoIosArrowUp /></label>
                    </div>
                    <div className="row">
                        <p style={{ color: 'red', fontSize: '18px', fontWeight: '600', marginRight: '5px' }}>*</p>
                        <p className="ttbc">Là thông tin bắt buộc</p>
                    </div>
                    <div id="drdf" className="dropdownfeel" onClick={() => ShowFeelsevice('drdf', 'up', 'down')}>
                        <div className="dropdownfeel-item" onClick={() => chose('chose-dad', "AddStatus")}><p id="chose-dad">Đang áp dụng</p></div>
                        <div className="dropdownfeel-item" onClick={() => chose('chose-t', "AddStatus")}><p id="chose-t">Tắt</p></div>
                    </div>
                    <div className='home-calenda-popup' id='calen1' style={{ marginLeft: '0px', marginTop: '160px' }} >
                        <p >{date.toLocaleDateString()}</p>
                        <div className='row-check-div'>
                            <div className="row">
                                <div className='checkbox-round'>
                                    <input id='checkngay1' type="checkbox" onChange={() => ChangeChart1('checkngay1')} />
                                </div>
                                <p>Theo ngày</p>
                            </div>
                            <div className="row">
                                <div className='checkbox-round'>
                                    <input id='checktuan1' type="checkbox" onChange={() => ChangeChart1('checktuan1')} />
                                </div>
                                <p>Theo tuần</p>
                            </div>
                        </div>
                        <DatePicker selected={date} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect} />
                    </div>
                    <div className='home-calenda-popup' id='calen2' style={{ marginLeft: '338px', marginTop: '160px' }} >
                        <p >{date2.toLocaleDateString()}</p>
                        <div className='row-check-div'>
                            <div className="row">
                                <div className='checkbox-round'>
                                    <input id='checkngay2' type="checkbox" onChange={() => ChangeChart2('checkngay2')} />
                                </div>
                                <p>Theo ngày</p>
                            </div>
                            <div className="row">
                                <div className='checkbox-round'>
                                    <input id='checktuan2' type="checkbox" onChange={() => ChangeChart2('checktuan2')} />
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

export default AddServicePack


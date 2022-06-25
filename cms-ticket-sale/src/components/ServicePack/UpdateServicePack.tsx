
import React, { useState } from 'react'
import { FiCalendar } from 'react-icons/fi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useSelector } from 'react-redux'
import DatePicker from 'sassy-datepicker'

const UpdateServicePack = () => {

    var idSP = useSelector((state: any) => (state.choseServicepack))
    var SP = useSelector((state: any) => (state.ServicePackData))

    var SPUpdate: any = SP.find((SPU: any) => (
        SPU.id === idSP
    ))
    console.log(SPUpdate.id)



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
    const [date3, setDate3] = useState(new Date())
    const handleDateSelect3 = (newDate: any) => {
        setDate3(newDate);
    }
    const [date4, setDate4] = useState(new Date())
    const handleDateSelect4 = (newDate: any) => {
        setDate4(newDate);
    }
    function ShowCalenda2(idcalen: string) {
        const calen: any = document.getElementById(idcalen)
        const calen1: any = document.getElementById('calen3')
        const calen2: any = document.getElementById('calen4')
        if (calen.id === 'calen3') {
            if (calen1.style.display === 'none') {
                calen.style.display = 'flex'
                const checktngay: any = document.getElementById('checkngay3')
                const checktngay1: any = document.getElementById('checkngay4')
                checktngay.checked = true;
                checktngay1.checked = true;
            } else {
                calen.style.display = 'none'
            }
            calen2.style.display = 'none'
        } else {
            if (calen2.style.display === 'none') {
                calen.style.display = 'flex'
                const checktngay: any = document.getElementById('checkngay3')
                const checktngay1: any = document.getElementById('checkngay4')
                checktngay.checked = true;
                checktngay1.checked = true;
            } else {
                calen.style.display = 'none'
            }
            calen1.style.display = 'none'
        }

    }
    function chose(id: string, iput: string) {
        const ip: any = document.getElementById(iput)
        const chose: any = document.getElementById(id)
        ip.innerText = chose.innerText
    }
    function CheckGiaVe1(id: string) {
        const inputgd: any = document.getElementById('gvgd1')
        const inputcb: any = document.getElementById('gvcb1')
        const inputsv: any = document.getElementById('sove1')
        const checkon: any = document.getElementById(id)
        if (id === 'checkgd1') {
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
    const ChangeChart3 = (id: string) => {
        const checkngay: any = document.getElementById('checkngay3')
        const checktuan: any = document.getElementById('checktuan3')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const ChangeChart4 = (id: string) => {
        const checkngay: any = document.getElementById('checkngay4')
        const checktuan: any = document.getElementById('checktuan4')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    function ShowSevicePark(id: string) {

        const add: any = document.getElementById(id)
        if (add.style.display === 'none') {
            add.style.display = 'flex'

        } else {
            add.style.display = 'none'
        }

    }
    return (
        <div className="block-screen" id="updatesvp" >
            <div className="popup-sevice-park-div">
                <p className="update-sevice-park-title">Cập nhật thông tin gói vé</p>
                <div className="sevice-park-row-button">
                    <button className="sevice-park-button-huy" onClick={() => ShowSevicePark('updatesvp')}>Hủy</button>
                    <button className="sevice-park-button-luu" onClick={() => { window.location.href = '/ServicePack' }}>Lưu</button>
                </div>
                <div className="add-sevice-park-col-item " >
                    <div className="sevice-park-row-conten" style={{ marginBottom: '5px' }}>
                        <div className="colum-date-time-picker">
                            <p className="add-sevice-park-conten-item" style={{ marginBottom: '5px' }}>Mã gói vé</p>
                            <input type="text" className="input-msk-sevice-park" placeholder="Nhập mã sự kiện" />
                        </div>
                        <div className="colum-date-time-picker">
                            <p className="add-sevice-park-conten-item" style={{ marginBottom: '5px' }}>Tên gói vé</p>
                            <input className="input-name-sevice-park" type="text" placeholder="Nhập tên gói vé" />
                        </div>
                    </div>
                    <div className="sevice-park-row-conten">
                        <div className="colum-date-time-picker">
                            <p className="add-sevice-park-conten-item">Ngày sử dụng</p>
                            <div className="row-date-time-picker">

                                <div className="date-time-picker-sevice-park" onClick={() => ShowCalenda2('calen3')}>
                                    <p className='date-time-picker-sevice-park-p' id="datechange1"> {date3.toLocaleDateString()}</p>
                                    <p className='calenda-icon' ><FiCalendar /></p>
                                </div>

                                <div className="date-time-picker-sevice-park">
                                    <input className="input-time-sevive-park" type="time" id="clock1" />
                                </div>
                            </div>
                        </div>
                        <div className="colum-date-time-picker">
                            <p className="add-sevice-park-conten-item">Ngày hết hạn</p>
                            <div className="row-date-time-picker">

                                <div className="date-time-picker-sevice-park" onClick={() => ShowCalenda2('calen4')}>
                                    <p className='date-time-picker-sevice-park-p' id="datechange1"> {date4.toLocaleDateString()}</p>
                                    <p className='calenda-icon' ><FiCalendar /></p>
                                </div>

                                <div className="date-time-picker-sevice-park">
                                    <input className="input-time-sevive-park" type="time" id="clock2" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="add-sevice-park-conten-item">Giá vé áp dụng</p>
                    <div className="row-gia-ve" >
                        <div className="check-box-money">
                            <label className="CheckBoxSquare">
                                <input type="checkbox" id="checkgd1" onChange={() => CheckGiaVe1('checkgd1')}></input>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <p>Vé lẻ (vnđ/vé) với giá</p>
                        <input id="gvgd1" disabled className="input-number-monney-ticket" type="number" placeholder="Nhập giá vé" />
                        <p>/vé</p>
                    </div>
                    <div className="row-gia-ve" >
                        <div className="check-box-money">
                            <label className="CheckBoxSquare">
                                <input type="checkbox" id="checkcb1" onChange={() => CheckGiaVe1('checkcb1')}></input>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <p>Combo vé với giá</p>
                        <input id="gvcb1" disabled className="input-number-monney-ticket" type="number" placeholder=" Nhập giá vé" />
                        <p>/</p>
                        <input id="sove1" disabled type="number" className="input-number-ticket" placeholder="Số vé" />
                        <p>vé</p>
                    </div>
                    <p className="add-sevice-park-conten-item">Tình trạng</p>
                    <div className="row-tt-sevice-park" onClick={() => ShowFeelsevice('drdf1', 'up1', 'down1')}>
                        <p id="inputfeel1">Chọn tình trạng</p>
                        <label id="down1" ><IoIosArrowDown /></label>
                        <label id="up1" style={{ display: 'none' }}><IoIosArrowUp /></label>
                    </div>

                    <div className="row">
                        <p style={{ color: 'red', fontSize: '18px', fontWeight: '600', marginRight: '5px' }}>*</p>
                        <p className="ttbc">Là thông tin bắt buộc</p>
                    </div>
                    <div id="drdf1" className="dropdownfeel" onClick={() => ShowFeelsevice('drdf1', 'up1', 'down1')}>
                        <div className="dropdownfeel-item" onClick={() => chose('chosedad1', "inputfeel1")}><p id="chosedad1">Đang áp dụng</p></div>
                        <div className="dropdownfeel-item" onClick={() => chose('choset1', "inputfeel1")}><p id="choset1">Tắt</p></div>
                    </div>
                    <div className='home-calenda-popup' id='calen3' style={{ marginLeft: '0px', marginTop: '160px' }} >
                        <p >{date3.toLocaleDateString()}</p>
                        <div className='row-check-div'>
                            <div className="row">
                                <div className='checkbox-round'>
                                    <input id='checkngay3' type="checkbox" onChange={() => ChangeChart3('checkngay3')} />
                                </div>
                                <p>Theo ngày</p>
                            </div>
                            <div className="row">
                                <div className='checkbox-round'>
                                    <input id='checktuan3' type="checkbox" onChange={() => ChangeChart3('checktuan3')} />
                                </div>
                                <p>Theo tuần</p>
                            </div>
                        </div>
                        <DatePicker selected={date3} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect3} />
                    </div>
                    <div className='home-calenda-popup' id='calen4' style={{ marginLeft: '338px', marginTop: '160px' }} >
                        <p >{date4.toLocaleDateString()}</p>
                        <div className='row-check-div'>
                            <div className="row">
                                <div className='checkbox-round'>
                                    <input id='checkngay4' type="checkbox" onChange={() => ChangeChart4('checkngay4')} />
                                </div>
                                <p>Theo ngày</p>
                            </div>
                            <div className="row">
                                <div className='checkbox-round'>
                                    <input id='checktuan4' type="checkbox" onChange={() => ChangeChart4('checktuan4')} />
                                </div>
                                <p>Theo tuần</p>
                            </div>
                        </div>
                        <DatePicker selected={date4} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect4} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpdateServicePack
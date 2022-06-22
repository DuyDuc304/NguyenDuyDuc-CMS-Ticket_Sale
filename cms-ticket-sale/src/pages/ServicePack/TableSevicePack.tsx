import React from "react"
import './TableSevicePack.css'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import Data1 from '../../assets/data/ListPackService.json'


var time = new Date();

export const TableSevicePack = () => {
    function start() {
        getDATA(function (Data: any) {
            LoadData(Data)
        })
    }
    start()
    function getDATA(callback: any) {
        var constAPI = '  http://localhost:3000/ServicePackData'
        fetch(constAPI).then(function (response) {
            return response.json()
        })
            .then(callback)
    }

    function LoadData(Data: any) {
        var div: any = document.getElementById('dataServicePack')
        var html: any = Data.map(function (item: any) {
            return (<ul className={setcolor(item.id)} key={item.id}>
                <div className="table-sivice-park-col1" > <p>{item.STT}</p></div>
                <div className="table-sivice-park-col2"><p>{item.TicketNumber}</p></div>
                <div className="table-sivice-park-col3"><p>{item.NamePacket}</p></div>
                <div className="table-sivice-park-col4">
                    <div className="colum-date-time">
                        <label> {item.Date} </label>
                        <label> 08:00:00</label>
                    </div>
                </div>
                <div className="table-sivice-park-col5">
                    <div className="colum-date-time">
                        <label> {item.DateEnd} </label>
                        <label> 08:00:00</label>
                    </div>
                </div>
                <div className="table-sivice-park-col6">
                    <div className="number-money-ticket">
                        <label> {item.TicketPrice} VND</label>

                    </div>
                </div>
                <div className="table-sivice-park-col7"><p>{item.TicketComboPrice} </p></div>
                <div className="table-sivice-park-col8">
                    {status(item.Status)}
                </div>
                <div className="table-sivice-park-col9">
                    <div className="row-update" onClick={() => ShowSevicePark('updatesvp')}>
                        <p className="icon-update" ><HiOutlinePencilAlt /></p>
                        <p >Cập nhật</p>
                    </div>
                </div>
            </ul>)
        })

    }


    function ShowSevicePark(id: string) {
        const add: any = document.getElementById(id)
        if (add.style.display === 'none') {
            add.style.display = 'flex'
        } else {
            add.style.display = 'none'
        }
        setdatetime()
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
    function status(status: boolean) {
        if (status) {
            return (
                <div className="box-tt-dad ">
                    <label >•</label>
                    <p>Đang áp dụng</p>
                </div>
            )
        } else {
            return (
                <div className="box-tt-tat ">
                    <label >•</label>
                    <p>Tắt</p>
                </div>
            )
        }
    }
    function setcolor(id: number) {
        if (id % 2 === 1) {
            return 'table-sivice-park-row1'
        } else {
            return 'table-sivice-park-row2'
        }
    }
    function setdatetime() {
        const clock1: any = document.getElementById('clock1')
        const clock2: any = document.getElementById('clock2')
        const checkgd1: any = document.getElementById('checkgd1')
        const gvgd1: any = document.getElementById('gvgd1')
        clock1.value = time.getHours() + ':' + time.getMinutes()
        clock2.value = time.getHours() + ':' + time.getMinutes()
        checkgd1.checked = true
        CheckGiaVe1('checkgd1')
        gvgd1.value = 90000

    }
    return (
        <div className="table-sevice-park" id="tbgdv">
            <div className="table-sivice-park-row">
                <div className="table-sivice-park-col1"><p className="row1-p">STT</p></div>
                <div className="table-sivice-park-col2"><p className="row1-p">Mã vé</p></div>
                <div className="table-sivice-park-col3"><p className="row1-p">Tên gói vé</p></div>
                <div className="table-sivice-park-col4"><p className=" row1-p">Ngày áp dụng</p></div>
                <div className="table-sivice-park-col5"><p className=" row1-p">Ngày hết hạn</p></div>
                <div className="table-sivice-park-col6"><p className="row1-p">Giá vé( VND/ vé)</p></div>
                <div className="table-sivice-park-col7"><p className="row1-p">Giá combo( VND/Combo)</p></div>
                <div className="table-sivice-park-col8"><p className="row1-p">Tình trạng</p></div>
                <div className="table-sivice-park-col9"></div>
            </div>
            <div id="dataServicePack">

            </div>
            {Data1.map((item, index) => (
                <ul className={setcolor(index)} key={item.id}>
                    < div className="table-sivice-park-col1" > <p>{item.STT}</p></div>
                    <div className="table-sivice-park-col2"><p>{item.TicketNumber}</p></div>
                    <div className="table-sivice-park-col3"><p>{item.NamePacket}</p></div>
                    <div className="table-sivice-park-col4">
                        <div className="colum-date-time">
                            <label> {item.Date} </label>
                            <label> 08:00:00</label>
                        </div>
                    </div>
                    <div className="table-sivice-park-col5">
                        <div className="colum-date-time">
                            <label> {item.DateEnd} </label>
                            <label> 08:00:00</label>
                        </div>
                    </div>
                    <div className="table-sivice-park-col6">
                        <div className="number-money-ticket">
                            <label> {item.TicketPrice} VND</label>

                        </div>
                    </div>
                    <div className="table-sivice-park-col7"><p>{item.TicketComboPrice} </p></div>
                    <div className="table-sivice-park-col8">
                        {status(item.Status)}
                    </div>
                    <div className="table-sivice-park-col9">
                        <div className="row-update" onClick={() => ShowSevicePark('updatesvp')}>
                            <p className="icon-update" ><HiOutlinePencilAlt /></p>
                            <p >Cập nhật</p>
                        </div>
                    </div>
                </ul>
            ))}
        </div>
    )

}

export default TableSevicePack
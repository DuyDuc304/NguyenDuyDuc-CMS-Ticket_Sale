import React, { useEffect, useState } from "react"
import './TableSevicePack.css'
import { HiOutlinePencilAlt } from 'react-icons/hi'

export const TableSevicePack = () => {
    const [data, setdata] = useState([])
    //call api bằng json server
    useEffect(() => {
        var constAPI = '  http://localhost:3000/ServicePackData'
        const fetchItem = async () => {
            const result = await fetch(constAPI).then(function (response) {
                return response.json()
            })
            setdata(result)
        }
        fetchItem()

    }, [])

    function ShowSevicePark(id: string) {
        const add: any = document.getElementById(id)
        if (add.style.display === 'none') {
            add.style.display = 'flex'
        } else {
            add.style.display = 'none'
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
    function checkPrice(price: String) {
        if (price !== "") {
            return "VND"
        }
    }
    function checkPriceCombo(price: String) {
        if (price !== "") {
            return "VND/"
        }
    }
    function checkNumberCombo(price: String) {
        if (price !== "") {
            return "vé"
        }
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
            {data.map((item: any, index: any) => (
                <ul className={setcolor(index)} key={item.id}>
                    < div className="table-sivice-park-col1" > <p>{index + 1}</p></div>
                    <div className="table-sivice-park-col2"><p>{item.TicketNumber}</p></div>
                    <div className="table-sivice-park-col3"><p>{item.NamePacket}</p></div>
                    <div className="table-sivice-park-col4">
                        <div className="colum-date-time">
                            <label> {item.Date} </label>
                            <label> {item.Time}</label>
                        </div>
                    </div>
                    <div className="table-sivice-park-col5">
                        <div className="colum-date-time">
                            <label> {item.DateEnd} </label>
                            <label> {item.TimeEnd} </label>
                        </div>
                    </div>
                    <div className="table-sivice-park-col6">
                        <div className="number-money-ticket">
                            <label> {item.TicketPrice} {checkPrice(item.TicketPrice)}</label>
                        </div>
                    </div>
                    <div className="table-sivice-park-col7"><p>{item.TicketComboPrice} {checkPriceCombo(item.TicketComboPrice)}{item.NumberTicketCombo} {checkNumberCombo(item.NumberTicketCombo)} </p></div>
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
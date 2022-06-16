import React from "react"
import './TableSevicePack.css'
import { HiOutlinePencilAlt } from 'react-icons/hi'
var time = new Date();
class TableSevicePack extends React.Component {
    ShowSevicePark(id: string) {
        const add: any = document.getElementById(id)
        if (add.style.display === 'none') {
            add.style.display = 'flex'
        } else {
            add.style.display = 'none'
        }
        this.setdatetime()
    }
    CheckGiaVe1(id: string) {
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
    setdatetime() {
        const clock1: any = document.getElementById('clock1')
        const clock2: any = document.getElementById('clock2')
        const checkgd1: any = document.getElementById('checkgd1')
        const gvgd1: any = document.getElementById('gvgd1')
        clock1.value = time.getHours() + ':' + time.getMinutes()
        clock2.value = time.getHours() + ':' + time.getMinutes()
        checkgd1.checked = true
        this.CheckGiaVe1('checkgd1')
        gvgd1.value = 90000

    }
    render() {
        return (
            <div className="table-sevice-park">
                <div className="table-sivice-park-row1">
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
                <div className="table-sivice-park-row2">
                    <div className="table-sivice-park-col1"><p>1</p></div>
                    <div className="table-sivice-park-col2"><p>ALT20210501</p></div>
                    <div className="table-sivice-park-col3"><p>Gói gia đình </p></div>
                    <div className="table-sivice-park-col4">
                        <div className="colum-date-time">
                            <label> 14/04/2021 </label>
                            <label> 08:00:00</label>
                        </div>
                    </div>
                    <div className="table-sivice-park-col5">
                        <div className="colum-date-time">
                            <label> 14/04/2021 </label>
                            <label> 08:00:00</label>
                        </div>
                    </div>
                    <div className="table-sivice-park-col6">
                        <div className="number-money-ticket">
                            <label> 90.000 VND</label>

                        </div>
                    </div>
                    <div className="table-sivice-park-col7"><p> 360.000 VNĐ/4 Vé</p></div>
                    <div className="table-sivice-park-col8">
                        <div className="box-tt-dad ">
                            <label >•</label>
                            <p>Đang áp dụng</p>
                        </div>
                    </div>
                    <div className="table-sivice-park-col9">
                        <div className="row-update" onClick={() => this.ShowSevicePark('updatesvp')}>
                            <p className="icon-update" ><HiOutlinePencilAlt /></p>
                            <p >Cập nhật</p>
                        </div>
                    </div>
                </div>
                <div className="table-sivice-park-row1">
                    <div className="table-sivice-park-col1"><p>2</p></div>
                    <div className="table-sivice-park-col2"><p>ALT20210501</p></div>
                    <div className="table-sivice-park-col3"><p>Gói sự kiện</p></div>
                    <div className="table-sivice-park-col4">
                        <div className="colum-date-time">
                            <label> 14/04/2021 </label>
                            <label> 08:00:00</label>
                        </div>
                    </div>
                    <div className="table-sivice-park-col5">
                        <div className="colum-date-time">
                            <label> 14/04/2021 </label>
                            <label> 08:00:00</label>
                        </div>
                    </div>
                    <div className="table-sivice-park-col6">
                        <div className="number-money-ticket">
                            <label> 20.000 VND</label>

                        </div>

                    </div>
                    <div className="table-sivice-park-col7"><p></p></div>
                    <div className="table-sivice-park-col8">
                        <div className="box-tt-tat ">
                            <label >•</label>
                            <p>Tắt</p>
                        </div>
                    </div>
                    <div className="table-sivice-park-col9">
                        <div className="row-update" onClick={() => this.ShowSevicePark('updatesvp')}>
                            <p className="icon-update" ><HiOutlinePencilAlt /></p>
                            <p >Cập nhật</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TableSevicePack
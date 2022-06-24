
import './TableTicketManager.css'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { useDispatch, useSelector } from "react-redux"
import { ClickidTicket, UpdateTicketStatus } from '../../redux/Action';

export const TableTicketManager = () => {
    const TicketData = useSelector((state: any) => state.TicketData)
    const dispatch = useDispatch()
    function setcolor(id: number) {
        if (id % 2 === 1) {
            return 'row1'
        } else {
            return 'row2'
        }
    }

    function setStatus(status: string) {
        if (status === "dsd") {
            return (
                <div className="box-tt-dsd " id="csd">
                    <label >•</label>
                    <p>Đã sử dụng</p>
                </div>
            )
        } if (status === "csd") {
            return (
                <div className="box-tt-csd " id="csd">
                    <label >•</label>
                    <p>Chưa sử dụng</p>
                </div>
            )
        }
        else {
            return (
                <div className="box-tt-hh " id="csd">
                    <label >•</label>
                    <p>Hết hạn</p>
                </div>
            )
        }
    }
    function setEdit(status: string, id: number) {
        if (status === "csd") {
            return (
                <div className="row-col9">
                    <div className="div-col9" onClick={() => showchose(id)}>
                        <p  >
                            <BsThreeDotsVertical />
                        </p>
                    </div>
                    <div className="row-box-chose " id={id.toString()}>
                        <div className="tkm-chose">
                            <div className="item-chose" onClick={() => TurnOnUseTicket(id.toString())} id='sdv'><p>Sử dụng vé</p></div>
                            <div className="item-chose" onClick={() => Showchangedate(id.toString())}><p>Đổi ngày sử dụng</p></div>
                        </div>
                        <div className="nhon"></div>
                    </div>
                </div>
            )
        } else {
            return ('')
        }
    }

    function TurnOnUseTicket(id: string) {
        console.log(id)
        var data = {
            "StatusUse": "dsd"
        }
        dispatch(
            UpdateTicketStatus(data, id)
        )
        return window.location.href = '/TicketManager'
    }
    function showchose(id: number) {
        const chose: any = document.getElementById(id.toString())
        if (chose.style.display === 'none') {
            chose.style.display = 'flex'
        } else {
            chose.style.display = 'none'
        }
    }

    function Showchangedate(id: string) {
        const bls: any = document.getElementById('bls-dnsdv')
        bls.style.display = 'flex'
        dispatch(
            ClickidTicket(id)
        )

    }
    return (
        <div className="table-ticket-mangager" id="tbtm">
            <div className="row-title">
                <div className="tkm-col1"> <p className="row1-p">STT</p> </div>
                <div className="tkm-col2"> <p className="row1-p">Bokking code</p></div>
                <div className="tkm-col3"><p className="row1-p"> Sô vé</p></div>
                <div className="tkm-col4"><p className="row1-p">Tên sự kiện</p> </div>
                <div className="tkm-col5"><p className="row1-p">Tình trạng sử dụng</p> </div>
                <div className="tkm-col6"><p className="row1-p">Ngày sử dụng</p></div>
                <div className="tkm-col7"><p className="row1-p">Ngày xuất vé</p></div>
                <div className="tkm-col8"> <p className="row1-p">Cổng check-in</p></div>
                <div className="tkm-col9"></div>
            </div>
            {TicketData.map((item: any, index: any) => (
                <div className={setcolor(index)} key={item.id}>
                    <div className="tkm-col1"> <p>{index + 1}</p> </div>
                    <div className="tkm-col2"><p>{item.BookingCode}</p></div>
                    <div className="tkm-col3"> <p>{item.TicketNumber}</p></div>
                    <div className="tkm-col4"> <p>{item.NameTicket}</p></div>
                    <div className="tkm-col5">
                        {setStatus(item.StatusUse)}
                    </div>
                    <div className="tkm-col6" id="nsd"><p>{item.Date}</p> </div>
                    <div className="tkm-col7"><p>{item.DateEnd}</p>  </div>
                    <div className="tkm-col8"><p>{item.Gate}</p></div>
                    <div className="tkm-col9">
                        {setEdit(item.StatusUse, item.id)}
                    </div>
                </div>
            ))}

        </div>
    )
}

export default TableTicketManager
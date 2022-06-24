import { useSelector } from "react-redux"

export const TableTicketChange = () => {
    const TicketData = useSelector((state: any) => state.TicketData)
    function setcolor(id: number) {
        if (id % 2 === 1) {
            return 'row1-ticket-change'
        } else {
            return 'row2-ticket-change'
        }
    }
    function setStatus(status: boolean) {
        if (status) {
            return (
                <p className="ticket-change-cds">Đã đối soát</p>
            )
        } else {
            return (
                <p className="ticket-change-dds">Chưa đối soát</p>
            )
        }
    }

    return (
        <div className="table-ticket-change" id="tbtc">
            <div className="row-ticket-change">
                <div className="ticket-change-col1">
                    <p className="row1-ticket-change-p">STT</p>
                </div>
                <div className="ticket-change-col2">
                    <p className="row1-ticket-change-p">Só vé</p>
                </div>
                <div className="ticket-change-col3">
                    <p className="row1-ticket-change-p">Tên sự kiện</p>
                </div>
                <div className="ticket-change-col4">
                    <p className="row1-ticket-change-p">Ngày sử dụng</p>
                </div>
                <div className="ticket-change-col5">
                    <p className="row1-ticket-change-p">Loại vé</p>
                </div>
                <div className="ticket-change-col6">
                    <p className="row1-ticket-change-p">Cổng check-in</p>
                </div>
                <div className="ticket-change-col7"></div>
            </div>
            {TicketData.map((item: any, index: any) => (
                <ul className={setcolor(index)} key={item.id}>
                    <div className="ticket-change-col1">
                        <p >{index + 1}</p>
                    </div>
                    <div className="ticket-change-col2">
                        <p >{item.TicketNumber}</p>
                    </div>
                    <div className="ticket-change-col3">
                        <p> {item.NameTicket}</p>
                    </div>
                    <div className="ticket-change-col4">
                        <p >{item.Date}</p>
                    </div>
                    <div className="ticket-change-col5">
                        <p >{item.TypeTicket}</p>
                    </div>
                    <div className="ticket-change-col6">
                        <p >{item.Gate}</p>
                    </div>
                    <div className="ticket-change-col7">
                        {setStatus(item.Status)}
                    </div>
                </ul>

            ))}
        </div>
    )
}


export default TableTicketChange
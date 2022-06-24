import { BiSearch } from "react-icons/bi";
import { TbFilter } from "react-icons/tb";
import { Menubar } from "../../components/menubar";
import Nextpage from "../../components/nextpage";
import Sreach from "../../components/sreach";
import Topbar from "../../components/topbar";
import ChangeDateUseTicket from "../../components/TicketManager/ChangeDateUseTicket";
import { FillterTicket } from "../../components/TicketManager/FillterTicket-Manager";
import TableTicketManager from "./TableTicketManager";

export const TicketManager = () => {

    function ShowFillterTicket() {
        const lv: any = document.getElementById('bls-lv')
        if (lv.style.display === 'none') {
            lv.style.display = 'flex'

        } else {
            lv.style.display = 'none'
        }
    }


    return (
        <div className='bg'>
            <Sreach />
            <Topbar />
            <Menubar buttonid='qlv' />
            <div className="bgapp">
                <label className="titleapp"> Danh sách vé</label>
                <div className="sreach-qlv">
                    <form autoComplete='off' >
                        <input className="sreach-input" name='timkiem' type="text" placeholder='Tìm bằng số vé' />
                        <button className="sreach-button"><BiSearch /></button>
                    </form>
                </div>
                <div className="qlv-row-button">
                    <div className="qlv-filter" onClick={() => ShowFillterTicket()}>
                        <p style={{ fontSize: '24px' }}><TbFilter /></p>
                        <p>Lọc vé</p>
                    </div>
                    <a href="/TicketManager" className="qlv-download notline">Xuất file (.csv)</a>
                </div>
                <TableTicketManager />
                <div className="qlv-nextpage "><Nextpage /></div>
            </div>
            <ChangeDateUseTicket />
            <FillterTicket />
        </div>
    )

}
export default TicketManager;




import React from "react";
import { Menubar } from "../../components/menubar";
import Nextpage from "../../components/nextpage";
import Topbar from "../../components/topbar";
import TableSevicePack from "./TableSevicePack";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FiCalendar } from "react-icons/fi";
import DatePicker from "sassy-datepicker";
import { BiSearch } from "react-icons/bi";
import AddServicePack from "../../components/ServicePack/AddServicePack";
import UpdateServicePack from "../../components/ServicePack/UpdateServicePack";


const ServicePack = () => {


    function ShowSevicePark(id: string) {

        const add: any = document.getElementById(id)
        if (add.style.display === 'none') {
            add.style.display = 'flex'

        } else {
            add.style.display = 'none'
        }

    }

    return (
        <div className='bg'>
            <Topbar />
            <Menubar buttonid='cd' />
            <div className="bgapp" >
                <label className="titleapp"> Danh sách gói vé</label>
                <div className="sreach-qlv">
                    <form autoComplete='off' >
                        <input className="sreach-input" name='timkiem' type="text" placeholder='Tìm bằng số vé' />
                        <button className="sreach-button"><BiSearch /></button>
                    </form>
                </div>
                <div className="dsgv-row-button">
                    <a href="/ServicePack" className="qlv-download notline">Xuất file (.csv)</a>
                    <div className="add-ServicePack-btn" onClick={() => ShowSevicePark('addsvp')}>
                        <p >Thêm gói vé</p>
                    </div>
                </div>
                <TableSevicePack />
                <div className="qlv-nextpage">
                    <Nextpage />
                </div>
            </div>
            <UpdateServicePack />
            <AddServicePack />
        </div >
    )

}
export default ServicePack;
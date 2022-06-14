import React from "react";
import { BiSearch } from "react-icons/bi";
import { Menubar } from "../layouts/menubar";
import Nextpage from "../layouts/nextpage";
import Topbar from "../layouts/topbar";

class ServicePack extends React.Component {
    render() {
        return (
            <div className='bg'>
                <Topbar />
                <Menubar buttonid='cd' />
                <div className="bgapp">
                    <label className="titleapp"> Danh sách gói vé</label>
                    <div className="sreach-qlv">
                        <form autoComplete='off' >
                            <input className="sreach-input" name='tìm kiếm' type="text" placeholder='Tìm bằng số vé' />
                            <button className="sreach-button"><BiSearch /></button>
                        </form>
                    </div>

                    <div className="dsgv-row-button">
                        <a href="/ServicePack" className="qlv-download notline">Xuất file (.csv)</a>
                        <div className="add-ServicePack-btn">
                            <p >Thêm gói vé</p>
                        </div>

                    </div>



                    <div className="qlv-nextpage">
                        <Nextpage />
                    </div>
                </div>
            </div>
        )
    }
}
export default ServicePack;
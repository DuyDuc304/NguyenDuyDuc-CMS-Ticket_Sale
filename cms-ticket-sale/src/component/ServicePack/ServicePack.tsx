import React from "react";
import { Menubar } from "../layouts/menubar";
import Topbar from "../layouts/topbar";

class ServicePack extends React.Component {
    render() {
        return (
            <div className='bg'>
                <Topbar />
                <Menubar buttonid='cd' />
                <div className="bgapp">
                    <label className="titleapp"> Danh sách gói vé</label>
                </div>
            </div>
        )
    }
}
export default ServicePack;
import React from "react";
import { Menubar } from "../layouts/menubar";
import Topbar from "../layouts/topbar";

class TicketManager extends React.Component {
    render() {
        return (
            <div className='bg'>
                <Topbar />
                <Menubar buttonid='qlv' />
                <div className="bgapp">
                    <label className="titleapp"> Danh sách vé</label>
                </div>
            </div>
        )
    }
}
export default TicketManager;
import React from "react";
import { Menubar } from "../layouts/menubar";
import Topbar from "../layouts/topbar";

class TicketChange extends React.Component {
    render() {
        return (
            <div className='bg'>
                <Topbar />
                <Menubar buttonid='dsv' />
                <div className="bgapp">
                    <label className="titleapp"> Đổi soát vé</label>
                </div>
            </div>
        )
    }
}
export default TicketChange;
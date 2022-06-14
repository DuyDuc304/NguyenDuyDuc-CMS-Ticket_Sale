import React from "react";
import { Menubar } from "../layouts/menubar";
import Nextpage from "../layouts/nextpage";
import Sreach from "../layouts/sreach";
import Topbar from "../layouts/topbar";

class TicketChange extends React.Component {
    render() {
        return (
            <div className='bg'>
                <Sreach />
                <Topbar />
                <Menubar buttonid='dsv' />
                <div className="bgapp-dsv1">
                    <label className="titleapp"> Đổi soát vé</label>



                    <div className="dsv-nextpage"><Nextpage /></div>
                </div>
                <div className="bgapp-dsv2">


                </div>
            </div>
        )
    }
}
export default TicketChange;
import React from 'react'

const AcceptUseTicket = () => {
    function TurnOffUseTicket() {
        const xn: any = document.getElementById('bls-xn')
        xn.style.display = 'none'
    }
    return (
        <div className="block-screen" id="bls-xn">
            <div className="use-ticket">
                <p className="change-ticket-date-title">Xác nhận sử dụng vé</p>
                <div className="change-ticket-date-row-button">
                    <button className="change-ticket-date-button-huy" onClick={() => TurnOffUseTicket()}> Hủy</button>
                    <button className="change-ticket-date-button-luu" onClick={() => TurnOffUseTicket()}> Xác nhận</button>
                </div>
            </div>
        </div>
    )
}

export default AcceptUseTicket
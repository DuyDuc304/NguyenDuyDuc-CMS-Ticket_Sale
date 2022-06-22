import React from 'react'
import { Daypicker } from '../../components/Daypicker'

export const ChangeDateUseTicket = () => {
    function TurnOffChangeDate() {
        const bls: any = document.getElementById('bls-dnsdv')
        const chose: any = document.getElementById('chosebox')
        chose.style.display = 'none'
        bls.style.display = 'none'
    }
    function Savechange() {
        const bls: any = document.getElementById('bls-dnsdv')
        const chose: any = document.getElementById('chosebox')
        chose.style.display = 'none'
        bls.style.display = 'none'
    }
    return (
        <div className="block-screen" id="bls-dnsdv">
            <div className="change-ticket-date">
                <p className="change-ticket-date-title">Đổi ngày sử dụng vé</p>
                <div className="change-ticket-date-row-button">
                    <button className="change-ticket-date-button-huy" onClick={() => TurnOffChangeDate()}> Hủy</button>
                    <button className="change-ticket-date-button-luu" onClick={() => Savechange()}> Lưu</button>
                </div>
                <div className="change-ticket-date-col">
                    <div className="change-ticket-date-row">
                        <p className="change-ticket-date-row-p ">Số vé</p>
                        <label>PKG20210502 </label>
                    </div>
                    <div className="change-ticket-date-row">
                        <p className="change-ticket-date-row-p ">Số vé</p>
                        <label>Vé cổng - Gói sự kiện</label>
                    </div>
                    <div className="change-ticket-date-row">
                        <p className="change-ticket-date-row-p ">Tên sự kiện</p>
                        <label>Hội trợ triển lãm hàng tiêu dùng 2021</label>
                    </div>
                    <div className="change-ticket-date-row">
                        <p className="change-ticket-date-row-p ">Hạn sử dụng</p>
                        <div style={{ marginLeft: '78px', marginTop: '-10px' }} id="clen1">
                            <Daypicker />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChangeDateUseTicket
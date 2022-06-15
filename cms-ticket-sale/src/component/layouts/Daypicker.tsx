
import React from "react";
import { FiCalendar } from "react-icons/fi";
import DatePicker from "sassy-datepicker";

export const Daypicker = () => {
    const ChangeChart = (id: string) => {
        const checkngay: any = document.getElementById('checkngay')
        const checktuan: any = document.getElementById('checktuan')
        checkngay.checked = false;
        checktuan.checked = false;
        const checkon: any = document.getElementById(id)
        checkon.checked = true;
    }
    const [date, setDate] = React.useState(new Date())
    const handleDateSelect = (newDate: any) => {
        setDate(newDate);

    };
    const ShowCalenda = () => {
        const calen: any = document.getElementById('calen')
        if (calen.style.display === 'none') {
            calen.style.display = 'flex'
            const checktngay: any = document.getElementById('checkngay')
            checktngay.checked = true;

        } else {
            calen.style.display = 'none'

        }
    }
    return (
        <div className="col-daypicker">
            <div className="home-calenda-div" onClick={() => ShowCalenda()}>
                <p className='calenda-date' id="datechange"> {date.toLocaleDateString()}</p>
                <p className='calenda-icon' ><FiCalendar /></p>
            </div>
            <div className='home-calenda-popup' id='calen' style={{ marginTop: '45px' }} >
                <p >{date.toLocaleDateString()}</p>
                <div className='row-check-div'>
                    <div className="row">
                        <div className='checkbox-round'>
                            <input id='checkngay' type="checkbox" onChange={() => ChangeChart('checkngay')} />
                        </div>
                        <p>Theo ngày</p>
                    </div>
                    <div className="row">
                        <div className='checkbox-round'>
                            <input id='checktuan' type="checkbox" onChange={() => ChangeChart('checktuan')} />
                        </div>
                        <p>Theo tuần</p>
                    </div>
                </div>
                <DatePicker selected={date} style={{ marginLeft: '-10px', width: '370px', height: '369px' }} onChange={handleDateSelect} />
            </div>
        </div>
    )
}



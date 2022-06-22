import React from 'react'
import 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { FiCalendar } from 'react-icons/fi';
import DatePicker from 'sassy-datepicker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export function LineChart() {
    const [date, setDate] = React.useState(new Date());
    const handleDateSelect = (newDate: any) => {
        setDate(newDate);

    };
    const ShowCalenda = () => {
        const calen: any = document.getElementById('cale')
        if (calen.style.display === 'none') {
            calen.style.display = 'flex'
            const checktngay: any = document.getElementById('checkngay')
            checktngay.checked = true;
        } else {
            calen.style.display = 'none'
        }
    }
    const data1 = {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN',],
        datasets: [
            {

                data: [193090000, 227990000, 210000000, 268000000, 228000000, 278000000, 240000000, 300000000],
                fill: true,
                backgroundColor: 'rgba(250, 160, 95, 0.15)',
                tension: 0.5,
                borderColor: " #FF993C",

            },
        ],
    };
    const data2 = {
        labels: ['30/5-7/5', '30/6-7/7', '30/7-7/8', '30/8-7/9'],
        datasets: [
            {

                data: [129090000, 127990000, 253000000, 218000000, 50000000],
                fill: true,
                backgroundColor: 'rgba(250, 160, 95, 0.15)',
                tension: 0.5,
                borderColor: " #FF993C",

            },
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
                labels: {
                    boxWidth: 0
                }

            }

        },

    }
    return (
        <div >

            <p className='home-p-doanhthu'> Doanh thu</p>
            {/* lịch tuần hoặc ngày Line chart*/}
            <div className="home-calenda-div" style={{ marginLeft: '1320px', marginTop: '80px' }} onClick={() => ShowCalenda()}>
                <p className='calenda-date'> Tháng {date.getMonth() + 1}, {date.getFullYear()}</p>
                <p className='calenda-icon' ><FiCalendar /></p>
            </div>
            {/* line Char */}
            <div id='ngay' className="home-line-chart" >
                <Line data={data1} options={options} />
            </div>
            <div id='tuan' className="home-line-chart" style={{ display: 'none' }}>
                <Line data={data2} options={options} />
            </div>
            {/* tổng doanh thu*/}
            <label className="home-label-doanhthu">tổng doanh thu theo tuần</label>
            <div className="home-row-doanhthu">
                <label className="home-money-doanhthu">525.145.000</label>
                <label className="home-dong-doanhthu">đồng</label>
            </div>
            <div className='home-calenda-popup' id='cale' style={{ top: '120px', right: '70px' }} >
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

const ChangeChart = (id: string) => {
    const chartngay: any = document.getElementById('ngay')
    const charttuan: any = document.getElementById('tuan')
    const checkngay: any = document.getElementById('checkngay')
    const checktuan: any = document.getElementById('checktuan')
    checkngay.checked = false;
    checktuan.checked = false;
    if (chartngay.style.display === 'none') {
        chartngay.style.display = 'flex'
        charttuan.style.display = 'none'
    } else {
        chartngay.style.display = 'none'
        charttuan.style.display = 'flex'
    }
    const checkon: any = document.getElementById(id)
    checkon.checked = true;
}







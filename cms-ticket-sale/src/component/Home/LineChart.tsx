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
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const date = new Date();
export function LineChart() {

    const data = {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN',],
        datasets: [
            {

                data: [193090000, 207990000, 220000000, 248000000, 198000000, 208000000, 240000000],
                fill: true,
                backgroundColor: 'rgba(250, 160, 95, 0.15)',
                tension: 0.7,
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
        <div>

            <p className='home-p-doanhthu'> Doanh thu</p>
            {/* lịch tuần hoặc ngày Line chart*/}
            <div className="home-calenda-div" style={{ marginLeft: '1320px', marginTop: '80px' }}>
                <p className='calenda-date'> Tháng {date.getMonth()}, {date.getFullYear()}</p>
                <p className='calenda-icon'><FiCalendar /></p>
            </div>
            {/* line Char */}
            <div className="home-line-chart" >
                <Line data={data} options={options} />
            </div>
            {/* tổng doanh thu*/}
            <label className="home-label-doanhthu">tổng doanh thu theo tuần</label>
            <div className="home-row-doanhthu">
                <label className="home-money-doanhthu">525.145.000</label>
                <label className="home-dong-doanhthu">đồng</label>
            </div>
        </div>





    )
}


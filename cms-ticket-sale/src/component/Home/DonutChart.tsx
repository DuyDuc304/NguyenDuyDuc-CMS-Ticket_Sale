import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { FiCalendar } from 'react-icons/fi';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);


const date = new Date();
export function DonutChart() {
    const data1 = {
        labels: [],
        datasets: [
            {

                data: [13568, 56024,],
                backgroundColor: [
                    '#FF8A48', '#4F75FF',

                ],
            },
        ],
    };
    const data2 = {
        labels: [],
        datasets: [
            {
                data: [30256, 28302,],
                backgroundColor: [
                    '#FF8A48',
                    '#4F75FF',
                ],

            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false
            },
        },
    };
    return (
        <div>
            {/* lịch tuần hoặc ngày donut chart*/}
            <div className="home-calenda-div" style={{ marginLeft: '32px', marginTop: '610px' }}>
                <p className='calenda-date'> Tháng {date.getMonth()}, {date.getFullYear()}</p>
                <p className='calenda-icon'><FiCalendar /></p>
            </div>
            {/* Donut Char  */}
            <div className="home-row-donut-chart">
                <div className="home-donut-chart">
                    <p> Gói gia đình</p>
                    <div className="home-donut-react-chart">
                        <Doughnut data={data1} options={options} />
                    </div>
                </div>
                <div className="home-donut-chart">
                    <p> Gói sự kiện</p>
                    <div className="home-donut-react-chart">
                        <Doughnut data={data2} options={options} />
                    </div>
                </div>
            </div>
            {/* Donut Char chú thích */}
            <div className="hone-donut-chuthich">
                <div className="row">
                    <div className="donut-chart-chuthich" style={{ background: '#4F75FF' }}></div>
                    <p >Vé đã sử dụng</p>
                </div>
                <div className="row">
                    <div className="donut-chart-chuthich" style={{ background: '#FF8A48' }}></div>
                    <p >Vé chưa sử dụng</p>
                </div>
            </div>
        </div>

    )
}


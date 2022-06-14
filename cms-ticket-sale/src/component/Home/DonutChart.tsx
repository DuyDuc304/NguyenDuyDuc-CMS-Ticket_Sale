import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
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
                data: [28302, 30256,],
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
                display: false,
                labels: {
                    boxWidth: 0
                }

            }

        },

    }
    return (
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
    )
}


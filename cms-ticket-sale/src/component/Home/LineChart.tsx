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

    const data = {
        labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN',],
        datasets: [
            {

                data: [260000000, 260000000, 280000000, 220000000, 218000000, 198000000, 208000000],
                fill: true,
                backgroundColor: 'rgba(250, 160, 95, 0.15)',
                tension: 0.6,
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

        <Line data={data} options={options} />



    )
}


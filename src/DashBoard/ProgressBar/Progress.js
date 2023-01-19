import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels,
);

export const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 0,
        },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'right',
        },
        title: {
            display: false,
            text: 'Tickets solved by agent',
        },
    },
    scales: {

        x: {
            min: 0,
            max: 150,
            // remove the labels
            ticks: {
                display: false,
                beginAtZero: true,
            },

            // remove the x-axis grid
            grid: {
                drawBorder: false,
                display: false,
            },
        },

        y: {
            // display the y-axis labels
            ticks: {
                display: true,
                beginAtZero: true,
            },
            //remove the y-axis grid
            grid: {
                drawBorder: false,
                display: false,
            },
        },
    },
};

const labels = ['Tanner Hodge', 'Lynda Shames', 'Luke Burke', 'Kai Gaines', 'Kenzie Fields', 'Sophie Mortimer', 'Leanne Coy', 'Kayla Park', 'Sarah Matthews', 'James Murdock'];

export const data = {
    labels,
    datasets: [
        {
            data: [117, 65, 59, 56, 54, 51, 40, 32, 29, 23],
            borderColor: '#76b958',
            backgroundColor: '#76b958',
            datalabels: {
                color: 'black',
                anchor: 'end',
                align: 'end',
                offset: 5,
                font: {
                    size: 16,
                }
            }
        },
    ],
};

const Progress = () => {
    return (
        <section
            className='mt-3'
            style={{ paddingLeft: '1rem' }}
        >
            <div
                className='p-2 rounded-3'
                style={{ backgroundColor: 'white', width: '420px' }}
            >
                <h5 className='text-center'>Tickets Solved By Agent</h5>
                <div>
                    <Bar
                        options={options}
                        data={data}
                        width={350}
                        height={800}
                    />
                </div>
            </div>
        </section>
    );
};

export default Progress;
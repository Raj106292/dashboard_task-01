import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    ChartAnnotation
);


export const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 50,
        }
    },
    plugins: {
        annotation: {
            annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'x-axis-1',
                value: 1,
                borderColor: '#FF5447',
                borderWidth: 4,
                label: {
                    enabled: false,
                    content: 'Test label'
                }
            }]
        },
        legend: {
            position: 'top',
            display: false,
        },
        title: {
            display: true,
            text: 'Last 30 Days',
            align: 'start',
            padding: {
                top: 10,
                bottom: 10
            },
            font: {
                size: 20,
            },
        },
    },
    scales: {

        x: {
            // display the labels
            ticks: {
                display: true,
                beginAtZero: false,
                stepSize: 1,
            },

            //remove the x-axis grid
            grid: {
                drawBorder: false,
                display: false,
            },
        },

        y: {
            min: 0,
            max: 4,
            // display the y-axis labels
            ticks: {
                display: true,
                beginAtZero: true,
                stepSize: 2,
            },
            //display the y-axis grid
            grid: {
                drawBorder: 1,
                display: true,
            },
        },
    },
};

// code for the line
const arbitraryLine = {
    id: 'arbitraryLine',
    afterDatasetsDraw(chart, args, pluginOptions) {
        const { ctx, chartArea: { left }, scales: { y } } = chart;
        ctx.beginPath();
        ctx.save();

        // draw the dash line
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#cb8eff';
        ctx.setLineDash([10, 20]);
        ctx.strokeRect(left, y.getPixelForValue(1.5), 715, 0);
        ctx.restore();
    },
}

const labels = [
    '2018-11-17', '2018-11-18', '2018-11-19', '2018-11-20', '2018-11-21',
    '2018-11-22', '2018-11-23', '2018-11-24', '2018-11-25', '2018-11-26',
    '2018-11-27', '2018-11-28', '2018-11-29', '2018-11-30', '2018-12-01',
    '2018-12-02', '2018-12-03', '2018-12-04', '2018-12-05', '2018-12-06',
    '2018-12-07', '2018-12-08', '2018-12-09', '2018-12-10', '2018-12-11',
    '2018-12-12', '2018-12-13', '2018-12-14', '2018-12-15', '2018-12-16',
];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [
                1.7, 1.8, 1.5, 1.4, 1.9,
                1.5, 1.4, 1.6, 1.7, 1.9,
                2.1, 2.2, 1.5, 1.6, 1.7,
                1.8, 1.9, 3.2, 3.5, 2.1,
                1.4, 2.7, 1.6, 2.7, 2.8,
                3.1, 1.4, 1.3, 1.2, 3.1,
            ],
            fill: true,
            borderColor: '#ca8bff',
            backgroundColor: '#d6a5ff',
            // hide the dataLabels
            datalabels: {
                display: false,
            }
        },
    ],
};

const FirstChart = () => {
    return (
        <section className='mt-3 rounded-3 px-3'>
            <div>
                <h5
                    className='text-center fw-bolder py-2 rounded-top'
                    style={{ backgroundColor: 'white' }}
                >
                    First Response Time
                </h5>
                <h2
                    className='text-center py-3'
                    style={{ backgroundColor: '#fbfbfb', marginTop: '-5px', color: '#d6a5ff' }}
                >
                    1h 17min (Month: 1h 38min)
                </h2>
                <div
                    className='py-3 rounded-bottom'
                    style={{ backgroundColor: 'white', marginTop: '-5px' }}
                >
                    <Line
                        options={options}
                        data={data}
                        plugins={[arbitraryLine]}
                        height={250}
                        width={810}
                    />
                </div>
            </div>
        </section>
    );
};

export default FirstChart;
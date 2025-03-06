import React from 'react';
import Chart from 'react-apexcharts';

function Temp() {
    const options = {
        chart: {
            animations: {
                enabled: true
            },
            title: {
                text: "Monthly Sales"
            },
            toolbar: {
                show: false
             }
        },
        xaxis: {
            type: "datetime",
            title: {
                text: "Month"
            }
        },
        yaxis: {
            title: {
                text: "Sales (in USD)"
            },
            labels: {
                formatter: function (value) {
                    return "$" + value;
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#1DBF73"], // Customize the color here
        series: [{
            name: "Sales",
            data: [
                { x: new Date(2022, 0).getTime(), y: 450 },
                { x: new Date(2022, 1).getTime(), y: 414 },
                { x: new Date(2022, 2).getTime(), y: 520 },
                { x: new Date(2022, 3).getTime(), y: 460 },
                { x: new Date(2022, 4).getTime(), y: 450 },
                { x: new Date(2022, 5).getTime(), y: 500 },
                { x: new Date(2022, 6).getTime(), y: 480 },
                { x: new Date(2022, 7).getTime(), y: 480 },
                { x: new Date(2022, 8).getTime(), y: 410 },
                { x: new Date(2022, 9).getTime(), y: 500 },
                { x: new Date(2022, 10).getTime(), y: 480 },
                { x: new Date(2022, 11).getTime(), y: 510 }
            ]
        }]
    };

    return (
        <div>
            <Chart options={options} series={options.series} type="area" height={350} />
        </div>
    );
}

export default Temp;

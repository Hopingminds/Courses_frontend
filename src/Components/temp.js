// import React, { Component } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';
// //var CanvasJSReact = require('@canvasjs/react-charts');
 
// // var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// function Temp()  {
	
// 		const options = {
// 			animationEnabled: true,
// 			// title: {
// 			// 	text: "Nuclear Electricity Generation in US"
// 			// },
// 			axisY: {
// 				title: "Net Generation (in Billion kWh)",
// 				suffix: " kWh"
// 			},
            
// 			data: [{
// 				type: "splineArea",
// 				xValueFormatString: "YYYY",
// 				yValueFormatString: "#,##0.## bn kW⋅h",
// 				showInLegend: true,
// 				legendText: "kWh = one kilowatt hour",
//                 color:"#1DBF73",
// 				dataPoints: [
// 					{ x: new Date(2008, 0), y: 10.735 },
// 					{ x: new Date(2009, 0), y: 11.102 },
// 					{ x: new Date(2010, 0), y: 12.569 },
// 					{ x: new Date(2011, 0), y: 12.743 },
// 					// { x: new Date(2012, 0), y: 72.381 },
// 					// { x: new Date(2013, 0), y: 71.406 },
// 					// { x: new Date(2014, 0), y: 73.163 },
// 					// { x: new Date(2015, 0), y: 74.270 },
// 					// { x: new Date(2016, 0), y: 72.525 },
// 					// { x: new Date(2017, 0), y: 73.121 }
// 				]
// 			}]
// 		}
// 		return (
// 		<div>
// 			<CanvasJSChart options = {options}
// 				/* onRef={ref => this.chart = ref} */
// 			/>
// 			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
// 		</div>
// 		);
// 	}

// export default Temp;                        

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

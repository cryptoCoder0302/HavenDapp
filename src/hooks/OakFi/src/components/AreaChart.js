import React, { Component } from 'react';
import { CanvasJSChart, CanvasJS } from 'canvasjs-react-charts';
const AreaChart = (props) => {

    CanvasJS.addColorSet("greenShades",
                [
                    "#28CE8A",               
                ]);
		const options = {
			theme: "dark2",
			animationEnabled: true,
            backgroundColor: "#2C2D42",
            colorSet: "greenShades",
            dataPointMaxWidth: 10,
            height: 250,
            creditText: "",
            creditHref: "",
            axisY: {
                prefix: "$",
                labelFontColor: "#64748B",
                labelFontSize: 16,
                labelFontWeight: 500,
                valueFormatString:  "#,##0.##",
                interval: 5000,
            },
            axisX: {
                labelFormatter: function(e){
                    return  "";
                },
                tickLength: 0,
                margin: 15,
            },
			data: [
			{
				type: "area",
				dataPoints: [
					{y: 5000},
					{y: 10000},
					{y: 13500},
					{y: 17000},
					{y: 22000},
					{y: 21000},
					{y: 24990},
				]
			}
			]
		}
        
		return (
            <div>
                <CanvasJSChart options = {options} containerProps={{}}
                    // onRef={ref => this.chart = ref}
                />
            </div>
		);
}
export default AreaChart; 
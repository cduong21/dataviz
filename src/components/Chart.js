import React from 'react'; 
import { Bar } from 'react-chartjs-2'; 

// passing in data and de-structuring and building new object
const Chart = ({data}) => {
    const {positive, negative, pending} = data

    const dataStructure = {
        positive,
        negative,
        pending,
    }

    // console.log(dataStructure)

    // create a config object for the data
    const chartDataConfig = {
        labels: Object.keys(dataStructure), 
        datasets: [
            {
                data: Object.values(dataStructure),
                label: "COVID-19 Results",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
            }
        ]
    }

    return (
        <div>
            <Bar 
            data={chartDataConfig} 
            // getting rid of the legend 
            options={{
                legend: {
                    display: false
                },
                tooltips: {
                    callbacks: {
                        label: function(tooltipItem) {
                                return tooltipItem.yLabel;
                        }
                    }
                },
            }}
            />
        </div>
    )
}

export default Chart
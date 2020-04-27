import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

/* Using new method that makes more sense: creating arrays, using React Hooks, and passing in arrays */
const LineChart = () => {
    const [chartData, setChartData] = useState({});
    
    const chart = () => {
      // initalizing empty arrays to be filled 
      let filteredCA = [];  
      let covidDates = [];
      let covidDeaths = [];

      // fetching API 
      axios
        .get("https://covidtracking.com/api/v1/states/daily.json")
        .then(res => {
            // filter API of all state's data 
            const state = res.data 
            filteredCA = state.filter(a => a.state===("CA"))

            //pushing desired data into respective arrays 
            for (const dataObj of filteredCA){
                covidDates.push(parseInt(dataObj.date));
                covidDeaths.push(dataObj.positive);
            }

            // key and value pair matching to sort them from oldest to newest 
            var i; 
            var currentKey;
            var currentVal; 
            var masterList = {};
            for (i = 0; i < covidDates.length; i++){
                currentKey = covidDates[i]
                currentVal = covidDeaths[i]
                masterList[currentKey] = currentVal; 
            }
            console.log(masterList)

          //console.log(state);
          //console.log(filteredCA)

          setChartData({
            labels: Object.keys(masterList),
            datasets: [
              {
                label: "",
                data: Object.values(masterList),
                backgroundColor: ["rgba(75, 192, 192, 0.6)"],
                borderWidth: 4,
                fill: false,
                borderColor: "rgb(51, 102, 255)", 
                
                legend: {
                    display: false,
                }
              }
            ]
          });
        })
        // catching errors 
        .catch(err => {
          console.log(err);
        });
      //console.log(covidDates, covidDeaths);
    };
    
    useEffect(() => {
      chart();
    }, []);
    return (
      <div className="App">
        <h1 className="text-center">California Positive COVID-19 Cases</h1>
        <div>
          <Line
            data={chartData}
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
              responsive: true,
              title: { text: "Let's hope it starts declining", display: true },
              scales: {
                yAxes: [
                  {
                    labelString: "tested-positive",
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true
                    },
                    gridLines: {
                      display: true
                    }
                  }
                ],
                xAxes: [
                  {
                    gridLines: {
                      display: false
                    }
                  }
                ]
              }
            }}
          />
        </div>
      </div>
    );
  };
  
  export default LineChart;

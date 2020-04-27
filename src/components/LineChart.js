import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineChart = () => {
    const [chartData, setChartData] = useState({});
    const [date, setDate] = useState([]);
    const [deathToll, setDeathToll] = useState([]);
  
    const chart = () => {
      let filteredCA = [];  
      let covidDates = [];
      let covidDeaths = [];

      axios
        .get("https://covidtracking.com/api/v1/states/daily.json")
        .then(res => {
            const state = res.data 
            filteredCA = state.filter(a => a.state==("CA"))
            
            for (const dataObj of filteredCA){
                covidDates.push(parseInt(dataObj.date));
                covidDeaths.push(dataObj.death);
            }

            // key and value pair matching so I can sort them from oldest to newest 
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
                legend: {
                    display: false,
                }
              }
            ]
          });
        })
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

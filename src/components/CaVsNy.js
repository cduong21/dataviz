import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

// Visualization for both CA and NY
const CaVsNy = () => {
    const [chartData, setChartData] = useState({});
    
    const chart = () => {
      let filteredCA, filteredNy= [];  
      let covidDates = [];
      let covidCaDeath = [];
      let covidNyDeath = [];

      axios
        .get("https://covidtracking.com/api/v1/states/daily.json")
        .then(res => {
            const state = res.data 
            filteredCA = state.filter(a => a.state===("CA"))
            

            for (const dataObj of filteredCA){
                covidDates.push(parseInt(dataObj.date));
                covidCaDeath.push(dataObj.death);
            }

            const ny = res.data
            filteredNy = ny.filter(b => b.state===("NY"))

            for (const dataObj of filteredNy) {
                covidNyDeath.push(dataObj.death)
            }

            // CA key and value pair matching to support sorting the dates in ascending order 
            var i; 
            var currentKey;
            var currentVal; 
            var masterList = {};
            for (i = 0; i < covidDates.length; i++){
                currentKey = covidDates[i]
                currentVal = covidCaDeath[i]
                masterList[currentKey] = currentVal; 
            }
            console.log(masterList)

            //for NY 
            var j; 
            var currentKey2;
            var currentVal2; 
            var masterList2 = {};
            for (j = 0; j < covidDates.length; j++){
                currentKey2 = covidDates[j]
                currentVal2 = covidNyDeath[j]
                masterList2[currentKey2] = currentVal2; 
            }
            console.log(masterList2)

          //console.log(filteredNy)

          setChartData({
            labels: Object.keys(masterList),
            datasets: [
              {
                label: "Cali",
                data: Object.values(masterList),
                pointBackgroundColor: ["rgb(0, 153, 255)"], 
                pointBorderColor: ["rgb(0, 153, 255)"],
                pointHoverBackgroundColor: ["rgb(0, 153, 255)"],
                backgroundColor: ["rgb(0, 153, 255)"],
                borderWidth: 4,
                fill: true, 
                legend: {
                    display: false,
                }
              },
              {
                label: "Nyc",
                data: Object.values(masterList2),
                backgroundColor: ["rgb(255, 80, 80)"],
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
    };
  
    useEffect(() => {
      chart();
    }, []);
    return (
      <div className="App">
        <h1 className="text-center">California and New York Deaths</h1>
        <div>
          <Line
            data={chartData}
            options={{
              responsive: true,
              title: { text: "Shelter in palce saves lives!", display: true },
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
  
  export default CaVsNy;

import React, { useState, useEffect } from 'react';
import Chart from './Chart'
import LineChart from './LineChart'
import CaVsNy from './CaVsNy'


/* followed a tutorial for de-structuring and then rebuilding the object in Chart
was a good way to get familiar with API fetching and chartjs
but ran into a lot of errors so decided to implement a new
method that made more sense to me (LineChart.js and CaVsNy.js) */

function Visualization() {
    const [stateData, setStateData] = useState([])
    const url = "https://covidtracking.com/api/v1/us/current.json"

    async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        // must specify index, else returning undefined values
        setStateData(data[0]);
    }

    useEffect(() => {
        getData();
    }, []);

    // calling all the charts and some styling! :-)
    return (
        <div className="py-5">
            <h2 className="text-center"> Data Visualization (ChartJS) </h2>

            <div className="text-center py-3">
              <a href="https://covidtracking.com/api" className="btn btn-info" role="button">The COVID Tracking Project API</a>
            </div>

            <div className="d-flex justify-content-center py-3">
              <img src= "https://www.evaluate.com/sites/default/files/styles/focal_point_848x350/public/AdobeStock_317106453_0.jpeg?h=3b09102f" ></img>
            </div>
            <h1 className="text-center">COVID-19 US Testing Results</h1>
            <div className="py-5 md-5">
              <Chart data={stateData} width={300} height={350}/>
            </div>
            <div className="md-5">
              <LineChart> </LineChart>
            </div>
            <div className="py-5">
              <CaVsNy></CaVsNy>
            </div>
        </div>
    );
}

export default Visualization

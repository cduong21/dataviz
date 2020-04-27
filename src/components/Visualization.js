import React, { useState, useEffect, Component } from 'react';
import Chart from './Chart'

function Visualization(){
    const [stateData, setStateData] = useState([])
    const url = "https://covidtracking.com/api/v1/us/current.json"

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      setStateData(data[0]);
    }
    getData();
  });

    return(
        <div>
            <h1 className="text-center">COVID-19 Test Tracker</h1>
            <Chart data={stateData} width={300} height={350}/>
            
        </div>
    );
}

export default Visualization
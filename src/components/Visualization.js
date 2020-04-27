import React, { useState, useEffect, Component } from 'react';
import Chart from './Chart'

function Visualization(){
    const [stateData, setStateData] = useState([])
  const url = "https://covidtracking.com/api/v1/us/current.json"

  useEffect(() => {
    async function getData() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data)
      setStateData(data[0]);
      console.log(data[0])
    }
    getData();
    console.log(getData())
  });

    return(
        <div>
            <h1>COVID-19 Test Tracker</h1>
            <Chart data={stateData} />
            <h1> hi </h1>
        </div>
    );
}

export default Visualization
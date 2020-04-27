import React, { useState, useEffect, Component } from 'react';
import LineChart from './LineChart'


function Resources(){
    const [dailyData, setDailyData] = useState([])
    const url2 = "https://covidtracking.com/api/v1/states/daily.json"

    useEffect(() => {
      async function getData2(){
        const res2 = await fetch(url2);
        const data2 = await res2.json(); 
        // API returns every state, filter by CA only 
        const filtered = data2.filter(a => a.state=="CA")
        setDailyData(filtered);
        console.log(filtered)
      }
      getData2();
    });

    return(
        <div> 
            <LineChart data={dailyData} />
        </div>
    );
}

export default Resources
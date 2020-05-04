import React from 'react';


function Resources() {
    return (
    <div class="hero-unit, text-center py-5" >
        <h1 class="mb-3">Process and Resources</h1>
        <p class="col px-md-5">
        Computer Science at 5C’s is pretty theoretical, hence with a project like this,
        I was really able to learn and solve problems real developers face. I appreciated
        the helpful links that you sent me to get started. I used the COVID-19 Tracker API
        and built three data visualizations using Chart-JS.
        </p>
        <p class="col px-md-5">
        Just in case you were interested in my process and for self-reflection purposes, <br></br>if not
        TLDR: I need to just jump into code, get stuck (and unstuck, of course), and data is powerful!!
        </p>
        <p class="col px-md-5">
        I’ve never worked with an API before so when I read the specs, my first thought was: “it’s finally
        time to face my fears.” To be frank, I was a little overwhelmed and looked to Youtube and Medium
        articles to understand the functionality of different APIs. Once I realized all the cool things
        people are building with APIs, I went into the rabbit hole you warned about; I struggled to
        choose an API. I blame the Google Sheet: Data is Plural which is populated with soooo many interesting
        avenues to explore. I can’t wait to use some of these for personal projects, specifically the Have I
        Been Pwned API (security is intriguing) and using a Bubble Chart to map global COIVD Cases and Population Size.
        </p>
        <h4> Detailed Process </h4>
        <p class="col px-md-5">
        Built the Nav bar and got the pages to talk to each other <br></br>
        Read up about ChartJS, fetching APIs, data visualization <br></br>
        Chose an API that was extremely unorganized and got overwhelmed by how much information was there <br></br>
        Downloaded a Chrome extension to parse the JSON files <br></br>
        Referred back to the specs, went to the COVID-19 Tracker API, and liked what I saw :-) <br></br>
        Failed a few times <br></br>
        Chart.js was my attempt to de-structure the prop passed in and create a new object (method 1)<br></br>
        LineChart.js and CaVsNy.js was using Axios and pushing data into an array instead (method 2)
        </p>
        <p>
        This project has definitely piqued my interest in the intersection of data and code; I’m super excited to
        use my skills to keep building projects like this!<br></br> There are so many applications and now that APIs aren’t
        scary anymore, the world of code is my forever playground. I'm excited about the projects you are looking to tackle
        at PolyOps, and would love to help! <br></br> Thank you for your time and consideration.
        </p>

    </div>
    );
}

export default Resources

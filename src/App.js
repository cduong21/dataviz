import React, { useState, useEffect, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar'
import Resources from './components/Resources'
import Visualization from './components/Visualization'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Chart from './components/Chart'
import { getDefaultNormalizer } from '@testing-library/react';
import LineChart from './components/LineChart'

function App() {

    return (
      <Router>
        <div className="App">
          <NavBar/>

          <Switch>
          <Route path='/data' component={Visualization} />
          <Route path='/resources' component={Resources} />
          </Switch> 

        </div>
      </Router>
    );
}

export default App;



/*


<Router>
        <div className="App">
          <NavBar/>

          <Switch>
          <Route path='/data' component={Visualization} />
          <Route path='/resources' component={Resources} />
          </Switch> 

        </div>
      </Router>
*/


/*
class App extends Component {
  
  constructor(){
    super(); 
    this.state = {
      chartData: {}
    }
  }

  componentWillMount(){
    this.getchartData(); 
  }

  getchartData(){
    fetch("https://covidtracking.com/api/v1/us/current.json")
    .then(response => {
      return response.json(); 
    })
    .then(myJson => {
      const positive = myJson.Positive; 
      this.setState({ chartData: positive}); 
      console.log(JSON.stringify(myJson))
    })
  }

  render() {
    return(
      <Router>
        <div className="App">
          <NavBar/>

          <Switch>
          <Route path='/data' component={Visualization} />
          <Route path='/resources' component={Resources} />
          </Switch> 

          <Chart chartData={this.state.chartData}/>

        </div>
      </Router>
    )
  }
}
*/

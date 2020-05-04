import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/Navbar'
import Resources from './components/Resources'
import Visualization from './components/Visualization'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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

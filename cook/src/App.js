import React from 'react';
import Home from './Pages/Home'
import land from "./Pages/Land"
import Breakfast from "./Pages/Breakfast"
import Starters from "./Pages/Starters"
import Dinner from "./Pages/Dinner"
import Lunch from "./Pages/Lunch"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {

    return (


      <Router>
      <div>
        <Switch> 
          <Route exact path ="/" component={land}/>
          <Route exact path="/home" component={Home} />
          <Route exact path="/lunch" component={Lunch} />
          <Route exact path="/dinner" component={Dinner} />
          <Route exact path="/apps" component={Starters} />
          <Route exact path="/breakfast" component={Breakfast} />

        
        </Switch>
       
      
      </div>
    </Router>

      
    )
  }


export default App;

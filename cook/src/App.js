import React from 'react';
import home from './Pages/Home'
import land from "./Pages/Land"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {

    return (


      <Router>
      <div>
        <Switch> 
          <Route exact path ="/" component={land}/>
          <Route exact path="/home" component={home} />
        
        </Switch>
       
      
      </div>
    </Router>

      
    )
  }


export default App;

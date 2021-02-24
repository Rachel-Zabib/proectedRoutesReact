import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Component/Home/Home";
import Manager from "./Component/Manager/Manager";
import ProtectedRoute from "./Component/ProtectedRoute/ProtectedRoute";
import SignIn from "./Component/SignIn/SignIn";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <ProtectedRoute exact path="/manager" component={Manager}/>
          <Route exact path="/sign-in" component={SignIn}/>
          <Route component={()=>"404 not found"}/>
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;

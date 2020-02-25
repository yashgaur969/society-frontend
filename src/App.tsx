import React from 'react';
import './App.css';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import { Dashboard } from './components/Dashboard';
import { Route, Link, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'
const App = () =>{
  return (
     <BrowserRouter>
     <switch>
       <Route exact={true} path="/" component={SignUp} />
       <Route exact={true} path="/login" component={LogIn} />
       <Route exact={true} path="/dashboard" component={Dashboard} />
     </switch>
     </BrowserRouter>
    
    
  );
}

export default App;

import React from 'react';
import './App.css';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import { Route, Link, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'
const App = () =>{
  return (
     <BrowserRouter>
     <switch>
       <Route exact={true} path="/" component={SignUp} />
       <Route exact={true} path="/login" component={LogIn} />
     </switch>
     </BrowserRouter>
    
    
  );
}

export default App;

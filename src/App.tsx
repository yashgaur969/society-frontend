import React from 'react';
import './App.css';
import { SignUp } from './components/SignUp';
import { LogIn } from './components/LogIn';
import { SocietyDetails } from './components/SocietyDetails';
import { Route, Link, BrowserRouter as Router, Switch, BrowserRouter } from 'react-router-dom'
import { BuildingDetails } from './components/BuildingDetails';
import { ApartmentDetails } from './components/ApartmentDetails';
import { ManagementDetails } from './components/ManagementDetails';
import { Dashboard } from './components/Dashboard';

const App = () =>{
  
  return (
     <BrowserRouter>
     <switch>
       <Route exact={true} path="/" component={SignUp} />
       <Route exact={true} path="/login" component={LogIn} />
       <Route exact={true} path="/societyDetails" component={SocietyDetails} />
       {/* <Route exact={true} path="/buildingDetails" component={BuildingDetails} /> */}
       {/* <Route exact={true} path="/apartmentDetails" component={ApartmentDetails} /> */}
       <Route exact={true} path="/managementDetails" component={ManagementDetails} />
       <Route exact={true} path="/dashboard" component={Dashboard} />
     </switch>
     </BrowserRouter>
    
    
  );
}

export default App;

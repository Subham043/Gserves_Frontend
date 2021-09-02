import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, useHistory } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login';
import Otp from './Pages/Otp/Otp';
import Phone from './Pages/Phone/Phone';
import Service from './Pages/Service/Service';
import ServiceForm from './Pages/ServiceForm/ServiceForm';
import Success from './Pages/Success/Success';
import Transaction from './Pages/Transaction/Transaction';
import SocialOtp from './Pages/SocialOtp/SocialOtp';
import LoadingModal from './Components/LodaingModal/LoadingModal'
import ServiceModal from './Components/ServiceModal/ServiceModal'
import Toaster from './Components/Toaster/Toaster'

function App() {



  return (
    <Router>
      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/otp" exact component={Otp} />
        <Route path="/phone" exact component={Phone} />
        <Route path="/social/otp" exact component={SocialOtp} />
        <Route path="/service" exact component={Service} />
        <Route path="/service/form" exact component={ServiceForm} />
        <Route path="/success" exact component={Success} />
        <Route path="/transaction/:status" exact component={Transaction} />
        

      </Switch>

      <LoadingModal />
      <ServiceModal />
      <Toaster />
    </Router>
  );
}

export default App;

// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Menubar from "./views/navbar/Menubar";
import Footerbar from "./views/footer/footer";

import Product from "./views/viewpage/Product";
import Beyond from "./views/viewpage/Beyond";
import Ownership from "./views/viewpage/Ownership";
import Motorsport from "./views/viewpage/Motorsport";
import Store from "./views/viewpage/Store";
import Modeldetail from "./views/viewpage/Modeldetail";
import ContactUs from "./views/viewpage/ContactUs";
import OwnershipConnect from "./views/viewpage/OwnershipList/Ownership_Connect";
import MobilityProgram from "./views/viewpage/OwnershipList/MobilityProgram";
import CustomerApp from "./views/viewpage/OwnershipList/CustomerApp";
import Campaign from "./views/viewpage/OwnershipList/Campaign";
import Classics from "./views/viewpage/OwnershipList/Classics";
import Service from "./views/viewpage/OwnershipList/OwnershipService";

import MotorsportTrofeo from "./views/viewpage/MotorsportList/MotorsportTrofeo";
import Motorsportsc from "./views/viewpage/MotorsportList/Motorsportsc";
import MotorsportModel from "./views/viewpage/MotorsportList/MotorsportModel";
import MotorsportDriver from "./views/viewpage/MotorsportList/MotorsportDriver";
import MotorsportExperience from "./views/viewpage/MotorsportList/MotorsportExperience";
import MotorsportEsports from "./views/viewpage/MotorsportList/MotorsportEsports";

import Sustainability from "./views/viewpage/Sustainability";
import Feedback from "./views/viewpage/Feedback";
import Accessibility from "./views/viewpage/Accessibility";
import Blog from "./views/viewpage/Blog";
import Blogdetail from "./views/viewpage/Blogdetail";
import Register from "./views/viewpage/Register";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Menubar />
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Product />
            </Route>
            <Route path="/ownership">
              <Ownership />
            </Route>
            <Route path="/connect">
              <OwnershipConnect />
            </Route>
            <Route path="/mobilityprogram">
              <MobilityProgram />
            </Route>

            <Route path="/customerapp">
              <CustomerApp />
            </Route>
            <Route path="/campaign">
              <Campaign />
            </Route>

            <Route path="/service">
              <Service />
            </Route>
            <Route path="/motorsportsc">
              <Motorsportsc />
            </Route>

            <Route path="/motorsporttrofeo">
              <MotorsportTrofeo />
            </Route>

            <Route path="/motorsportmodels">
              <MotorsportModel />
            </Route>
            <Route path="/motorsportdriver">
              <MotorsportDriver />
            </Route>

            <Route path="/motorsportexperience">
              <MotorsportExperience />
            </Route>

            <Route path="/motorsportesports">
              <MotorsportEsports />
            </Route>


            <Route path="/classics">
              <Classics />
            </Route>

            <Route path="/beyond">
              <Beyond />
            </Route>
            <Route path="/motorsport">
              <Motorsport />
            </Route>

            <Route path="/store">
              <Store />
            </Route>
            <Route path="/modeldetail">
              <Modeldetail />
            </Route>


            <Route path="/contact">
              <ContactUs />
            </Route>

            <Route path="/sustainability">
              <Sustainability />
            </Route>

            <Route path="/feedback">
              <Feedback />
            </Route>

            <Route path="/accessibility">
              <Accessibility />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>


            <Route path="/blog/:id">
              <Blogdetail />
            </Route>


            <Route path="/register">
              <Register />
            </Route>


            <Route path="/re">
              <Register />
            </Route>




          </Switch>
        </main>
        <footer>
          <Footerbar />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

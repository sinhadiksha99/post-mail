import React from 'react';
import './App.css';
import Header from "./Header";
import Mail from './Mail';
import EmailList from './EmailList';
import Sidebar from './Sidebar';
import SendMail from './SendMail';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className='app__body'>
          <Sidebar />

          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>

        <SendMail />
      </div>
    </Router>
  );
}

export default App;

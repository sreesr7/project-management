import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListProjectComponent from './components/ListProjectComponentLatest';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateProjectComponent from './components/CreateProjectComponent';
import UpdateProjectComponent from './components/UpdateProjectComponent';
import ViewProjectComponent from './components/ViewProjectComponent';
import Welcome from './components/Welcome';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent/>
                <div className="container">
                    <Switch> 
                    <Route path = "/" exact component = {Welcome}></Route>
                          <Route path = "/projects" component = {ListProjectComponent}></Route>
                          <Route path = "/add-project/:id" component = {CreateProjectComponent}></Route>
                          <Route path = "/view-project/:id" component = {ViewProjectComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent/>
        </Router>
    </div>
    
  );
}

export default App;

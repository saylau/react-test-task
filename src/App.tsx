import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {CoursesTablePage} from './components/CoursesTablePage'
import {CourseStudentsTablePage} from './components/CourseStudentsTablePage'
import {SideNav} from './components/SideNav'
// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div>
      <header className="App-header">
        <img className="App-logo" src="https://almau.edu.kz/img/logo_2018.png" alt="AlmaU"/>
        {/* <h3>AlmaU</h3> */}
      </header>
      
      <div/>
      <BrowserRouter>
      <SideNav/>
      <Switch>
        <Route path="/courses" component={CoursesTablePage}/>
        <Route path="/course" component={CourseStudentsTablePage}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

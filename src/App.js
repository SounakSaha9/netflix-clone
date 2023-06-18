import Header from './components/Header'
import Header1 from './components/Header1';
import './App.scss';
import './App.css';
import React from "react"
import HomeBanner from './components/HomeBanner';
import Login from './components/Login';
import Banner from './components/Banner'
import List from './components/List';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
   <React.Fragment>
   <Router>
    <Routes>
    <Route path='/' element={
      <React.Fragment>
        <Header />
        <HomeBanner />
      </React.Fragment>}></Route>
      <Route path='/login' element={
      <React.Fragment>
        <Header />
        <Login/>
      </React.Fragment>}></Route>
      <Route path='/register' element={
      <React.Fragment>
        <Header />
        <Login/>
      </React.Fragment>}></Route>
      <Route path='/dashboard'  element={
      <React.Fragment>
        <Header1  />
        <Banner />
        <List title="Netflix Originals" param="originals"/>
              <List title="Trending Now" param="trending"/>
              <List title="Now Playing" param="now_playing"/>
              <List title="popular" param="popular"/>
              <List title="Top Rated" param="top_rated"/>
              <List title="Upcoming" param="upcoming"/>
      </React.Fragment>}></Route>
      </Routes> 
   </Router>
   </React.Fragment>
  );
}

export default App;

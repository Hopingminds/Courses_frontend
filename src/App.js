import logo from './logo.svg';
import './App.css';
import Router from './Routing/route';
import { COURSESURL } from './Components/Confidential';
import { createContext, useState } from 'react';

function App() {

  return (
    <div className=' 2xl:px-[15%] overflow-x-hidden'>
   <Router/>
   </div>
  );
}

export default App;

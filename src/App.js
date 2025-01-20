import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import HomePage from './components/home/LyricsWeb';


const App = () => {
  return (
    <div>
     <Router>
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/:tab" element={<HomePage />} />
         </Routes>
       </Router>
    </div>
  )
}

export default App

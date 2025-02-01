import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import HomePage from './components/home/LyricsWeb';
import FilterPractice from './components/home/FilterPractice';
import Home from './components/view/Home'
import LocalStorageData from './components/home/LocalStorageData'


const App = () => {
  return (
    <div>
     <Router>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:category" element={<HomePage />} />
          <Route path="/about" element={<FilterPractice />} />
          <Route path="/data" element={<LocalStorageData />} />
         </Routes>
       </Router>
    </div>
  )
}

export default App

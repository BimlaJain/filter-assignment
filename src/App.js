import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import HomePage from './components/home/LyricsWeb';
import FilterPractice from './components/home/FilterPractice';


const App = () => {
  return (
    <div>
     <Router>
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<FilterPractice />} />
           <Route path="/:tab" element={<HomePage />} />
         </Routes>
       </Router>
    </div>
  )
}

export default App

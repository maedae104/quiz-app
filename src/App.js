import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


import Enter from './pages/enter.js'
import Questions from './pages/questions.js'
import FinalPage from './pages/finalpage.js'
import "./app.css"


function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/questions"> Take the quiz </Link>
        <Link to="/finalpage"> The End </Link>
      </nav>
    <div className="App">
        <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/finalpage" element={<FinalPage />} />
        </Routes>
      </div>
    </Router>
  );
}



export default App
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Enter from './pages/enter.js'
import Question1 from './pages/questions.js'
import Question2 from './pages/question2.js'
import Question3 from './pages/question3.js'
import FinalPage from './pages/finalpage.js'



function App() {
  return (
<Router>
    <div className="App">
        <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/question1" element={<Question1 />} />
        <Route path="/question2" element={<Question2 />} />
        <Route path="/question3" element={<Question3 />} />
        <Route path="/finalpage" element={<FinalPage />} />
        </Routes>
      </div>
    </Router>

  );
}



export default App
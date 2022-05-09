import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home';
import Survey from './components/survey';
import Result from './components/result';
import '../src/styles/styles.scss';

const App = () => {
  return (<div className="app">
          <Router>
              
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Survey/:user" element={<Survey />} />
                <Route path="/Result" element={<Result />} />
              </Routes>

              </Router>  
         </div>
)};

export default App;
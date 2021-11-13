import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/landing.component';
import './App.css';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

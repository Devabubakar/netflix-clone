import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/landing.component';
import Login from './components/login/login.component';
import NotFound from './components/notfound/notfound.component';
import './App.css';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route path='/login' element={<Login />} />

          {/* Global Error Handler */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

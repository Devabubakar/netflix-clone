import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import './App.css';
import ErrorBoundary from './components/error.boundary/error.boundary';
import Loader from './components/loader/loader.component';
import AuthProvider from './hooks/useAuth';
import ProtectedRoute from './hooks/protectedRoute';
const LandingPage = lazy(() => import('./pages/landing/landing.component'));
const Login = lazy(() => import('./components/login/login.component'));
const NotFound = lazy(() => import('./components/notfound/notfound.component'));
const Browse = lazy(() => import('./pages/browse/browse.component'));

function App() {
 
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <ErrorBoundary>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route path='/login' element={<Login />} />
                

                <Route
                  path='/browse'
                  element={
                    <ProtectedRoute>
                      <Browse />
                    </ProtectedRoute>
                  }
                />

                {/* Global Error Handler */}
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

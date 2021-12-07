import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';

import './App.css';
import ErrorBoundary from './components/error.boundary/error.boundary';
import Loader from './components/loader/loader.component';
import AuthProvider from './hooks/useAuth';
import ProtectedRoute from './hooks/protectedRoute';

const Watch = lazy(() => import('./pages/watch/watch.component'));
const LandingPage = lazy(() => import('./pages/landing/landing.component'));
const Login = lazy(() => import('./components/login/login.component'));
const NotFound = lazy(() => import('./components/notfound/notfound.component'));
const Browse = lazy(() => import('./pages/browse/browse.component'));
const SignUp = lazy(() => import('./components/signup/signup.component'));
const Navigation = lazy(() =>
  import('./components/navigation/navigation.component')
);
function App() {
  return (
    <div className='App'>
      <Router>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <AuthProvider>
            <Navigation />

            <Routes>
              <Route exact path='/' element={<LandingPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/trailers/:id' element={<Watch />} />

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
            </AuthProvider>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </div>
  );
}

export default App;

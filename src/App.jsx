import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import React, { Suspense, useContext } from 'react';
import Login from "./pages/Login/login"
import Profile from "./pages/Profile/Profile"
import Home from "./pages/Home/Home";
import NotFound from "./pages/404/NotFound";
import Register from "./pages/Register/register"
import CircularProgress from '@mui/material/CircularProgress';
import { AuthContext } from './context/AuthContext';

const ProtectedRoutes = ({ user }) => {
  console.log("user ProtectRoutes--------------------->", user);

  const isAuthenticated = user && user.username && user.email;

  if (!isAuthenticated) {
    return <Navigate to='/' replace />;
  }

  return (
    <Suspense fallback={
      <div className='loading-loader-section'>
        <CircularProgress color='success' />
      </div>
    }>
      <Outlet />
    </Suspense>
  );
}

const Un_Protected_Routes = ({ user }) => {
  console.log("user UnProtectedRoutes-------------------->", user);

  const isAuthenticated = user && user.username && user.email;

  if (isAuthenticated) {
    return <Navigate to='/home' replace />;
  }

  return (
    <Suspense fallback={
      <div className='loading-loader-section'>
        <CircularProgress color='success' />
      </div>
    }>
      <Outlet />
    </Suspense>
  );
}


function App() {

  const {user} = useContext(AuthContext)

  return (
    <>
      <Router>
        <Routes>
          <Route element = {<Un_Protected_Routes user = {user}/>}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route element={<ProtectedRoutes user = {user}/>}>
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route
            path="*"
            element={
              <>
                <Suspense fallback={
                  <div className='loading-loader-section'>
                    <CircularProgress color="success" />
                  </div>
                }
                />
                <NotFound />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App

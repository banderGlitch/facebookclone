import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import Login from "./pages/Login/login"
import Profile from "./pages/Profile/Profile"
import Home from "./pages/Home/Home";
import NotFound from "./pages/404/NotFound";
import Register from "./pages/Register/register"
import CircularProgress from '@mui/material/CircularProgress';


const ProtectedRoutes = () => {
  const token = true
  const isAuthenticated = token
  
  if (isAuthenticated === false) {
    return <Navigate to='/' replace />
  }

  return isAuthenticated ? (
    <Suspense fallback={
      <div className='loading-loader-section'>
        <CircularProgress color='success' />
      </div>
    }>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to='/' replace />
  )


}


const Un_Protected_Routes = () => {
  const token = false
  const isAuthenticated = token
  
  if (isAuthenticated === true) {
    return <Navigate to='/home' replace />
  }

  return !isAuthenticated ? (
    <Suspense fallback={
      <div className='loading-loader-section'>
        <CircularProgress color='success' />
      </div>
    }>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to='/' replace />
  )


}


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element = {<Un_Protected_Routes/>}>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Route>
          {/* <Route
            path="/login"
            element={
              <>
                <Suspense fallback={
                  <div className='loading-loader-section'>
                    <CircularProgress color="success" />
                  </div>
                }
                />
                <Login/>
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Suspense fallback={
                  <div className='loading-loader-section'>
                    <CircularProgress color="success" />
                  </div>
                }
                />
                <Register/>
              </>
            }
          /> */}
          <Route element={<ProtectedRoutes/>}>
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

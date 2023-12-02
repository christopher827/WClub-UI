import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Store from './redux/store';
import { loadUser } from './redux/actions/user';
import { light } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import './index.css';
import Home from './Pages/Home';
import ForgottenPassword from './Pages/ForgottenPassword';
import Profile from './Pages/Profile';
import ResetPassword from './Pages/ResetPassword';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import Receipt from './components/Receipt';

function App() {
  const {isAuthenticated}=useSelector((state)=>state.user)
useEffect(()=>{
  Store.dispatch(loadUser());
},[])

return(
  <>
<GlobalStyles/>
<ThemeProvider theme={light}>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={!isAuthenticated?<LoginPage/>:<Navigate to="/profile"/>}/>
  <Route path='/signup' element={!isAuthenticated?<SignUpPage/>:<Navigate to="/profile"/>}/>
  <Route path='/forgottenPassword' element={<ForgottenPassword/>}/>
  {/* <Route path="/receipt" element={isAuthenticated?<Receipt/>:<Navigate to="/login"/>}/> */}
  <Route path='/receipt' element={<Receipt/>}/>
  <Route path='/resetPassword/:id/:token' element={<ResetPassword/>}/>
  {/* <Route path='/profile' element={<Suspense fallback={<div>Loading...</div>}> */}

  {/* </Suspense>isAuthenticated?<Profile/>:<Navigate to="/login"/>}/> */}
  <Route path="/profile"  element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
  </Routes>
</ThemeProvider>
<ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss  draggable  pauseOnHover theme="dark" />
  </>
) 
}
export default App


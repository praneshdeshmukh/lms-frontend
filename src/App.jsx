/* eslint-disable no-unused-vars */
import './App.css'

import { Route , Routes } from 'react-router-dom';

import AboutUs from './Pages/AboutUs';
import HomePage from './Pages/HomePage'
import NotFound from './Pages/NotFound';
function App() {
  

  return (
    <>
      <Routes> 
        <Route path="/" element={ <HomePage/> }> </Route>
        <Route path="/about" element={ <AboutUs/> }> </Route>
        <Routes path="*" element={<NotFound/>}></Routes>
      </Routes>

    </>
  )
}

export default App

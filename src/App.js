
import './App.css';
import {Route,BrowserRouter as Router, Routes,}from 'react-router-dom';
import Home from './pages/home/Home';
import Navabar from './layout/navabar/Navabar'
import Footer from './layout/footer/Footer'
function App() {
  return (
    <>
    {/* <Navabar/>  */}
     
    <Router>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    </Routes>
   </Router>
   {/* <Footer/> */}
  
    </>
  );
}

export default App;

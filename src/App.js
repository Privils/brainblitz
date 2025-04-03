import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Header from './components/Header';
import Home from './components/Home';
import Quize from './components/Quize';

function App() {
  return (
   <>
     <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/Quize' element={<Quize/>}/>
      </Routes>
     </Router>
   </>
  );
}

export default App;

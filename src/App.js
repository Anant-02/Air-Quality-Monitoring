import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header.js';
import Home from './components/Home';
import Carbon from './components/Cards/Carbon';
import Ozone from './components/Cards/Ozone'
import Gases from './components/Cards/Gases';
import Dust from './components/Cards/Dust';

function App() {
  return (
    <div className="App">
       <Header />
       <br></br>
       <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
            <Route exact path='/ozone' element={<Ozone />}></Route>
            <Route exact path='/carbon' element={<Carbon />}></Route>
            <Route exact path='/gases' element={<Gases />}></Route>
            <Route exact path='/dust' element={<Dust />}></Route>
          </Routes>
        </div>
       </Router>
    </div>
  );
}

export default App;

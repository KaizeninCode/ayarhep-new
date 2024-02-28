import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About';
import FocusArea from './components/FocusArea';
import Footer from './components/Footer';
import Home from './components/Home';
import News from './components/News';

function App() {
  return (
    <Router>      
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/focus' element={<FocusArea/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/contact-info' element={<Footer/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

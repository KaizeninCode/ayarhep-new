import './App.css';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './components/About';
import FocusArea from './components/FocusArea';
import Footer from './components/Footer';
import Home from './components/Home';
import NavBar from './components/NavBar';
import News from './components/News';

function App() {
  return (
      <div className="App">
        <NavBar/>
        <Home/>
        <About/>
        <FocusArea/>
        <News/>
        <Footer/>
      </div>
  );
}

export default App;

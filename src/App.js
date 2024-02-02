import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./Home"
import Main from './Main';
import Single from './Single';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="main" element={ <Main/> } />
        <Route path="single/:id" element={ <Single/> } />
      </Routes>
    </div>
  );
}

export default App;

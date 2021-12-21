import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route exact path="/" element={ <Home />}/>
      <Route path="/projects" element={ <Projects /> } />
    </Routes>
    </>
  );
}

export default App;

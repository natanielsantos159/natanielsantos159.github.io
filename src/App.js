import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Credits from './pages/Credits';
import Header from './components/Header';
import './App.css';
import Provider from './context/Provider';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  color: {
    primary: {
      light: '#70c3ff',
      main: '#4db5ff',
      dark: '#1f1f38',
      contrastText: '#fff'
    },
    secondary: {
      main: '#2c2c6c',
      contrastText: '#fff'
    },
    text: '#fff',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;

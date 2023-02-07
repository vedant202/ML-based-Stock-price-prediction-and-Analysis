import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage';

function App() {
  return (
    <div className="App">
      <div>
        
        {/* <h1>Hi Vedant</h1> */}
        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

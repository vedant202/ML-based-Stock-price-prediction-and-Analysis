import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Footer_layout from './components/Footer_layout';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage';
import Stockpage from './pages/Stockpage';

function App() {
  return (
    <div className="App">
      <div >
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="stockpage" element={<Stockpage />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      <Footer_layout />
      </BrowserRouter>
      
      </div>
    </div>
  );
}

export default App;

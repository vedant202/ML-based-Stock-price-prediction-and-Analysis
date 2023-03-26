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
import News from './pages/News';
import StockSearchPage from './pages/StockSearchPage';
import Register from './pages/Register';
import Sigin from './pages/Sigin';
import {useState} from 'react'
// import { useNavigate } from 'react-router-dom'


function App() {

  const [isUserLoggedIn,setUserLoggedIn] = useState(false)
  console.log(isUserLoggedIn)


  const userAuthentication = (c)=>{
    
    setUserLoggedIn(c)
  }

  return (
    <div className="App">
      <div >
      <BrowserRouter>
        
        <Routes>
          <Route  path="/" element={<Navbar isUserLoggedIn ={isUserLoggedIn} userAuthentication={userAuthentication} />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="stockpage" element={<Stockpage />} />
            <Route path="news" element={<News />} />
            <Route path="stock_search" element={<StockSearchPage />} />
            <Route path="register" element={<Register />} />
            <Route  path="sigin" element={<Sigin isUserLoggedIn ={isUserLoggedIn} userAuthentication={userAuthentication} />} />
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

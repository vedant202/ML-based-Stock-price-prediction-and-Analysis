import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Footer_layout from './components/Footer_layout';
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage';
import Stockpage from './pages/Stockpage';
import News from './pages/News';
import StockSearchPage from './pages/StockSearchPage';
import Register from './pages/Register';
import Sigin from './pages/Sigin';
import { useEffect,useState } from 'react';

// import { useNavigate } from 'react-router-dom'
import getCsrfToken from './components/CsrfTocken'; 


function App() {
  const [niftydata,setNiftydata] = useState({Date:"",Close:""});
  const fetchNiftyData = async()=>{
    const response = await fetch("http://localhost:8000/getNiftyData/",{
            method:'GET',
            // headers:(
            //     {'X-CSRFToken': await getCsrfToken()}
            // ),
            // body:JSON.stringify(stock_ticker),
            credentials:'include'
        })
    const data = await response.json();
    let json_nifty_data = JSON.parse(data.nifty_data)
    console.log("App.js",json_nifty_data)
    setNiftydata({Date:Object.values(json_nifty_data['Date']),Close:Object.values(json_nifty_data['Close'])})
}

  useEffect(()=>{
    fetchNiftyData()

  },[])
  
  return (
    <div className="App">
      <div >
      <BrowserRouter>
        
        <Routes>
          <Route  path="/" element={<Navbar />}>
            <Route index element={<Home niftydata={niftydata}  />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="stockpage" element={<Stockpage />} />
            <Route path="news" element={<News />} />
            <Route path="stock_search" element={<StockSearchPage />} />
            <Route path="register" element={<Register />} />
            <Route  path="sigin" element={<Sigin  />} />
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

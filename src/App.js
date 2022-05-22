import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Product from './components/Product';
import BusinessType from './components/BusinessType';
import Company from './components/Company';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/business" element={<BusinessType/>}/>
          <Route path="/company" element={<Company/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

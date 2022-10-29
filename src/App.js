import Navbar from "./componnents/Nav_Bar";
import SideBar from "./componnents/SideBar";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from "./componnents/pages/Home";
import Products from "./componnents/pages/Products";
import AddProducts from "./componnents/pages/AddProducts";


function App() {
  return (
    <div className="App">
      
      <Navbar></Navbar>
      <div className="row">
      <div className="col-2 sidebar">
        <SideBar></SideBar>
      </div>
      <div className="col-10">
      <Routes>
        <Route path="/" element={<Home>/</Home>} />
        <Route path="products" element={<Products></Products>} />
        <Route path="products/add" element={<AddProducts></AddProducts>} />
      </Routes>
      </div>
      </div>
     
    
    </div>
  );
}

export default App;

import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import HeaderCards from './Components/Header/HeaderCards';
import Products from './Components/Products/Products';
import Online from './Components/Online/Online';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Home/Home';
import Error from './routes/Error';
import SingleBlog from './routes/SingleBlog';
import SingleProduct from './routes/SingleProduct';
import ShopList from './routes/ShopList';
import BlogPage from './routes/BlogPage';
import Shop from './routes/Shop'





function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<AboutUs />} />
        <Route path='/blogpage' element={<BlogPage />} />
        <Route path='/singleblog' element={<SingleBlog />} />
        <Route path='/singleproduct' element={<SingleProduct />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shoplist' element={<ShopList />} />
        <Route path='/error' element={<Error />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
  
import Whishlist from "./Pages/Whishlist";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Publish from "./Pages/Publish";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector(state=>state.user.currentUser) ; 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products/:category" element={<ProductList />}></Route>
        <Route path="product/:id" element={<Product />}></Route>
        <Route path="whishlist" element= {<Whishlist />}></Route>
        <Route path="publish" element= {<Publish />}></Route>
        <Route path="login" element= { user ? <Navigate to="/" /> : <Login/>} ></Route>
        <Route path="register" element={ user ? <Navigate to="/" /> : <Register/>}></Route>
      </Routes>
    </div>
  );
};

export default App;

import Whishlist from "./Pages/Whishlist";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Publish from "./Pages/Publish";
import {
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products/:category" element={<ProductList />}></Route>
        <Route path="product/:id" element={<Product />}></Route>
        <Route path="whishlist" element= {<Whishlist />}></Route>
        <Route path="publish" element= { <Publish /> }></Route>
      </Routes>
    </div>
  );
}; 

export default App;
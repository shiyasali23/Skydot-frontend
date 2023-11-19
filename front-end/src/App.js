import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Shirts from "./Components/Shirts/Shirts";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Contexts/CartProvider";
import Tshirts from "./Components/Tshirts/Tshirts";
import Pants from "./Components/Pants/Pants";
import ProductPage from "./Components/ProductPage/ProductPage";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Shirts />} />
            <Route path="/tshirts" element={<Tshirts />} />
            <Route path="/pants" element={<Pants />} />
            <Route path="/product/:id" element={<ProductPage/>} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

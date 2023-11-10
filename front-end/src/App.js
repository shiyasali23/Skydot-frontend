import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduction from './Components/Introduction/Introduction';
import Store from './Components/Store/Store';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Contexts/CartProvider';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Introduction/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

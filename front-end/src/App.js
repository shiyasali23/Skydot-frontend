import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduction from './Components/Introduction/Introduction';
import Store from './Components/Store/Store';
import Header from './Components/Header/Header';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Introduction/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

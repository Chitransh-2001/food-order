
import './App.css';
import Home from './Screen/Home';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import { CartProvider } from './Components/ContextReducer';
import Cart from './Screen/Cart';
import MyOrders from './Screen/MyOrders';
function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/createuser' element={<Signup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/myorder' element={<MyOrders/>}/>
      </Routes>
    </Router>
    </CartProvider>
  );
}

export default App;

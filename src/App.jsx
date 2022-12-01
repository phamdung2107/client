import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from './pages/Success';
import { useSelector } from "react-redux";
import { redirect } from 'react-router-dom'

const App = () => {

  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:cat' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
        <Route path='/login' element={ <Login />} /> 
        <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
};

export default App;

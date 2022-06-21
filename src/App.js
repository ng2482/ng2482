import './App.css';
import FooterComponent from './components/FooterComponent';
import ProductList from './components/ProductList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import UserDetails from './components/UserDetails';
import UserDelete from './components/UserDelete';
import UserUpdate from './components/UserUpdate';
import CartList from './components/CartList';
import Logout from './components/Logout';
import { PaytmButton } from './components/paytmButton';

function App() {


  return (
    <div className="App">
      <Router>
        <div className='contain'>
          <div className='contain1'>
            <Routes>
              <Route path='/' element={<ProductList />}></Route>
              <Route path='/products' element={<ProductList />}></Route>
              <Route path='/login' element={<LoginForm />}></Route>
              <Route path='/register' element={<SignupForm />}></Route>
              <Route path='/profile' element={<UserDetails />}></Route>
              <Route path='/update' element={<UserUpdate />}></Route>
              <Route path='/delete' element={<UserDelete />}></Route>
              <Route path='/cart' element={<CartList />}></Route>
              <Route path='/logout' element={<Logout />}></Route>
              <Route path='/pay' element={<PaytmButton />}></Route>


            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;

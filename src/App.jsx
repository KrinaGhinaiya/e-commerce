import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home';
import ProductDetails from './ProductDetails';
import Header from './Navbar';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignIn';
import { store } from './Redux/store';
import {Provider} from 'react-redux'

function App() {
 
  return (
    <>
          <BrowserRouter>
            <Provider store={store}>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productdetails/:id" element={<ProductDetails/>} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/signIn" element={<SignIn />} />
              </Routes>
            </Provider>
          </BrowserRouter>
        
    </>
  )
}

export default App

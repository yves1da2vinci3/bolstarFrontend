import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import './index.css'
import { RecoilRoot } from 'recoil'
// importation des screens
import HomeScreen from './Screens/HomeScreen'
import CartScreen from './Screens/CartScreen'
import AboutUsScreen from "./Screens/AboutUsScreen"
import MainSignup from './Screens/Auth/Signup/MainSignup'
import FarmerSignup from './Screens/Auth/Signup/FarmerSignup'
import ProviderSignup from './Screens/Auth/Signup/ProviderSignup'
import LoginScreen from './Screens/Auth/LoginScreen'
import OneProduct from './Screens/Products/OneProduct'
import AllProducts from './Screens/Products/AllProducts'
import Layout from './Layout/Layout'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  

  return (
    <RecoilRoot>
      <ToastContainer/>
    <Router>
      <Routes>
        <Route  element={<Layout/>} >
        <Route path='/' element={  <HomeScreen />   } />
        <Route path='/about' element={ <AboutUsScreen /> } />
        <Route path='/products' element={<AllProducts /> } />
        </Route>
      
        <Route path='/cart' element={<CartScreen /> } />
        <Route path='/product/:idProduct' element={<OneProduct /> } />
       
        <Route path='/signup/main' element={<MainSignup /> } />
        <Route path='/signup/farmer' element={ <FarmerSignup/>} />
        <Route path='/signup/provider' element={<ProviderSignup/>} />
        <Route path='/login' element={<LoginScreen/>} />
      </Routes>
    </Router>
    </RecoilRoot>
  )
}

export default App

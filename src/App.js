import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Card from './components/Card';
import CardSection from './components/CardSection';
import CardPage from './components/CardPage';
import Logo from './components/Logo';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import ViewDetails from './components/ViewDetails';
import Crystal from './components/Crystal';
import Phantom from './components/Phantom';
import Sponge from './components/Sponge';
import CartPage from './components/CartPage';
function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
        <Route path='/' element={
        <>
          <HomePage/>
          <Card/>
          <CardSection/>
          <CardPage/>
          <Logo/>
          <Footer/>
        </>
      }/>
        <Route path='/viewdetails' element={<ViewDetails/>}/>
        <Route path='/crystal' element={<Crystal/>}/>
        <Route path='/phantom' element={<Phantom/>}/>
        <Route path='/sponge' element={<Sponge/>}/>
        <Route path='/cart' element={<CartPage/>}/>
     </Routes>
    </div>
  );
}

export default App;

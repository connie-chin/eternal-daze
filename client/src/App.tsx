import './App.css';
import { Header } from './components/Header';
import { ShopAll } from './pages/ShopAll';
import { Route, Routes } from 'react-router-dom';
import { Shirts } from './pages/Shirts';
import { Pants } from './pages/Pants';
import { Shoes } from './pages/Shoes';
import { Details } from './pages/Details';
import { PantDetails } from './pages/PantDetails';
import { ShirtDetails } from './pages/ShirtDetails';
import { ShoeDetails } from './pages/ShoeDetails';
import { Cart } from './pages/Cart';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<ShopAll />} />
        <Route path="shirts" element={<Shirts />} />
        <Route path="shirts/:productId" element={<ShirtDetails />} />
        <Route path="pants" element={<Pants />} />
        <Route path="pants/:productId" element={<PantDetails />} />
        <Route path="shoes" element={<Shoes />} />
        <Route path="shoes/:productId" element={<ShoeDetails />} />
        <Route path="products/:productId" element={<Details />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

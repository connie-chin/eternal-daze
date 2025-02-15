import './App.css';
import { Header } from './components/Header';
import { ShopAll } from './pages/ShopAll';
import { Route, Routes } from 'react-router-dom';
import { Shirts } from './pages/Shirts';
import { Pants } from './pages/Pants';
import { Shoes } from './pages/Shoes';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<ShopAll />} />
        <Route path="shirts" element={<Shirts />} />
        <Route path="pants" element={<Pants />} />
        <Route path="shoes" element={<Shoes />} />
      </Route>
    </Routes>
  );
}

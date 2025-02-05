import './App.css';
import { Header } from './components/Header';
import { ShopAll } from './pages/ShopAll';

export default function App() {
  return (
    <div className="max-w-auto h-screen border-2">
      <Header />
      <ShopAll />
    </div>
  );
}

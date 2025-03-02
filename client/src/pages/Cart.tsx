import { Link } from 'react-router-dom';
import { HiArrowLongRight } from 'react-icons/hi2';

export function Cart() {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <div className="text-4xl font-semibold mb-4">Your cart</div>
      <div className="text-xl mb-6">Your cart is currently empty.</div>
      <Link to="/">
        <button className="bg-[#D97941] px-6 py-2 text-white rounded-md flex items-center gap-3 text-xl">
          Continue Shopping
          {<HiArrowLongRight />}
        </button>
      </Link>
    </div>
  );
}

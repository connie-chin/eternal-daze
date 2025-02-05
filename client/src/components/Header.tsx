import './Header.css';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineUser, HiOutlineShoppingBag } from 'react-icons/hi2';

export function Header() {
  return (
    <>
      <div className="flex max-w-full border-2 justify-between items-center p-7">
        <div className="text-2xl w-[78px] border-2 border-red-400">
          <HiOutlineSearch />
        </div>
        <h1 className="text-4xl text-orange-400 md:flex-1 md: text-left text-center border-2 border-red-400">
          Eternal Daze
        </h1>
        <div className="text-2xl flex w-[78px] justify-end gap-4 md:ml-auto border-2 border-red-400">
          <HiOutlineUser />
          <HiOutlineShoppingBag />
        </div>
      </div>
      <div className="flex justify-center text-[15px]">
        <p className="m-[20px]">Shop All</p>
        <p className="m-[20px]">Shirts</p>
        <p className="m-[20px]">Pants</p>
        <p className="m-[20px]">Shoes</p>
      </div>
      <div className="flex justify-center max-w-full">
        <img src="../images/hero4.JPG" />
      </div>
    </>
  );
}

import './Header.css';
import { HiOutlineSearch, HiOutlineMenu } from 'react-icons/hi';
import { HiOutlineUser, HiOutlineShoppingBag } from 'react-icons/hi2';

export function Header() {
  return (
    <>
      <div className="flex max-w-full border-2 p-7 justify-between md:justify-center md:items-center">
        <h1 className="text-4xl text-orange-400">Eternal Daze</h1>
        <div className="flex justify-evenly items-center md:ml-auto">
          <div className="text-2xl w-[30px] flex justify-center md:ml-auto">
            <HiOutlineSearch />
          </div>
          <div className="text-2xl w-[30px] flex justify-center md:ml-auto">
            <HiOutlineUser />
          </div>
          <div className="text-2xl w-[30px] flex justify-center md:ml-auto">
            <HiOutlineShoppingBag />
          </div>
          <div className=" text-2xl w-[30px] flex justify-center md:hidden">
            <HiOutlineMenu />
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[15px] hidden md:flex">
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

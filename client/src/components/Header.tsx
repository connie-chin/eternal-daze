import './Header.css';
import { HiOutlineSearch, HiOutlineMenu } from 'react-icons/hi';
import { HiOutlineUser, HiOutlineShoppingBag } from 'react-icons/hi2';
import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="flex max-w-full border-2 p-7 justify-between md:justify-center md:items-center">
        <h1 className="text-4xl text-[#D97941] playfair-display-lobster">
          eternal daze
        </h1>
        <div className="flex justify-evenly items-center md:ml-auto">
          <div className="text-2xl w-[30px] flex justify-center md:ml-auto">
            <HiOutlineSearch />
          </div>
          <div className="text-2xl w-[30px] flex justify-center md:ml-auto">
            <HiOutlineUser />
          </div>
          <Link
            to="/cart"
            className="text-2xl w-[30px] flex justify-center md:ml-auto">
            <HiOutlineShoppingBag />
          </Link>
          <div
            className=" text-2xl w-[30px] flex justify-center md:hidden"
            onClick={toggleMenu}>
            <HiOutlineMenu />
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-white">
          <p className="m-[20px menuItem px-[18px] py-[12px]">
            <Link to="/" onClick={toggleMenu}>
              Shop All
            </Link>
          </p>
          <p className="m-[20px menuItem px-[18px] py-[12px]">
            <Link to="/shirts" onClick={toggleMenu}>
              Shirts
            </Link>
          </p>
          <p className="m-[20px menuItem px-[18px] py-[12px]">
            <Link to="/pants" onClick={toggleMenu}>
              Pants
            </Link>
          </p>
          <p className="m-[20px menuItem px-[18px] py-[12px]">
            <Link to="/shoes" onClick={toggleMenu}>
              Shoes
            </Link>
          </p>
        </div>
      </div>

      <div className="flex justify-center text-[15px] hidden md:flex">
        <p className="m-[20px]">
          <Link to="/">Shop All</Link>
        </p>
        <p className="m-[20px]">
          <Link to="/shirts">Shirts</Link>
        </p>
        <p className="m-[20px]">
          <Link to="/pants">Pants</Link>
        </p>
        <p className="m-[20px]">
          <Link to="/shoes">Shoes</Link>
        </p>
      </div>
      <div className="flex justify-center max-w-full mb-[20px] min-h-[110px]">
        <img src="../images/hero4.JPG" />
      </div>
      <Outlet />
    </>
  );
}

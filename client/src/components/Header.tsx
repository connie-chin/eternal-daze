import './Header.css';
import { HiOutlineSearch } from 'react-icons/hi';
import { HiOutlineUser, HiOutlineShoppingBag } from 'react-icons/hi2';

export function Header() {
  return (
    <>
      <div className="firstLine">
        <div className="icons leftIcon">
          <HiOutlineSearch />
        </div>
        <h1>Eternal Daze</h1>
        <div className="icons">
          <div className="rightIcon">
            <HiOutlineUser />
          </div>
          <div className="rightIcon">
            <HiOutlineShoppingBag />
          </div>
        </div>
      </div>
      <div className="navBar">
        <p className="navBarTitle">Shop All</p>
        <p className="navBarTitle">Shirts</p>
        <p className="navBarTitle">Pants</p>
        <p className="navBarTitle">Shoes</p>
      </div>
      <div className="heroImage">
        <img src="../images/hero4.JPG" />
      </div>
    </>
  );
}

import React, { useState, useRef } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useOnClickOutside from "use-onclickoutside";
import { useCart } from "../contexts/use-cart";
import Cart from "./Cart";

export default function Header() {
  const { cart } = useCart();

  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  // close the modal if we click outside of it
  useOnClickOutside(modalRef, () => setIsOpen(false));

  return (
    <header className='navbar fixed-top navbar-expand-lg navbar-light'>
      <img
        className='navbar-brand brandTitle'
        alt='logo'
        src='//contents.sixshop.com/uploadedFiles/70108/default/image_1594847417734.png'
      ></img>

      <div className='container collapse navbar-collapse' id='navbarColor01'>
        <ul className='container navbar-nav flex-row'>
          <div className='nav-item active'>
            <a className='nav-link' href='/'>
              Home
            </a>
          </div>
          <div className='nav-item'>
            <a className='nav-link' href='#products'>
              <b>Store</b>
            </a>
          </div>
          <div className='nav-item'>
            <p>About</p>
          </div>
          <div className='cart-button'>
            <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
              <ShoppingCartIcon />{" "}
              <span className='badge badge-pill badge-success'>
                {cart.length}
              </span>
            </button>

            {/* show a modal */}
            <div
              ref={modalRef}
              className='cart-modal'
              style={{ display: isOpen ? "block" : "none" }}
            >
              <Cart />
            </div>
          </div>
        </ul>
      </div>
    </header>
  );
}

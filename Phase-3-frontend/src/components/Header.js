import React from "react";
import Navbar from './Navbar'


function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
        
        <img src={"https://i.pinimg.com/originals/91/c4/e7/91c4e7398cad49776acfeeb3b88f7ed8.png"} alt={"ClothingShop"}/>
        <a href="/" className="header-logo"></a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__seperator" />
        </section>
      </section>
      
    </section>
  )
}

export default Header;

import { useState } from "react";
import Logo from "./logo/logo";
import DropdownMenu from "./dropdown_menu/dropdown_menu";
import Sidemenu from "./sidemenu/sidemenu";
import Burger from "./burger/burger";
import "../../style.css";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleMenu = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  return (
    <nav className="header_menu">
      <Sidemenu isOpen={isBurgerOpen} />
      <Logo />
      <DropdownMenu />
      <Burger toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Header;

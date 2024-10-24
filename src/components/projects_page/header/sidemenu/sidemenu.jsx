import { MENU_CONTENT } from "../../../../data/header_content.js";
import MainItemSide from "./mainitemside/mainitemside.jsx";
import "./sidemenu.css";

const Sidemenu = (isOpen) => {
  return (
    <ul className={!isOpen.isOpen ? "closed_side_bar" : "active_side_bar"}>
      {MENU_CONTENT.map((main_menu_side, index) => (
        <MainItemSide key={index} main_menu_side={main_menu_side} />
      ))}
    </ul>
  );
};

export default Sidemenu;

import { MENU_CONTENT } from "../../../data/header_content.js";
import MainItemSide from "./mainitemside";

const Sidemenu = (isOpen) => {
  return (
    <ul
      className="sidebar_menu"
      style={{ display: isOpen.isOpen ? "flex" : "none" }}
    >
      {MENU_CONTENT.map((main_menu_side, index) => (
        <MainItemSide key={index} main_menu_side={main_menu_side} />
      ))}
    </ul>
  );
};

export default Sidemenu;

import { MENU_CONTENT } from "../../../../data/header_content.js";
import MainItem from "./main_item/main_item.jsx";
import "./dropdown_menu.css";

const DropdownMenu = () => {
  return (
    <ul className="dropdown_menu">
      {MENU_CONTENT.map((main_menu) => (
        <MainItem key={main_menu.main} main_menu={main_menu} />
      ))}
    </ul>
  );
};

export default DropdownMenu;

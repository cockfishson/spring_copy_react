import { menuContent } from "../../../../data/menu_content.js";
import MainItem from "./main_item/main_item.jsx";
import "./dropdown_menu.css";

const DropdownMenu = () => {
  return (
    <ul className="dropdown_menu">
      {menuContent.map((main_menu) => (
        <MainItem key={main_menu.main} main_menu={main_menu} />
      ))}
    </ul>
  );
};

export default DropdownMenu;

import { menuContent } from "../../../../data/menu_content.js";
import MainItem from "./main_item/main_item.jsx";
import "./dropdown_menu.css";
import LogoutItem from "../logout_item/logout_item.jsx";

const DropdownMenu = () => {
  return (
    <ul className="dropdown_menu">
      {menuContent.map((main_menu) => (
        <MainItem key={main_menu.main} main_menu={main_menu} />
      ))}
      <LogoutItem />
    </ul>
  );
};

export default DropdownMenu;

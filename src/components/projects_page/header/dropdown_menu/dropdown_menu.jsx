import { useSelector } from "react-redux";
import MainItem from "./main_item/main_item.jsx";
import "./dropdown_menu.css";

const DropdownMenu = () => {
  const menuContent = useSelector((state) => state.headerContent.header);
  return (
    <ul className="dropdown_menu">
      {menuContent.map((main_menu) => (
        <MainItem key={main_menu.main} main_menu={main_menu} />
      ))}
    </ul>
  );
};

export default DropdownMenu;

import { useSelector } from "react-redux";
import MainItemSide from "./mainitem_side/main_item_side.jsx";
import "./sidemenu.css";

const Sidemenu = (isOpen) => {
  const menuContent = useSelector((state) => state.headerContent.header);
  return (
    <ul className={!isOpen.isOpen ? "closed_side_bar" : "active_side_bar"}>
      {menuContent.map((main_menu_side, index) => (
        <MainItemSide key={index} main_menu_side={main_menu_side} />
      ))}
    </ul>
  );
};

export default Sidemenu;
import Submenu from "../submenu/submenu";
import "./main_item.css";

const MainItem = ({ main_menu }) => {
  return (
    <li className="main_item">
      <p className="menu_txt">{main_menu.main}</p>
      <Submenu subs={main_menu.subs} />
    </li>
  );
};

export default MainItem;

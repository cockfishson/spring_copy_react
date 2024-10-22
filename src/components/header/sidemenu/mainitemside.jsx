import React, { useState } from "react";
import SubmenuSide from "./submenuside";

const MenuItemSide = ({ main_menu_side }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="main_item_side">
      {isOpen ? (
        <>
          <p className={"menu_txt_side rotate-180"} onClick={toggleSubmenu}>
            {main_menu_side.main}
          </p>
          <SubmenuSide subs={main_menu_side.subs} />
        </>
      ) : (
        <p className={"menu_txt_side"} onClick={toggleSubmenu}>
          {main_menu_side.main}
        </p>
      )}
    </li>
  );
};

export default MenuItemSide;

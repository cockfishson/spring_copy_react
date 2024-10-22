import React from "react";
import { MENU_CONTENT } from "../../../data/header_content.js";
import MainItem from "./mainitem";

const DropdownMenu = () => {
  return (
    <ul class="dropdown_menu" id="dropdown_menu">
      {MENU_CONTENT.map((main_menu, index) => (
        <MainItem key={index} main_menu={main_menu} />
      ))}
    </ul>
  );
};

export default DropdownMenu;

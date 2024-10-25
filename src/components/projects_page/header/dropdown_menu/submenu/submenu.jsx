import { ReactComponent as SubIcon } from "../../../../../media/header_icons/submenu_icon.svg";
import classNames from "classnames";
import "./submenu.css";

const Submenu = ({ subs }) => {
  return (
    <ul className="submenu">
      {subs.map((sub) => (
        <li
          key={sub.title}
          className={classNames({
            view_all_sub: sub.type === "viewAll",
            dev_tools: sub.type === "devTools",
            special: sub.type === "special",
          })}
        >
          <span className="text_and_svg">
            <p
              className={classNames("sub_txt", {
                link_span: sub.type === "viewAll",
                special_p: sub.type === "special",
              })}
            >
              {sub.title}
            </p>
            {sub.type === "special" && <SubIcon className="inline_svg" />}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Submenu;

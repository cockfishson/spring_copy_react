import "./submenu_side.css";

const SubmenuSide = ({ subs }) => {
  return (
    <ul className="submenu_side">
      {subs.map((sub, index) => {
        if (sub.title === "DEVELOPMENT TOOLS") {
          return (
            <li key={index}>
              <p id="DEVELOPMENT_tools">DEVELOPMENT TOOLS</p>
            </li>
          );
        } else {
          return (
            <li key={index}>
              <p className="sub_txt_side">{sub.title}</p>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default SubmenuSide;

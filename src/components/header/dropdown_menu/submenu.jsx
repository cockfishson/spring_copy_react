import subSmallIcon from "../../../media/header_icons/sub_small_icon.svg";

const Submenu = ({ subs }) => {
  return (
    <ul className="submenu">
      {subs.map((sub) => {
        if (sub === "View all projects") {
          return (
            <li key={sub} className="view_all_sub">
              <p className="sub_txt">
                <span className="link_span">View all projects</span>
              </p>
            </li>
          );
        } else if (sub === "DEVELOPMENT TOOLS") {
          return (
            <li key={sub}>
              <p id="DEVELOPMENT_tools">DEVELOPMENT TOOLS</p>
            </li>
          );
        } else if (sub === "Spring Initializr") {
          return (
            <li key={sub}>
              <span>
                <p className="sub_txt" id="special_p">
                  Spring Initializr
                </p>
                <img src={subSmallIcon} alt="small_icon" />
              </span>
            </li>
          );
        } else {
          return (
            <li key={sub}>
              <p className="sub_txt">{sub}</p>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Submenu;

import React from "react";

const Submenu = ({ subs }) => {
  return (
    <ul className="submenu">
      {subs.map((sub, index) => {
        if (sub === "View all projects") {
          return (
            <li key={index} className="view_all_sub">
              <p className="sub_txt">
                <span className="link_span">View all projects</span>
              </p>
            </li>
          );
        } else if (sub === "DEVELOPMENT TOOLS") {
          return (
            <li key={index}>
              <p id="DEVELOPMENT_tools">DEVELOPMENT TOOLS</p>
            </li>
          );
        } else if (sub === "Spring Initializr") {
          return (
            <li key={index}>
              <span className="text_and_svg">
                <p className="sub_txt" id="special_p">
                  Spring Initializr
                </p>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="arrow-up-right-from-square"
                  className="inline_svg"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    className="path_for_inline_svg"
                    fill="currentColor"
                    d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                  ></path>
                </svg>
              </span>
            </li>
          );
        } else {
          return (
            <li key={index}>
              <p className="sub_txt">{sub}</p>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Submenu;

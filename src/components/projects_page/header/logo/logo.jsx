import LogoSvg from "../../../media/header_icons/logo.svg";
import "./logo.css";

const Logo = () => {
  return (
    <div class="logo_wrap">
      <img src={LogoSvg} alt="Logo" />
    </div>
  );
};

export default Logo;
